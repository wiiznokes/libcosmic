// Copyright 2022 System76 <info@system76.com>
// SPDX-License-Identifier: MPL-2.0

//! Lazily-generated SVG icon widget for Iced.

use iced::{
    widget::{svg, Image},
    Length, ContentFit,
};
use std::{borrow::{Cow, Borrow}, ffi::OsStr, path::Path};
use std::hash::Hash;
use std::rc::Rc;
use derive_setters::Setters;
use crate::{Element, Renderer};

#[derive(Debug, Hash)]
pub enum IconSource<'a> {
    Path(&'a Path),
    Name(Cow<'a, str>),
    Embedded(Image),
}

impl<'a> From<&'a Path> for IconSource<'a> {
    fn from(value: &'a Path) -> Self {
        Self::Path(value)
    }
}

impl<'a> From<Cow<'a, str>> for IconSource<'a> {
    fn from(value: Cow<'a, str>) -> Self {
        Self::Name(value)
    }
}

impl<'a> From<String> for IconSource<'a> {
    fn from(value: String) -> Self {
        Self::Name(value.into())
    }
}

impl<'a> From<&'a str> for IconSource<'a> {
    fn from(value: &'a str) -> Self {
        Self::Name(value.into())
    }
}

impl<'a> From<Image> for IconSource<'a> {
    fn from(value: Image) -> Self {
        Self::Embedded(value)
    }
}

/// A lazily-generated icon.
#[derive(Hash, Setters)]
pub struct Icon<'a> {
    #[setters(skip)]
    name: IconSource<'a>,
    #[setters(into)]
    theme: Cow<'a, str>,
    style: crate::theme::Svg,
    size: u16,
    #[setters(strip_option)]
    content_fit: Option<ContentFit>,
    #[setters(strip_option)]
    width: Option<Length>,
    #[setters(strip_option)]
    height: Option<Length>,
    force_svg: bool,

}

/// A lazily-generated icon.
#[must_use]
pub fn icon<'a>(name: impl Into<IconSource<'a>>, size: u16) -> Icon<'a> {
    Icon {
        content_fit: None,
        height: None,
        name: name.into(),
        size,
        style: crate::theme::Svg::default(),
        theme: Cow::Borrowed("Pop"),
        width: None,
        force_svg: false
    }
}

impl<'a> Icon<'a> {
    #[must_use]
    fn into_element<Message: 'static>(self) -> Element<'a, Message> {
        if let IconSource::Embedded(mut image) = self.name {
            image = image
            .width(self.width.unwrap_or(Length::Units(self.size)))
            .height(self.height.unwrap_or(Length::Units(self.size)));
            if let Some(content_fit) = self.content_fit {
                image = image.content_fit(content_fit);
            }
            return image.into();
        }

        let element = Rc::new(self);
        let element_clone = Rc::clone(&element);

        iced_lazy::lazy(element_clone, move || -> Element<Message> {
            let icon = match &element.name {
                IconSource::Path(path) => Some(Cow::from(*path)),
                IconSource::Name(name) => {
                    let icon = freedesktop_icons::lookup(&name)
                        .with_size(element.size)
                        .with_theme(&element.theme)
                        .with_cache()
                        .find();
                    if icon.is_none() {
                        freedesktop_icons::lookup(&name)
                            .with_size(element.size)
                            .with_cache()
                            .find()
                    } else {
                        icon
                    }.map(|p| Cow::from(p))
                },
                IconSource::Embedded(_) => unimplemented!(),
            };

            let is_svg = element.force_svg || icon.as_ref().map(|path| path.extension() == Some(&OsStr::new("svg"))).unwrap_or(true);

            if is_svg {
                let handle = if let Some(path) = icon {
                    svg::Handle::from_path(path)
                } else {
                    eprintln!("icon '{:?}' size {} not found", &element.name, element.size);
                        svg::Handle::from_memory(Vec::new())
                };
    
                let mut widget = svg::Svg::<Renderer>::new(handle)
                    .style(element.style)
                    .width(element.width.unwrap_or(Length::Units(element.size)))
                    .height(element.height.unwrap_or(Length::Units(element.size)));
    
                if let Some(content_fit) = element.content_fit {
                    widget = widget.content_fit(content_fit);
                }
    
                widget.into()
            } else {
                let icon_path = icon.unwrap();
                let mut image = Image::new(icon_path)
                    .width(element.width.unwrap_or(Length::Units(element.size)))
                    .height(element.height.unwrap_or(Length::Units(element.size)));
                if let Some(content_fit) = element.content_fit {
                    image = image.content_fit(content_fit);
                }
                image.into()
            }
        }).into()
    }
}

impl<'a, Message: 'static> From<Icon<'a>> for Element<'a, Message> {
    fn from(icon: Icon<'a>) -> Self {
        icon.into_element::<Message>()
    }
}
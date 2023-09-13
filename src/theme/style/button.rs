// Copyright 2023 System76 <info@system76.com>
// SPDX-License-Identifier: MPL-2.0

//! Contains stylesheet implementation for [`crate::widget::button`].

use cosmic_theme::Component;
use iced_core::{Background, Color};
use palette::{rgb::Rgb, Alpha};

use crate::widget::button::{Appearance, StyleSheet};

#[derive(Copy, Clone, Debug, Default)]
pub enum Button {
    Destructive,
    Link,
    Icon,
    IconVertical,
    #[default]
    Standard,
    Suggested,
    Text,
}

pub fn appearance(
    theme: &crate::Theme,
    focused: bool,
    style: &Button,
    color: impl Fn(&Component<Alpha<Rgb, f32>>) -> (Color, Color, Option<Color>),
) -> Appearance {
    let cosmic = theme.cosmic();
    let mut corner_radii = &cosmic.corner_radii.radius_xl;
    let mut appearance = Appearance::new();

    match style {
        Button::Standard | Button::Text | Button::Suggested | Button::Destructive => {
            let style_component = match style {
                Button::Standard => &cosmic.button,
                Button::Text => &cosmic.text_button,
                Button::Suggested => &cosmic.accent_button,
                Button::Destructive => &cosmic.destructive_button,
                _ => return appearance,
            };

            let (background, text, icon) = color(style_component);
            appearance.background = Some(Background::Color(background));
            appearance.text_color = text;
            appearance.icon_color = icon;
        }

        Button::Icon | Button::IconVertical => {
            if let Button::IconVertical = style {
                corner_radii = &cosmic.corner_radii.radius_m;
            }

            let (background, text, icon) = color(&cosmic.icon_button);
            appearance.background = Some(Background::Color(background));
            if focused {
                appearance.text_color = cosmic.accent.on.into();
                appearance.icon_color = Some(cosmic.accent.on.into());
            } else {
                appearance.text_color = text;
                appearance.icon_color = icon;
            }
        }

        Button::Link => {
            appearance.background = None;
            appearance.icon_color = Some(cosmic.accent.base.into());
            appearance.text_color = cosmic.accent.base.into();
            corner_radii = &cosmic.corner_radii.radius_0;
        }
    }

    appearance.border_radius = (*corner_radii).into();

    if focused {
        appearance.outline_width = 1.0;
        appearance.outline_color = cosmic.accent.base.into();
        appearance.border_width = 2.0;
        appearance.border_color = Color::TRANSPARENT;
    }

    appearance
}

impl StyleSheet for crate::Theme {
    type Style = Button;

    fn active(&self, focused: bool, style: &Self::Style) -> Appearance {
        appearance(self, focused, style, |component| {
            (
                component.base.into(),
                component.on.into(),
                Some(component.on.into()),
            )
        })
    }

    fn disabled(&self, style: &Self::Style) -> Appearance {
        appearance(self, false, style, |component| {
            let mut background = Color::from(component.base);
            background.a *= 0.5;
            (
                background,
                component.on_disabled.into(),
                Some(component.on_disabled.into()),
            )
        })
    }

    fn drop_target(&self, style: &Self::Style) -> Appearance {
        self.active(false, style)
    }

    fn hovered(&self, focused: bool, style: &Self::Style) -> Appearance {
        appearance(self, focused, style, |component| {
            (
                component.hover.into(),
                component.on.into(),
                Some(component.on.into()),
            )
        })
    }

    fn pressed(&self, focused: bool, style: &Self::Style) -> Appearance {
        appearance(self, focused, style, |component| {
            (
                component.pressed.into(),
                component.on.into(),
                Some(component.on.into()),
            )
        })
    }
}

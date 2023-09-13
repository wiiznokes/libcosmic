// Copyright 2022 System76 <info@system76.com>
// SPDX-License-Identifier: MPL-2.0

//! Contains the [`Theme`] type and its widget stylesheet implementations.

pub mod style;
pub use style::*;

use cosmic_config::config_subscription;
use cosmic_config::CosmicConfigEntry;
use cosmic_theme::util::CssColor;
use cosmic_theme::Component;
use cosmic_theme::LayeredTheme;
use iced_futures::Subscription;
use palette::Srgba;
use std::cell::RefCell;
use std::sync::Arc;

pub type CosmicColor = ::palette::rgb::Srgba;
pub type CosmicComponent = cosmic_theme::Component<CosmicColor>;
pub type CosmicTheme = cosmic_theme::Theme<CosmicColor>;

lazy_static::lazy_static! {
    pub static ref COSMIC_DARK: CosmicTheme = CosmicTheme::dark_default();
    pub static ref COSMIC_HC_DARK: CosmicTheme = CosmicTheme::high_contrast_dark_default();
    pub static ref COSMIC_LIGHT: CosmicTheme = CosmicTheme::light_default();
    pub static ref COSMIC_HC_LIGHT: CosmicTheme = CosmicTheme::high_contrast_light_default();
    pub static ref TRANSPARENT_COMPONENT: Component<CosmicColor> = Component {
        base: CosmicColor::new(0.0, 0.0, 0.0, 0.0),
        hover: CosmicColor::new(0.0, 0.0, 0.0, 0.0),
        pressed: CosmicColor::new(0.0, 0.0, 0.0, 0.0),
        selected: CosmicColor::new(0.0, 0.0, 0.0, 0.0),
        selected_text: CosmicColor::new(0.0, 0.0, 0.0, 0.0),
        focus: CosmicColor::new(0.0, 0.0, 0.0, 0.0),
        disabled: CosmicColor::new(0.0, 0.0, 0.0, 0.0),
        on: CosmicColor::new(0.0, 0.0, 0.0, 0.0),
        on_disabled: CosmicColor::new(0.0, 0.0, 0.0, 0.0),
        divider: CosmicColor::new(0.0, 0.0, 0.0, 0.0),
        border: CosmicColor::new(0.0, 0.0, 0.0, 0.0),
        disabled_border: CosmicColor::new(0.0, 0.0, 0.0, 0.0),
    };
}

thread_local! {
    pub(crate) static THEME: RefCell<Theme> = RefCell::new(Theme { theme_type: ThemeType::Dark, layer: cosmic_theme::Layer::Background });
}

/// Currently-defined theme.
pub fn active() -> Theme {
    THEME.with(|theme| theme.borrow().clone())
}

/// Currently-defined theme type.
pub fn active_type() -> ThemeType {
    THEME.with(|theme| theme.borrow().theme_type.clone())
}

/// Whether the active theme has a dark preference.
#[must_use]
pub fn is_dark() -> bool {
    active_type().is_dark()
}

/// Whether the active theme is high contrast.
#[must_use]
pub fn is_high_contrast() -> bool {
    active_type().is_high_contrast()
}

/// Watches for changes to the system's theme preference.
pub fn subscription(id: u64) -> Subscription<crate::theme::Theme> {
    config_subscription::<u64, crate::cosmic_theme::Theme<Srgba>>(
        id,
        crate::cosmic_theme::NAME.into(),
        crate::cosmic_theme::Theme::<Srgba>::version(),
    )
    .map(|(_, res)| {
        let theme = res.unwrap_or_else(|(errors, theme)| {
            for err in errors {
                tracing::error!("{:?}", err);
            }
            theme
        });

        Theme::system(Arc::new(theme))
    })
}

/// Loads the preferred system theme from `cosmic-config`.
pub fn system_preference() -> Theme {
    let Ok(helper) = crate::cosmic_config::Config::new(
        crate::cosmic_theme::NAME,
        crate::cosmic_theme::Theme::<CssColor>::version(),
    ) else {
        return Theme::dark();
    };

    let t = crate::cosmic_theme::Theme::get_entry(&helper).unwrap_or_else(|(errors, theme)| {
        for err in errors {
            tracing::error!("{:?}", err);
        }
        theme
    });

    Theme::system(Arc::new(t))
}

#[must_use]
#[derive(Debug, Clone, PartialEq, Default)]
pub enum ThemeType {
    #[default]
    Dark,
    Light,
    HighContrastDark,
    HighContrastLight,
    Custom(Arc<CosmicTheme>),
    System(Arc<CosmicTheme>),
}

impl ThemeType {
    /// Whether the theme has a dark preference.
    #[must_use]
    pub fn is_dark(&self) -> bool {
        match self {
            Self::Dark | Self::HighContrastDark => true,
            Self::Light | Self::HighContrastLight => false,
            Self::Custom(theme) | Self::System(theme) => theme.is_dark,
        }
    }

    /// Whether the theme has a high contrast.
    #[must_use]
    pub fn is_high_contrast(&self) -> bool {
        match self {
            Self::Dark | Self::Light => false,
            Self::HighContrastDark | Self::HighContrastLight => true,
            Self::Custom(theme) | Self::System(theme) => theme.is_high_contrast,
        }
    }
}

#[must_use]
#[derive(Debug, Clone, PartialEq, Default)]
pub struct Theme {
    pub theme_type: ThemeType,
    pub layer: cosmic_theme::Layer,
}

impl Theme {
    #[must_use]
    pub fn cosmic(&self) -> &cosmic_theme::Theme<Srgba> {
        match self.theme_type {
            ThemeType::Dark => &COSMIC_DARK,
            ThemeType::Light => &COSMIC_LIGHT,
            ThemeType::HighContrastDark => &COSMIC_HC_DARK,
            ThemeType::HighContrastLight => &COSMIC_HC_LIGHT,
            ThemeType::Custom(ref t) | ThemeType::System(ref t) => t.as_ref(),
        }
    }

    pub fn dark() -> Self {
        Self {
            theme_type: ThemeType::Dark,
            ..Default::default()
        }
    }

    pub fn light() -> Self {
        Self {
            theme_type: ThemeType::Light,
            ..Default::default()
        }
    }

    pub fn dark_hc() -> Self {
        Self {
            theme_type: ThemeType::HighContrastDark,
            ..Default::default()
        }
    }

    pub fn light_hc() -> Self {
        Self {
            theme_type: ThemeType::HighContrastLight,
            ..Default::default()
        }
    }

    pub fn custom(theme: Arc<CosmicTheme>) -> Self {
        Self {
            theme_type: ThemeType::Custom(theme),
            ..Default::default()
        }
    }

    pub fn system(theme: Arc<CosmicTheme>) -> Self {
        Self {
            theme_type: ThemeType::System(theme),
            ..Default::default()
        }
    }

    /// get current container
    /// can be used in a component that is intended to be a child of a `CosmicContainer`
    #[must_use]
    pub fn current_container(&self) -> &cosmic_theme::Container<Srgba> {
        match self.layer {
            cosmic_theme::Layer::Background => &self.cosmic().background,
            cosmic_theme::Layer::Primary => &self.cosmic().primary,
            cosmic_theme::Layer::Secondary => &self.cosmic().secondary,
        }
    }

    /// set the theme
    pub fn set_theme(&mut self, theme: ThemeType) {
        self.theme_type = theme;
    }
}

impl LayeredTheme for Theme {
    fn set_layer(&mut self, layer: cosmic_theme::Layer) {
        self.layer = layer;
    }
}

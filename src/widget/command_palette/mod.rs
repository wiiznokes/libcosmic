use iced::{Length, Size};
use iced_core::{widget::tree::State, Widget};
use iced_widget::mouse_area;

use crate::{Element, Renderer, Theme};

use super::text;

pub struct Command<Message> {
    name: String,
    on_press: Message,
}

impl<Message> Command<Message> {
    pub fn new(name: impl Into<String>, on_press: Message) -> Self {
        Self {
            name: name.into(),
            on_press,
        }
    }
}

pub struct CommandGroup<Message> {
    name: String,
    commands: Vec<Command<Message>>,
}

impl<Message> CommandGroup<Message> {
    pub fn new(
        name: impl Into<String>,
        commands: impl IntoIterator<Item = Command<Message>>,
    ) -> Self {
        Self {
            name: name.into(),
            commands: commands.into_iter().collect(),
        }
    }
}

pub struct CommandPalette<Message> {
    command_groups: Vec<CommandGroup<Message>>,
}

pub fn command_palette<Message>(
    command_groups: impl IntoIterator<Item = CommandGroup<Message>>,
) -> CommandPalette<Message> {
    CommandPalette {
        command_groups: command_groups.into_iter().collect(),
    }
}

impl<Message> Widget<Message, Theme, Renderer> for CommandPalette<Message> {
    fn size(&self) -> Size<Length> {
        Size::new(Length::Fill, Length::Fill)
    }

    fn layout(
        &self,
        tree: &mut iced_core::widget::Tree,
        renderer: &Renderer,
        limits: &iced_core::layout::Limits,
    ) -> iced_core::layout::Node {
        println!("layout");
        iced_core::layout::Node::default()
    }

    fn draw(
        &self,
        tree: &iced_core::widget::Tree,
        renderer: &mut Renderer,
        theme: &crate::Theme,
        style: &iced_core::renderer::Style,
        layout: iced_core::Layout<'_>,
        cursor: iced_core::mouse::Cursor,
        viewport: &iced::Rectangle,
    ) {
    }

    fn state(&self) -> State {
        State::new(CommandState::new())
    }
}

struct CommandState {}

impl CommandState {
    fn new() -> Self {
        Self {}
    }
}

impl<'a, Message> From<CommandPalette<Message>> for Element<'a, Message> {
    fn from(value: CommandPalette<Message>) -> Self {
        text("hello").into()
    }
}



use crate::Element;



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

pub(crate) struct State {
    search: String,
    selected: (usize, Option<usize>),
    filtered: Vec<usize>,
    expanded: Vec<usize>,
}

impl State {
    
    fn down(&mut self) {

        match self.selected.1 {
            Some(_) => todo!(),
            None => todo!(),
        }
    }
}


pub(crate) fn command_palette_view<'a, Message>(state: &State, palette: CommandPalette<Message>) -> Element<'a, crate::app::Message<Message>> {

    todo!()
}
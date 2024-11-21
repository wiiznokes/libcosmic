use cosmic::{
    app::{Core, Settings, Task},
    executor,
    widget::{text, CommandPalette},
    Element,
};

fn main() -> Result<(), cosmic::iced::Error> {
    let settings = Settings::default();

    cosmic::app::run::<App>(settings, ())
}

struct App {
    core: Core,
}

#[derive(Debug, Clone)]
struct Message {}

impl cosmic::Application for App {
    type Executor = executor::Default;

    type Flags = ();

    type Message = Message;

    const APP_ID: &'static str = "org.cosmic.CommandPalette";

    fn core(&self) -> &Core {
        &self.core
    }

    fn core_mut(&mut self) -> &mut Core {
        &mut self.core
    }

    fn init(core: Core, _flags: Self::Flags) -> (Self, Task<Self::Message>) {
        let app = App { core };
        (app, Task::none())
    }

    fn command_palette(&self) -> Option<CommandPalette> {
        todo!()
    }

    fn view(&self) -> Element<Self::Message> {
        text("hello").into()
    }
}

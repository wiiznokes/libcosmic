use cosmic::{
    app::{Core, Settings, Task},
    executor,
    widget::{
        command_palette::{command_palette, Command, CommandGroup},
        text, CommandPalette,
    },
    ApplicationExt, Element,
};

fn main() -> Result<(), cosmic::iced::Error> {
    let settings = Settings::default();

    cosmic::app::run::<App>(settings, ())
}

struct App {
    core: Core,
}

#[derive(Debug, Clone)]
enum Message {
    ShowPalette,
    HidePalette,
    File1,
    File2,
    File3,
    View1,
    View2,
    View3,
}

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

    fn update(&mut self, message: Self::Message) -> Task<Self::Message> {
        match message {
            Message::ShowPalette => {
                self.set_show_command_palette(true);
            }
            Message::HidePalette => {
                self.set_show_command_palette(false);
            }
            _ => {}
        }

        Task::none()
    }

    fn command_palette(&self) -> Option<CommandPalette<Self::Message>> {
        Some(command_palette([
            CommandGroup::new(
                "File",
                [
                    Command::new("file1", Message::File1),
                    Command::new("file2", Message::File2),
                    Command::new("file3", Message::File3),
                ],
            ),
            CommandGroup::new(
                "View",
                [
                    Command::new("view1", Message::View1),
                    Command::new("view2", Message::View2),
                    Command::new("view3", Message::View3),
                ],
            ),
        ]))
    }

    fn view(&self) -> Element<Self::Message> {
        text("hello").into()
    }

    fn subscription(&self) -> cosmic::iced::Subscription<Self::Message> {
        cosmic::iced_futures::event::listen_with(|event, status, _| match status {
            cosmic::iced::event::Status::Ignored => match event {
                cosmic::iced::Event::Keyboard(event) => match event {
                    cosmic::iced::keyboard::Event::KeyPressed { key, modifiers, .. } => match key {
                        cosmic::iced::keyboard::Key::Character(c) => {
                            if c == "p" && modifiers.control() {
                                Some(Message::ShowPalette)
                            } else {
                                None
                            }
                        }
                        cosmic::iced::keyboard::Key::Named(named) => match named {
                            cosmic::iced::keyboard::key::Named::Escape => {
                                Some(Message::HidePalette)
                            }
                            _ => None,
                        },
                        _ => None,
                    },
                    _ => None,
                },
                _ => None,
            },
            _ => None,
        })
    }
}

# Markdown App

A desktop app to edit and view markdown.

## Building

Firstly, run `pnpm install` to install all required packages.

During development, use `pnpm tauri dev` to start the application. This will start a web server for the frontend, run the Rust backend, and open the actual window. All of them are equipped with hot reloading so there is no need to manually recompile after every change.

To generate a production build, run `pnpm tauri build`. The executable can then be found at `src-tauri/target/release`.

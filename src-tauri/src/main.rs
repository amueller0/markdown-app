// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::env;

#[tauri::command]
fn get_opened_file_path() -> Option<String> {
    let args: Vec<String> = std::env::args().collect();
    
    if args.len() > 1 {
        Some(args[1].clone())
    } else {
        None
    }
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_opened_file_path])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

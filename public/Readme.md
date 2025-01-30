# Pomodoro Timer

## Overview
A simple Pomodoro Timer Progressive Web Application (PWA) built using HTML, CSS, and JavaScript. This app allows you to set custom timer durations and receive alerts when the timer runs out. It also supports installation as a standalone PWA and runs in the background even when minimized.

## Features
- Set predefined timers (2h, 1h, 30min, 15min).
- Set custom timer duration.
- Start/Pause and Reset functionalities.
- Background notifications and sounds on timer completion.
- Installable as a standalone PWA.
- Runs in the background even when minimized.

## Installation

### Prerequisites
- A modern web browser like Google Chrome or Microsoft Edge.

### Steps
1. **Download the project files**:
   - Download all the necessary files including `index.html`, `service-worker.js`, `manifest.json`, icons (`icon-256x256.png`, `icon-512x512.png`), and sound files (`sound1.mp3`, `sound2.mp3`, `sound3.mp3`).

2. **Place files in a directory**:
   - Place all downloaded files in the same directory.

3. **Run a local server**:
   - Use a simple HTTP server to serve the files. For example, if you have Python installed, navigate to the directory and run:
     ```sh
     python -m http.server
     ```
   - Alternatively, you can use any other static file server.

4. **Open the application**:
   - Open the URL provided by the server (e.g., `http://localhost:8000`) in your browser.

5. **Install the PWA**:
   - Click on the "Install App" button to install the app as a standalone PWA on your device.

## Usage
- **Start Timer**: Click one of the predefined buttons (2h, 1h, 30min, 15min) or enter custom values in the input fields and click "Start".
- **Pause/Resume Timer**: When the timer is running, click "Start/Pause" to pause or resume the timer.
- **Reset Timer**: Click "Reset" to reset the timer back to its initial value.

## Development
- To customize or extend the functionality, modify the `index.html`, `service-worker.js`, and other related files as needed.
- Ensure all paths to assets (icons, sounds, etc.) are correct relative to your project structure.

## Dependencies
- Modern browsers supporting Service Workers and Notifications API.
- Basic understanding of HTML, CSS, and JavaScript.

## Contributing
Feel free to fork this repository and submit pull requests with improvements or bug fixes.

## License
This project is licensed under the MIT License
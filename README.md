# minecraft-status-page

[![Build Status](https://img.shields.io/travis/hjelev/minecraft-status-page/master.svg)](https://travis-ci.org/hjelev/minecraft-status-page)
[![License](https://img.shields.io/github/license/hjelev/minecraft-status-page.svg)](LICENSE)
[![Version](https://img.shields.io/github/v/release/hjelev/minecraft-status-page.svg)](https://github.com/hjelev/minecraft-status-page/releases)

Simple Minecraft server status page.
The page is a static html/css/js page that uses mcapi.us API to display the status of a Minecraft server.
Since everything is done on the client side, you can host the page on any webserver.

## Features:

- **Server Status:** Check if your server is online or offline.
- **Player Count:** Display the number of players currently online.
- **Message of the Day (MOTD):** Show your server's MOTD.
- **Server Version:** Display the version of your Minecraft server.
- **Usernames:** List the usernames of players currently online.

## Demo

Check out the [live demo](http://mc.masoko.net).

## Installation

1. Clone the repository: `git clone https://github.com/hjelev/minecraft-status-page.git`
2. Edit the `js/config.js` file, last line of the file contains the configuration options.
3. Edit the 'index.html' file to configure the page for when the server is offline.
3. Host the page on your preferred web server or use GitHub Pages.

**Prerequisites:**
- Web server with support for static files
- Access to the free mcapi.us API

Happy Minecrafting! 🎮
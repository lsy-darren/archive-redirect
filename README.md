# Archive This Page

A minimal Chrome extension that lets you view any webpage on [archive.ph](https://archive.ph) with one click.

## What it does

Click the extension icon on any page and it instantly redirects you to the archived version of that URL on archive.ph — useful for bypassing paywalls, saving pages, or viewing cached versions.

## Installation

1. Go to `chrome://extensions/` in Chrome
2. Enable **Developer mode** (top right)
3. Click **Load unpacked** and select this folder

## Usage

Navigate to any `http://` or `https://` page and click the extension icon. The current tab will redirect to `https://archive.ph/<current-url>`.

## Stack

- JavaScript (Chrome Extensions Manifest V3)
- Chrome `activeTab` permission only — no data collection

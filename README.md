# Password Generator App

A responsive React password generator built as part of the Frontend Mentor challenge. The app lets users generate secure passwords based on their chosen character types, view the password strength, and copy the password to the clipboard.

## Live Demo

- GitHub Pages: https://praistyles.github.io/password-generator-app/

## Features

- Adjustable password length with a range slider
- Toggleable character options:
  - uppercase letters
  - lowercase letters
  - numbers
  - symbols
- Real-time password strength rating
- One-click copy to clipboard
- Responsive layout for mobile and desktop
- Clean, dark-themed UI matching the challenge design

## Tech Stack

- React
- Vite
- JavaScript
- CSS

## Project Structure

```bash
src/
├── App.jsx
├── App.css
├── index.css
├── main.jsx
└── components/
    ├── BottomCont.jsx
    ├── CharacterCont.jsx
    ├── CheckboxCont.jsx
    ├── GenerateBtn.jsx
    ├── PasswordCont.jsx
    ├── StrengthCont.jsx
    ├── BottomCont.css
    ├── CharacterCont.css
    ├── CheckboxCont.css
    ├── GenerateBtn.css
    ├── PasswordCont.css
    └── StrengthCont.css
```

## How it works

The app keeps track of:

- the selected password length,
- which character sets are enabled,
- the generated password,
- the current password strength.

When the user changes settings, the app generates a new password automatically. The password strength is calculated from the selected character types and the password length.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

## Deploy to GitHub Pages

```bash
npm run deploy
```

## Author

Built by Praistyles as a Frontend Mentor challenge project.

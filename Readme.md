# Story Manager UI Component (story-manager-ui)

This is the UI component of the `story-manager` project.  This provides a web-based and Tauri (electron) frontend.

- `0.1.0` 2024-08-14 : Rebrand as `story-manager-ui` ; MIT license added

## Tools

Currently favored package manager is `pnpm` but that is open to reconsideration and usage of other package managers will be allowed and supported when not disruptive.

Typescript is the language of choice.  Prettier and ESLint the formatter and linter respectively.

Rust is in use in the Tauri component.  This only exists because electron is painful, and Tauri makes it less painful.  Replacement with a 'purer' version of electron is possible and the suggestion will be entertained.

## Development

### Setup

Running `pnpm install` should be all that is required to get started.  You will need `pnpm` on your system for this to work.

### Run

To launch the project for web alone:

```console
pnpm dev
```

To launch the project with Tauri:

```console
pnpm tauri dev
```

Running with Tauri also enables the web host, so it is still possible to connect with a browser and do simultaneous testing (or access browser based debug tools).

The console will inform you of the URL if you wish to view the application directly in a browser.

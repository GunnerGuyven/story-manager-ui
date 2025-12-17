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

### Dockerized Build and Run

You may wish to containerize your build environment for reasons that are your own.  Provided is a sample `Dockerfile` to use for inspiration on this point.  To use the included file you'll want to do the following:

```console
docker build -t localbuildenv:1 .
```

To run the container and then be able to run and build the Tauri instance, do the following:

```console
docker run --rm -it -e DISPLAY=$DISPLAY -v /tmp/.X11-unix:/tmp/.X11-unix -v $pwd:/home localbuildenv:1
```

Take care to adapt the above command to your environment.  This assumes that you are running X11, that you are running from the same directory as this file, and that you have permission to make local connections to your X11 server (hint: `xhost local:root` in a terminal first).  You may also wish to drop the `--rm` argument (this makes the container ephemeral).  You may also like to add a port-forward to be able to view the application in a browser (`-p 9191:9191`).

Once you're within the running container, you should be able to run:

```console
pnpm install
pnpm dev
pnpm tauri dev
```

These commands should have the same effect as if run outside.

FROM archlinux:base-20240818.0.255804 AS dev

WORKDIR /home

RUN pacman -Sy pnpm --noconfirm


FROM dev AS tauri-dev

RUN pacman -Sy rust webkit2gtk pkgconf wget --noconfirm


FROM dev AS web

COPY . /home

RUN pnpm install

CMD ["pnpm", "dev", "--host", "0.0.0.0"]


FROM tauri-dev AS tauri

COPY . /home

RUN pnpm install

CMD ["pnpm", "tauri", "dev"]

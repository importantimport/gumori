# 📓 Gumori [WIP]

> Lightweight, Fast, IndieWeb-Compatible Astro Blog Starter.

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/importantimport/gumori)

```bash
npx degit importantimport/gumori my-blog && cd my-blog # create a new project in my-blog
pnpm i # if u don't have pnpm installed, run: npm i -g pnpm
```

## 📝 TODO

- [x] PWA (Old Version)
- [ ] JSON Feed (Broken)
- [ ] More Modern Design (MMD)
- [ ] `bTM=`

## 🧱 Project Structure

U'll see the following folders and files:

```bash
/
├── public/
│   └── favicon.png
├── src/
│   ├── config/
│   │   ├── gumori.ts
│   │   └── types.ts
│   └── posts/
│       └── elements.md # example.com/elements
└── package.json
```

Astro looks for `.md` files in the `src/posts/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory.

## 🖥️ Commands

| Command        | Action                                      |
| :------------- | :------------------------------------------ |
| `pnpm i`       | Installs dependencies                       |
| `pnpm dev`     | Starts local dev server at `localhost:3000` |
| `pnpm build`   | Build ur production site to `./dist/`       |
| `pnpm preview` | Preview ur build locally, before deploying  |

## 📝 License

This work is free, it comes without any warranty. You can redistribute it and/or modify it under the
terms of the Do What The Fuck You Want To Public License, Version 2,
as published by Sam Hocevar. See the [COPYING](COPYING) file for more details.

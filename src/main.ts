import m from "mithril"
import { invoke } from "@tauri-apps/api"

import "./style.css"
import typescriptLogo from "./typescript.svg"
import mithriljsLogo from "./mithriljslogo.svg"
import viteLogo from "/vite.svg"
import { setupCounter } from "./counter"

const App: m.ClosureComponent = () => {
  let handlerResponse = ""
  return {
    view: () => {
      return m(
        "",
        m(
          "a",
          { href: "https://vitejs.dev", target: "_blank" },
          m("img.logo", { src: viteLogo, alt: "Vite logo" })
        ),
        m(
          "a",
          { href: "https://www.typescriptlang.org", target: "_blank" },
          m("img.logo.vanilla", { src: typescriptLogo, alt: "TypeScript logo" })
        ),
        m(
          "a",
          { href: "https://mithril.js.org", target: "_blank" },
          m("img.logo", { src: mithriljsLogo, alt: "Mithril logo" })
        ),
        m("h1", "Vite + Typescript + Mithril"),
        m("p.read-the-docs", "Click on the logos above to learn more"),
        m("", handlerResponse),
        m(
          ".card",
          m(
            "button",
            {
              onclick: () => {
                invoke<string>("greet", { name: "World" }).then(
                  r => (handlerResponse = r)
                )
              },
            },
            "test invoke"
          ),
          m("button#counter", { type: "button" })
        )
      )
    },
  }
}

const mountNode = document.querySelector("#app")
if (mountNode) {
  m.mount(mountNode, App)
}

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!)

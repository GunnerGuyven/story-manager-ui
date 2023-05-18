import m from "mithril"
import { invoke } from "@tauri-apps/api"

import "./style.css"
import typescriptLogo from "./typescript.svg"
import mithriljsLogo from "./mithriljslogo.svg"
import viteLogo from "/vite.svg"
import { setupCounter } from "./counter"
import { Editor, EditorState } from "./editor"

const btnClass = `py-2 px-4 mx-2
border-2 border-solid rounded-md 
transition-colors duration-300 ease-in-out
border-purple-100 bg-purple-100
hover:border-purple-300`
const logoClass = `
  h-20 w-20 p-3
  transition duration-300
  hover:drop-shadow-[0_0_2em_rgba(100,108,255,170)]
`

const appState: { editor: EditorState } = import.meta.hot?.data.appState || {
  editor: { text: "abcdef" },
}

if (import.meta.hot) {
  import.meta.hot.dispose(data => (data.appState = appState))
  import.meta.hot.accept(module => {
    if (module) {
      console.log(module)
      module.AppRender(_mountNode)
    }
  })
}

const App: m.ClosureComponent = () => {
  let handlerResponse = ""
  return {
    view: () => {
      return m(
        "",
        m(Editor, { stateContainer: appState.editor }),
        m(
          "",
          { class: "flex my-4" },
          m(
            "a",
            { href: "https://vitejs.dev", target: "_blank" },
            m("img", { class: logoClass, src: viteLogo, alt: "Vite logo" })
          ),
          m(
            "a",
            { href: "https://www.typescriptlang.org", target: "_blank" },
            m("img.vanilla", {
              class: logoClass,
              src: typescriptLogo,
              alt: "TypeScript logo",
            })
          ),
          m(
            "a",
            { href: "https://mithril.js.org", target: "_blank" },
            m("img.logo", {
              class: logoClass,
              src: mithriljsLogo,
              alt: "Mithril logo",
            })
          )
        ),
        m("h1", "Vite + Typescript + Mithril"),
        m("p.read-the-docs", "Click on the logos above to learn more"),
        m("", handlerResponse),
        m(
          ".card",
          m(
            "button",
            {
              class: btnClass,
              onclick: () => {
                invoke<string>("greet", { name: "World" })
                  .then(r => (handlerResponse = r))
                  .catch(e => (handlerResponse = `Error: ${e}`))
              },
            },
            "test invoke"
          ),
          m("button#counter", { class: btnClass, type: "button" })
        )
      )
    },
  }
}

let _mountNode: Element | null = null
export const AppRender = (mountNode: Element) => {
  _mountNode = mountNode
  m.mount(mountNode, App)
  setupCounter(document.querySelector<HTMLButtonElement>("#counter")!)
}

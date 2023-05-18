import m from "mithril"

const editorClass = ` 

`
export type EditorState = Partial<{ text: string }>
export type EditorAttrs = { stateContainer: EditorState }

export const Editor: m.ClosureComponent<EditorAttrs> = initialProps => {
  const { stateContainer: state } = initialProps.attrs
  return {
    view: () => {
      return m(
        "",
        { class: editorClass },
        m("", state.text),
        m("input", {
          value: state.text,
          oninput: (e: any) => (state.text = e.target.value),
        })
      )
    },
  }
}

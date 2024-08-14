import m from "mithril"
import tinymce from "tinymce"
import "tinymce/themes/silver"
import "tinymce/models/dom"
import "tinymce/icons/default"

import "tinymce/skins/ui/oxide/skin.css"
import contentUiSkinCss from "tinymce/skins/ui/oxide/content.css?inline"
import contentCss from "tinymce/skins/content/default/content.css?inline"

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
        m("textarea", {
          value: state.text,
          placeholder: "Type here...",
          oninput: (e: any) => (state.text = e.target.value),
        })
      )
    },
    oncreate: vnode => {
      tinymce.init({
        target: vnode.dom.lastElementChild as HTMLElement,
        skin: false,
        content_css: false,
        content_style: contentUiSkinCss + "\n" + contentCss,
        branding: false,
        menubar: false,
      })
    },
  }
}

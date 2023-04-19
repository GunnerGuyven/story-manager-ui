import m from "mithril"

export const Editor: m.ClosureComponent = () => {
  return {
    view: () => {
      return m("pre.", m.trust("test"))
    },
  }
}
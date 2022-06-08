/* eslint-env browser */

class {{component.pascalCase()}} extends HTML{{#extends_builtin}}Div{{/extends_builtin}}Element {
  static get observedAttributes() {
    return []
  }

  constructor() {
    super()
  }

  connectedCallback() {}

  disconnectedCallback() {}

  attributeChangedCallback(name, oldValue, newValue) {}
}

customElements.define('{{component.paramCase()}}', {{component.pascalCase()}}{{#extends_builtin}}, { extends: 'div'}{{/extends_builtin}})

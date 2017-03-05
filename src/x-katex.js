let katex = require('katex');
let PrototypeElement = Object.create(HTMLElement.prototype);
let ownerDocument = window.document.currentScript.ownerDocument;

PrototypeElement.createdCallback = function createdCallback() {
  let shadowRoot = this.createShadowRoot();
  let template = ownerDocument.querySelector('#x-katex-template');
  let clone = document.importNode(template.content, true);
  try {
    katex.render(this.textContent, clone.querySelector('#container'), {
      displayMode: true,
      macros: {
        "\\RR": "\\mathbb{R}"
      }
    });
  }
  catch (e) {
    console.error(e);
  }
  shadowRoot.appendChild(clone);
};

// PrototypeElement.attachedCallback = function attachedCallback(){
//   console.log(this);
//   console.log("attachedCallback");
// };
//
// PrototypeElement.detachedCallback = function detachedCallback(){
//   console.log("detachedCallback");
// };
//
// PrototypeElement.attributeChangedCallback = function attributeChangedCallback(attr){
//   console.log("attributeChangedCallback", attr);
// };

document.registerElement('x-katex', {
  prototype: PrototypeElement
});

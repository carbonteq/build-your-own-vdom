import VElement from "../VDOM/IVElement";

function renderElement(VNode: VElement) {
  const realElement = document.createElement(VNode.tag);

  for (let key in VNode.attributes) {
    realElement.setAttribute(key, VNode.attributes[key]);
  }

  console.log(VNode.children);

  for (const child of VNode.children) {
    const realChild = render(child);
    realElement.appendChild(realChild);
  }

  return realElement;
}

export default function render(VNode: VElement) {
  if (VNode.tag === "text") {
    return document.createTextNode(VNode.attributes);
  }

  return renderElement(VNode);
}

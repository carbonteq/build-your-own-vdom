import VElement from "../VDOM/IVElement";
import { HTMLTAG } from "../VDOM/types";

export default function createElement(tag: HTMLTAG, attributes: any, children: VElement[] = []) {
  return {
    tag,
    attributes,
    children,
  } as VElement;
}

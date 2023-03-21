import { HTMLTAG } from "./types";

export default interface VElement {
  tag: HTMLTAG;
  attributes?: any;
  children: VElement[];
}

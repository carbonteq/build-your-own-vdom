import { Button } from "../Components/Button";
import { Heading } from "../Components/Heading";
import { Input } from "../Components/Input";
import { UnorderedList } from "../Components/UnorderedList";

import createElement from "../CreateElement/CreateElement";
import VElement from "../VDOM/IVElement";

export const TestPageContainer = (
  hText: string,
  onClickHeadingChange: any,
  onClickCounterInc: any,
  onClickCounterDec: any,
  onClickAddItem: any,
  onDelete: any,
  items: any[] = [],
  count: number = 1
) => {
  const myPage: VElement = {
    tag: "div",
    attributes: {
      id: "app",
    },
    children: [
      { ...Heading(hText) },
      {
        ...Button("Click to Update Header", () => {
          onClickHeadingChange();
        }),
      },
      { ...Input("Enter Text", "changeHeading") },
      { ...Heading(`${count}`, "h3") },
      { ...Button("+", onClickCounterInc) },
      { ...Button("-", onClickCounterDec) },
      {
        tag: "div",
        attributes: {},
        children: [{ ...Input("Enter Text", "itemListContent") }, { ...Button("Add Item", onClickAddItem) }],
      },
      { ...UnorderedList(onDelete, items) },
    ],
  };

  return myPage;
};

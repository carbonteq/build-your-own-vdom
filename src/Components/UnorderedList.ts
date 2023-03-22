import createElement from "../CreateElement/CreateElement";
import { Button } from "./Button";

export const UnorderedList = (onDelete: any, listItems: any[] = []) => {
  return createElement("div", {}, [
    ...listItems.map((item) =>
      createElement("div", { key: item.key }, [createElement("text", item.text), { ...Button("delete", onDelete) }])
    ),
  ]);
};

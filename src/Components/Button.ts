import createElement from "../CreateElement/CreateElement";

export const Button = (bText: string, onClick: any) => {
  return createElement("button", { onclick: onClick }, [
    {
      tag: "text",
      attributes: bText,
      children: [],
    },
  ]);
};

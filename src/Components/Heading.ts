import createElement from "../CreateElement/CreateElement";

export const Heading = (hText: string, headingType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" = "h1") => {
  return createElement(headingType, {}, [
    {
      tag: "text",
      attributes: hText,
      children: [],
    },
  ]);
};

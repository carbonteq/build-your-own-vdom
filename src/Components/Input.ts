import createElement from "../CreateElement/CreateElement";

export const Input = (placeHolder: string, id: string) => {
  return createElement("input", { id, placeholder: placeHolder });
};

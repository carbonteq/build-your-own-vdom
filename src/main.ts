import render from "./Render/Render";
import mount from "./Mount/mount";
import diff from "./Diff/Diff";
import { TestPageContainer } from "./Container/TestPage";

var hText = "Placeholder";
var count = 1;
var items: any[] = [];

const onClickHeadingChange = () => {
  const element = document.getElementById("changeHeading") as HTMLInputElement;
  hText = element.value;
};

const onClickPlus = () => {
  count++;
};
const onClickMinus = () => {
  count--;
};

const onClickAddItem = () => {
  const element = document.getElementById("itemListContent") as HTMLInputElement;
  items.push({ text: element.value, key: Math.random() * 10 });
};
const onDelete = (event: any) => {
  const parentKey = event.target.parentElement.getAttribute("key");
  items = items.filter((item: any) => item.key !== Number(parentKey));
};

let vApp = TestPageContainer(hText, onClickHeadingChange, onClickPlus, onClickMinus, onClickAddItem, onDelete);
const realApp = render(vApp);
let rootEl = mount(realApp, document.getElementById("app"));

setInterval(() => {
  const vNewApp = TestPageContainer(
    hText,
    onClickHeadingChange,
    onClickPlus,
    onClickMinus,
    onClickAddItem,
    onDelete,
    items,
    count
  );
  const patch = diff(vApp, vNewApp);
  rootEl = patch(rootEl);
  vApp = vNewApp;
}, 18);

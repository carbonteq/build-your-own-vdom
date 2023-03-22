import render from "../Render/Render";

const zip = (xs: any, ys: any) => {
  const zipped = [];
  for (let i = 0; i < Math.max(xs.length, ys.length); i++) {
    zipped.push([xs[i], ys[i]]);
  }
  return zipped;
};

const diffAttrs = (oldAttrs: any, newAttrs: any) => {
  const patches: any[] = [];

  // set new attributes
  for (const key in newAttrs) {
    patches.push((realNode: any) => {
      realNode.setAttribute(key, newAttrs[key]);
      return realNode;
    });
  }

  // remove old attributes
  for (const key in oldAttrs) {
    if (!(key in newAttrs)) {
      patches.push((realNode: any) => {
        realNode.removeAttribute(key);
        return realNode;
      });
    }
  }

  return (realNode: any) => {
    for (const patch of patches) {
      patch(realNode);
    }
  };
};

const diffChildren = (oldVChildren: any, newVChildren: any) => {
  const childPatches: any[] = [];
  oldVChildren.forEach((oldVChild: any, i: number) => {
    childPatches.push(diff(oldVChild, newVChildren[i]));
  });

  const additionalPatches: any = [];
  for (const additionalVChild of newVChildren.slice(oldVChildren.length)) {
    additionalPatches.push((realNode: any) => {
      realNode.appendChild(render(additionalVChild));
      return realNode;
    });
  }

  return (realParent: any) => {
    for (const [patch, child] of zip(childPatches, realParent.childNodes)) {
      patch(child);
    }

    for (const patch of additionalPatches) {
      patch(realParent);
    }

    return realParent;
  };
};

const diff = (vOldNode: any, vNewNode: any) => {
  if (vNewNode === undefined) {
    return (realNode: any) => {
      realNode.remove();
      return undefined;
    };
  }

  if (typeof vOldNode.attributes === "string" || typeof vNewNode.attributes === "string") {
    if (vOldNode.attributes !== vNewNode.attributes) {
      return (realNode: any) => {
        const realNewNode = render(vNewNode);
        realNode.replaceWith(realNewNode);
        return realNewNode;
      };
    } else {
      return (realNode: any) => undefined;
    }
  }

  if (vOldNode.tagName !== vNewNode.tagName) {
    return (realNode: any) => {
      const realNewNode = render(vNewNode);
      realNode.replaceWith(realNewNode);
      return realNewNode;
    };
  }

  const patchAttrs = diffAttrs(vOldNode.attributes, vNewNode.attributes);
  const patchChildren = diffChildren(vOldNode.children, vNewNode.children);

  return (realNode: any) => {
    patchAttrs(realNode);
    patchChildren(realNode);
    return realNode;
  };
};

export default diff;

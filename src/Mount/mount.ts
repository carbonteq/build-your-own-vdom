export default (realNode: any, realTarget: any) => {
  realTarget.replaceWith(realNode);
  return realNode;
};

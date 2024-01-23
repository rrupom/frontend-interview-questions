/**
 * Problem Description
 - You’ll be given 2 identical node structures, rootA and rootB. You have to traverse rootA and find the path for nodeA. Now using the same path you traversed you need to find the value that is present in for the identical position in rootB.
 */

/**
 * Solution Approcach
 * - First find the path from child node to root node.
 * - then reverse travel from the second root node to the child node
 */

const findNodeValue = () => {
  const rootA = document.getElementById("rootA");
  const nodeA = document.getElementById("nodeA");

  const pathToNode = getPathToNode(rootA, nodeA);

  const rootB = document.getElementById("rootB");
  const value = findValue(rootB, pathToNode);

  console.log(value);
};

const findValue = (root, path) => {
  let element;
  while (path.length > 0) {
    element = root.childNodes[path.pop()];
    root = element;
  }

  return element.textContent;
};

const getPathToNode = (parent, child) => {
  let path = [];

  while (child != parent) {
    const parentNode = child.parentNode;
    for (let i = 0; i < parentNode.childNodes.length; i++) {
      if (parentNode.childNodes[i] == child) {
        path.push(i);
        break;
      }
    }

    child = parentNode;
  }

  return path;
};

findNodeValue();

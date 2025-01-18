// // you can write to stdout for debugging purposes, e.g.
// // console.log('this is a debug message');

function solution(T) {
  if (!T) return 0; // If the tree is empty, return 0

  // Helper function to traverse the tree
  function dfs(node, isLeftTurn, currentLength) {
    if (!node) return currentLength;

    let maxLength = currentLength;

    // If we go left, it's a turn only if the last move was not left
    if (node.l) {
      let newLength = isLeftTurn ? 0 : currentLength + 1;
      maxLength = Math.max(maxLength, dfs(node.l, true, newLength));
    }

    // If we go right, it's a turn only if the last move was not right
    if (node.r) {
      let newLength = isLeftTurn ? currentLength + 1 : 0;
      maxLength = Math.max(maxLength, dfs(node.r, false, newLength));
    }

    return maxLength;
  }

  // Start with an initial zigzag length of 0, assuming no turn at the root
  return dfs(T, false, 0); // false because we haven't made a turn yet at the root
}

// Example usage:
let tree = {
  x: 5,
  l: {
    x: 3,
    l: {
      x: 20,
      l: { x: 6, l: null, r: null },
      r: null,
    },
    r: null,
  },
  r: {
    x: 10,
    l: { x: 1, l: null, r: null },
    r: {
      x: 15,
      l: {
        x: 30,
        l: null,
        r: { x: 9, l: null, r: null },
      },
      r: { x: 8, l: null, r: null },
    },
  },
};

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

//@ts-ignore
function isSymmetric(root: TreeNode | null): boolean {
  if (root === null) return false;
  return dfs(root.left, root.right);
};

function dfs(nodeLeft, nodeRight) {
  if (nodeLeft === null && nodeRight === null) return true;
  if (nodeLeft === null || nodeRight === null) return false;
  if (nodeLeft.val !== nodeRight.val) return false;
  return dfs(nodeLeft.left, nodeRight.right) && dfs(nodeLeft.right, nodeRight.left);
}
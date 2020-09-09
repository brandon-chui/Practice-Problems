// find depth of binary tree

const maxDepth = (root) => {
    if (!root) return 0;

    let res = 0;

    const dfs = (node, depth) => {
        if (node.left) {
            dfs(node.left, depth + 1)
        }

        if (node.right) {
            dfs(node.right, depth + 1)
        }

        res = Math.max(res, depth)
    }

    dfs(root, 1)
    return res

}
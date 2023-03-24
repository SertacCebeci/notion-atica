export default function getBlockInfoFromPos(doc, posInBlock) {
  if (posInBlock <= 0 || posInBlock > doc.nodeSize) {
    return undefined;
  }

  const $pos = doc.resolve(posInBlock);

  const maxDepth = $pos.depth;
  let node = $pos.node(maxDepth);
  let depth = maxDepth;

  while (depth >= 0) {
    // If the outermost node is not a block, it means the position does not lie within a block.
    if (depth === 0) {
      return undefined;
    }
    if (node.type.name === "blockContainer") {
      break;
    }

    depth -= 1;
    node = $pos.node(depth);
  }

  const id = node.attrs["id"];
  const contentNode = node.firstChild ? node.firstChild : false;
  const lastChild = node.lastChild ? node.lastChild : false;
  const contentType = contentNode.type;
  const numChildBlocks = node.childCount === 2 ? lastChild?.childCount : 0;

  const startPos = $pos.start(depth);
  const endPos = $pos.end(depth);

  return {
    id,
    node,
    contentNode,
    contentType,
    numChildBlocks,
    startPos,
    endPos,
    depth,
  };
}

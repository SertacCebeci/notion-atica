import getAllBlocks from "./getAllBlocks";

export default function getBlockByID(doc, ID) {
  const blocks = getAllBlocks(doc).find(({ attrs }) => {
    return attrs.block_id === ID;
  });
  return blocks[0];
}

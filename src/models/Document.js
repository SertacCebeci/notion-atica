import uuid from "uuid";
import Block from "./Block";

//singleton
class Document {
  static instance = null;

  static getInstance(example) {
    if (!Document.instance) {
      const title = example?.title || "Untitled Document";
      const blocks = example?.blocks || [];
      const id = example?.id || uuid.v4();
      const blockHash = example?.blockHash || {};

      Document.instance = new Document(id, title, blocks, blockHash);
    }
    return Document.instance;
  }

  constructor(id, title, blocks, blockHash) {
    this.id = id;
    this.title = title;
    this.blocks = blocks;
    this.blockHash = blockHash;
  }

  // Import Data string | Object and initialize the blocks
  import(data) {
    this.id = data.id;
    this.title = data.title;
    this.blocks = data.blocks.map((blockId) => blockId);
    this.blockHash = data.blockHash;
  }

  // Create a new block
  createBlock(type, content) {
    const block = new Block("222", type, content);
    console.log(block);
    this.blocks.push(block.id);
    this.blockHash[block.id] = block;
    return block;
  }

  // Delete a block by index
  deleteBlock(id) {
    const index = this.blocks.indexOf(id);
    if (index >= 0) {
      this.blocks.splice(index, 1);
      delete this.blockHash[id];
    }
  }

  // Reorder blocks by moving a block from one index to another
  reorderBlocks(fromIndex, toIndex) {
    if (
      fromIndex >= 0 &&
      fromIndex < this.blocks.length &&
      toIndex >= 0 &&
      toIndex < this.blocks.length
    ) {
      const block = this.blocks.splice(fromIndex, 1)[0];
      this.blocks.splice(toIndex, 0, block);
    }
  }
}

export default Document;

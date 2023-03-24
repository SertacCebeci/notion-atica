import { Extensions, getSchema } from "@tiptap/core";
import { DOMParser } from "@tiptap/pm/model";
import { parseHTML } from "zeed-dom";

export function generateJSON(html, extensions) {
  const schema = getSchema(extensions);
  const dom = parseHTML(html);

  return DOMParser.fromSchema(schema).parse(dom).toJSON();
}

import { DOMSerializer } from "@tiptap/pm/model";
import { createHTMLDocument } from "zeed-dom";

export function getHTMLFromFragment(doc, schema) {
  const document = DOMSerializer.fromSchema(schema).serializeFragment(
    doc.content,
    {
      document: createHTMLDocument(),
    }
  );

  return document.render();
}

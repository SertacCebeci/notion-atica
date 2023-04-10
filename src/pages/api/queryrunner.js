import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  if (!req.body?.query) {
    return res.status(405).json({ message: "Must contain query" });
  }

  const contactQueryText = req.body?.query;
  console.log(contactQueryText);
  const sqls = contactQueryText
    .toString()
    .split("\n")
    .filter((line) => line.indexOf("--") !== 0)
    .join("\n")
    .replace(/(\r\n|\n|\r)/gm, " ") // remove newlines
    .replace(/\s+/g, " ") // excess white space
    .split(";");

  let result = null;
  for (const sql of sqls) {
    //here I salute you; destroyer of the worlds, the unmatched threat, SQL INJECTION
    result = await prisma.$queryRawUnsafe(`${sql}`);
  }

  res.status(200).json(result);
}

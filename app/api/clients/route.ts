import fs from "fs";
import { NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export async function POST(req: Request, res: NextApiResponse) {
  const filePath = path.join(process.cwd(), "data.json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  try {
    const existingData = fs.existsSync(filePath)
      ? JSON.parse(fs.readFileSync(filePath, "utf-8"))
      : { sales: [], clients: [] };

    const newClientObject = await req.json();
    existingData.clients.push(newClientObject);

    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
    return res.status(200).send("Sale added");
  } catch (error) {
    res.status(200).send("Sale added");
  }
}

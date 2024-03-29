"use server";
import fs from "fs";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import path from "path";

export async function POST(req: Request, res: NextApiResponse) {
  const filePath = path.join(process.cwd(), "data.json");

  try {
    const existingData = fs.existsSync(filePath)
      ? JSON.parse(fs.readFileSync(filePath, "utf-8"))
      : { sales: [], clients: [] };

    const newClientObject = await req.json();
    existingData.clients.push(newClientObject);

    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
    return NextResponse.json({
      newClientObject,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error." });
  }
}

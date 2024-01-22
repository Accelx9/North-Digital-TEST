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

    const newSalesObject = await req.json();
    existingData.sales.push(newSalesObject);

    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
    return res.status(200).send("Sale added");
  } catch (error) {
    res.status(200).send("Sale added");
  }
}

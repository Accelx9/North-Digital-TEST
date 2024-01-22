"use server";
import fs from "fs";
import { NextResponse } from "next/server";
import path from "path";

export async function POST(req: Request, res: NextResponse) {
  const filePath = path.join(process.cwd(), "data.json");

  try {
    const existingData = fs.existsSync(filePath)
      ? JSON.parse(fs.readFileSync(filePath, "utf-8"))
      : { sales: [], clients: [] };

    const newSalesObject = await req.json();
    existingData.sales.push(newSalesObject);

    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
    return new NextResponse("Sale added successfully!", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
      status: 200,
    });
  } catch (error) {
    new NextResponse("Error", {
      status: 500,
    });
  }
}

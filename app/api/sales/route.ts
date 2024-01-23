"use server";
import fs from "fs";
import { NextApiResponse } from "next";
import { NextResponse } from "next/server";
import path from "path";

export async function POST(req: Request, res: NextApiResponse) {
  const filePath = path.join(process.cwd(), "data.json");

  try {
    // Read existing data
    const existingData = fs.existsSync(filePath)
      ? JSON.parse(fs.readFileSync(filePath, "utf-8"))
      : { sales: [], clients: [] };

    // New object to insert into the "sales" array

    const newSalesObject = await req.json();
    // Push the new object into the "sales" array
    existingData.sales.push(newSalesObject);

    // Write the updated data back to the file
    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
    return NextResponse.json({
      newSalesObject,
    });
    // res.status(200).json({
    //   success: true,
    //   message: 'New object inserted into the "sales" array.',
    // });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal server error." });
  }
}

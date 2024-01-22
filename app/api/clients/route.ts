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
    console.log(newClientObject);
    existingData.clients.push(newClientObject);

    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
    return NextResponse.json({
      newClientObject,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ success: false, message: "Internal server error." });
  }
}

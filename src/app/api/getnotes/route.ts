import { NextResponse } from "next/server";
import dbConnect from "../../../../middleware/mongoose";
import Note from "../../../../models/Note";

export async function GET() {
    await dbConnect()
    try {
        const notes = await Note.find()
        return NextResponse.json({success: true, notes})
    } catch (error) {
        return NextResponse.json({success: false, message : "inside catch"})
    }
}
import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../../middleware/mongoose";
import Note from "../../../../models/Note";


export async function PUT(req: NextRequest) {
    await dbConnect()
    try {
        const result = await req.json()
        const note = await Note.findByIdAndUpdate(result._id, result, {new: true})
        return NextResponse.json({success: true, message: "Note updated", note})
    } catch (error) {
        return NextResponse.json({success: false, message: "inside catch"})
    }
}
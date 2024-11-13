import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../../middleware/mongoose";
import Note from "../../../../models/Note";


export async function DELETE(req: NextRequest) {
    await dbConnect
    try {
        const {_id} = await req.json()
        const note = await Note.findByIdAndDelete(_id)
        return NextResponse.json({success: true, message: "Note deleted"})
    } catch (error) {
        return NextResponse.json({success: false, message: "inside catch"})
    }
}
import { NextRequest, NextResponse } from "next/server";
import Note from "../../../../models/Note";
import dbConnect from "../../../../middleware/mongoose";

export async function POST(req: NextRequest) {
    await dbConnect()
    try {
        const { title } = await req.json()
        const newUser = new Note({
           title : title
        })
        await newUser.save()

        return NextResponse.json({ success: true, message: "Note added" })
    } catch (error) {
        return NextResponse.json({ success: false, message: "inside catch" })
    }
}
 
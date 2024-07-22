
import { slideModel } from '@/app/models/SlideModel';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        const uri: any = process.env.URI_MONGO;
        await mongoose.connect(uri, { dbName: "umedts" });
        const _get = await slideModel.find({}).sort({ _id: -1 });
        const response = NextResponse.json({ status: 1, _count: _get.length, msg: _get });

        return response;
    } catch (err: any) {
        console.log(err)
        return NextResponse.json({ status: 0, msg: "Something went wrong !" })
    }
}



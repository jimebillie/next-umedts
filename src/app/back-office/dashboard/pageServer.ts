"use server"
import { slideModel } from "@/app/models/SlideModel";
import fs from "fs"
import mongoose from "mongoose";
import path from 'path';
import uniqid from 'uniqid';


export async function saveSlide(formData: FormData) {
    try {
        const file = formData.get('_file') as File;

        if (!file) {
            throw new Error('No file found');
        }
        const _newName = "slide-" + uniqid() + uniqid() + "." + file.type.split("/")[1]
        const uploadDir = path.join(process.cwd(), 'public', 'uploads');
        const filePath = path.join(uploadDir, _newName);

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        const uri: any = process.env.URI_MONGO
        try {
            await mongoose.connect(uri, { dbName: "umedts" });
            await new slideModel({ name: _newName }).save()
            fs.writeFileSync(filePath, buffer);
            return { status: 1, msg: "Success" }
        } catch (error: any) {
            console.error('connecting to MongoDB:', error);
            return { status: 0, msg: "Something went wrong #C2!" }
        } finally {
            await mongoose.connection.close()
        }
    } catch (err: any) {
        console.log(err)
        return { status: 0, msg: "Something went wrong #C1!" }
    }
}

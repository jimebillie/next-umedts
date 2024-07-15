"use server"
import { userModel } from "@/app/models/usersModel";
import mongoose from "mongoose"
export async function authen(formData: any) {
    const uri: any = process.env.URI_MONGO
    try {
        await mongoose.connect(uri, { dbName: "umedts" });
        console.log('authen->Connected to MongoDB');
    } catch (error) {
        console.error('authen->Error connecting to MongoDB:', error);
        return { status: "failed", msg: "authen->Error connecting to MongoDB" }
    }

    try {
        const users = await userModel.find({ user: formData.get("username"), pass: formData.get("password") });
        if (users.length === 0) {
            throw new Error("username or password invalid, please try agin");
        } else {

            return { status: "ok", msg: "Success", _token: "" }
        }

    } catch (error: any) {
        console.error('authen->Error fetching users:', error);
        return { status: "failed", msg: "" + error };
    }
    
}

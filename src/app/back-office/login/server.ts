"use server"
import { signToken } from "@/app/Helpers/jwt";
import { userModel } from "@/app/models/UsersModel"
import mongoose from "mongoose"
import { cookies } from "next/headers";
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
            return { status: "failed", msg: "Username or Password invalid, please try agin" };
        } else {
            let data4jwt = {
                id: users[0]._id,
                user: users[0].user
            }
            const _jwt: any = await signToken(data4jwt);
            if (_jwt?.status === "ok") {
                let _dateExp = new Date()
                _dateExp.setDate(_dateExp.getDate() +1)
                
                cookies().set("_auth", _jwt.msg, {
                    expires:_dateExp,
                    httpOnly:true,
                    secure:true,
                    sameSite:"strict",
                })
                return { status: "ok", msg: "Success" }
            } else {
                return { status: "failed", msg: "Something went wrong #C2!" }
            }
        }

    } catch (error: any) {
        console.error('authen->Error fetching users:', error);
        return { status: "failed", msg: "Something went wrong #C1!" }

    }

}

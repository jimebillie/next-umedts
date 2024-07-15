import mongoose, { Model, Schema } from "mongoose";
interface IUserSchema {
    user?: string,
    pass?: string
}
const userSchema = new Schema<IUserSchema>({
    user: String,
    pass: String
})

export const userModel: Model<IUserSchema> = mongoose.models.userModel || mongoose.model<IUserSchema>("userModel", userSchema, "users")
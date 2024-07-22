
import mongoose, { Model, Schema } from "mongoose";
interface ISlideSchema {
    name?: string,
}
const slideSchema = new Schema<ISlideSchema>(
    {
        name: String
    },
    {
        timestamps: true
    })

export const slideModel: Model<ISlideSchema> = mongoose.models.slideModel || mongoose.model<ISlideSchema>("slideModel", slideSchema, "slide")
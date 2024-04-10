import  mongoose  from "mongoose";

const categorySchema = mongoose.Schema(
    {
        id:{
            type: Number,
            required: true,
        },
        title:{
            type: String,
            required: true,
        },
        description:{
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Category = mongoose.model('Cat', categorySchema);
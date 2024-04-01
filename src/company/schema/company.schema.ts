import { Schema,Document } from "mongoose";

export const CompanySchema = new Schema({
    name:String,
    employee:String,

});

export interface company extends Document{
    name:String,
    employee:String,
} 
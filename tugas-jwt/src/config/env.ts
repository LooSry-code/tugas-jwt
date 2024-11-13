import dotenv from 'dotenv';
dotenv.config();

export const MONGODB_URI: string = process.env.MONGODB_URI || "";
export const PORT: number = parseInt(process.env.PORT || "3000");
export const SECRET: string = process.env.SECRET || "secret";
import prisma from "../prisma/client";

export const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log("Database connected successfully via Prisma!");
  } catch (err) {
    console.error("Prisma connection error:", err);
    process.exit(1);
  }
};

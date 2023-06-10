import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined;
    }

const client = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = client;

export default client;

// best practice for next 13 version to use prisma client
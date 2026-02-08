import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL || "postgresql://postgres:password@localhost:5432/wedep_db";

const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);

export const prismaClient = new PrismaClient({ adapter });
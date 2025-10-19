import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient()
}
declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const connectionDB = globalThis.prismaGlobal ?? prismaClientSingleton()
export default connectionDB
if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = connectionDB
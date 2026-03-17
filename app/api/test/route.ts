import { NextResponse } from "next/server";
import { prisma } from "../../../components/lib/prisma";

export async function GET() {
  const users = await prisma.event.findMany();
  return NextResponse.json(users);
}
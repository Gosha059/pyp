import { NextResponse } from "next/server";
import { prisma } from "../../../components/lib/prisma";

export async function POST() {

  const user = await prisma.user.create({
    data: {
      email: "test@test.com",
      name: "Igor"
    }
  })

  return NextResponse.json(user)

}
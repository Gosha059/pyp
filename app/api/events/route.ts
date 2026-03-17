import { prisma } from "../../../components/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {

  const body = await req.json();

  const event = await prisma.event.create({
    data: {
      title: body.title,
      description: body.description,
      date: new Date(body.date),
      organizerId: body.organizerId
    }
  });

  return NextResponse.json(event);
}

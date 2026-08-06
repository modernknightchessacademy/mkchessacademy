import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const folders = await prisma.puzzleFolder.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        _count: {
          select: { puzzles: true },
        },
      },
    });
    return NextResponse.json(folders);
  } catch (error: any) {
    console.error("GET /api/puzzles/folders error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name } = body;

    if (!name) {
      return NextResponse.json({ error: "Folder name is required" }, { status: 400 });
    }

    const folder = await prisma.puzzleFolder.create({
      data: { name },
    });

    return NextResponse.json(folder, { status: 201 });
  } catch (error: any) {
    console.error("POST /api/puzzles/folders error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Folder ID is required" }, { status: 400 });
    }

    await prisma.puzzleFolder.delete({
      where: { id },
    });

    return NextResponse.json({ success: true, id });
  } catch (error: any) {
    console.error("DELETE /api/puzzles/folders error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

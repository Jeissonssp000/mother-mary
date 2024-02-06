import { NextRequest, NextResponse } from 'next/server';

let singers = [
  { id: 1, name: 'Cantante 1', age: 30, genre: 'Jazz' },
  { id: 2, name: 'Cantante 2', age: 20, genre: 'Blues' },
  { id: 3, name: 'Cantante 3', age: 25, genre: 'Pop' },
  { id: 4, name: 'Cantante 4', age: 32, genre: 'Rock' },
];

export async function GET(req: NextRequest) {
  const url = new URL(req.url)
  const id = url.searchParams.get("id")

  if (id) {
    const singer = singers.find((s) => s.id == parseInt(id));
    if (singer) {
      return NextResponse.json([singer]);
    } else {
      return NextResponse.json([]);
    }
  } else {
    return NextResponse.json(singers);
  }
}

export async function POST(req: Request) {
  const { name, age, genre } = await req.json();
  const newSinger = {
    id: singers[singers.length - 1].id + 1,
    name,
    age,
    genre,
  };
  singers.push(newSinger);
  return NextResponse.json(newSinger, { status: 201 });
}

export async function PUT(req: Request) {
  const { id, ...rest } = await req.json();
  let singerIndex = singers.findIndex((s) => s.id === parseInt(id));
  if (singerIndex > -1) {
    singers[singerIndex] = { ...singers[singerIndex], ...rest };
    return NextResponse.json(singers[singerIndex]);
  } else {
    return NextResponse.json({ message: 'Cantante no encontrado' }, { status: 404 });
  }
}

export async function DELETE(req: NextRequest) {
  const url = new URL(req.url)
  const id = url.searchParams.get("id")
  if (id) {
    const deleteId = parseInt(id);
    const initialLength = singers.length;
    singers = singers.filter((s) => s.id !== deleteId);
    if (singers.length < initialLength) {
      return NextResponse.json({ message: 'Cantante eliminado' });
    } else {
      return NextResponse.json({ message: 'Cantante no encontrado' }, { status: 404 });
    }
  } else {
    return NextResponse.json({ message: 'Cantante no encontrado' }, { status: 404 });
  }
}

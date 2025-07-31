// app/api/games/route.js

import { NextResponse } from "next/server";
import { getGames } from "@/app/lib/gameBombApi";

export async function GET(request) {

  // get the search params
  const { searchParams } = new URL(request.url)

  // limit
  const limit = Number(searchParams.get('limit')) || 10
  // name
  const name = searchParams.get('name') || ''

  console.log('GET', limit, name)

  const games = await getGames({ limit, name });
  return NextResponse.json(games)
}
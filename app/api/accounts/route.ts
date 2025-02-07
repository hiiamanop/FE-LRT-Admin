// app/api/accounts/route.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const pageId = searchParams.get("page_id");
  const pageSize = searchParams.get("page_size");

  try {
    const response = await fetch(
      `http://localhost:8080/api/v1/accounts?page_id=${pageId}&page_size=${pageSize}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch accounts" },
      { status: 500 }
    );
  }
}

import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const GET = async () => {
  const { userId } = await auth();
  console.log("user id", userId);
  return NextResponse.json({ message: "hello" });
};

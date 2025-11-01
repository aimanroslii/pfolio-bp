"use server"

import prisma from "./lib/db";

export async function logAction(buttonName: string) {
  try {
    await prisma.log.create({
      data: {
        buttonClicked: buttonName,
      },
    });
  } catch (err) {
    console.error("Failed to log action:", err);
  }
}
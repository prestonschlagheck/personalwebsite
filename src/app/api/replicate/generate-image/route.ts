import { NextResponse } from "next/server";
import { fal } from "@fal-ai/client";

// Configure Fal.ai with your API key
fal.config({
  credentials: "e02a3d1e-961b-4002-bc52-796ca5dcbd36:cab328e1c664fdc2d62f430443614bb3"
});

export async function POST(request: Request) {
  const { prompt } = await request.json();

  try {
    const result = await fal.subscribe("fal-ai/imagen3", {
      input: {
        prompt: prompt,
        negative_prompt: "blurry, low quality, distorted",
        num_images: 4,
        seed: Math.floor(Math.random() * 100000)
      }
    });

    return NextResponse.json({ images: result.data.images }, { status: 200 });
  } catch (error) {
    console.error("Error from Fal.ai API:", error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}

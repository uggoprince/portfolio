import { type NextRequest, NextResponse } from "next/server";
import * as cheerio from "cheerio";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");

  if (!url) {
    return new NextResponse("URL is required", { status: 400 });
  }

  try {
    const response = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0" },
    });

    if (!response.ok) {
      return new NextResponse("Failed to fetch URL", { status: response.status });
    }

    const html = await response.text();
    const $ = cheerio.load(html); // Using cheerio instead of DOMParser

    // Extract Open Graph meta tags
    const title = $('meta[property="og:title"]').attr("content") || $("title").text() || "No title";
    const description = $('meta[property="og:description"]').attr("content") || "No description available.";
    const image = $('meta[property="og:image"]').attr("content") || "";
    const ogUrl = $('meta[property="og:url"]').attr("content") || url;

    return NextResponse.json({ title, description, image, url });
  } catch (error) {
    return new NextResponse("Failed to fetch metadata", { status: 500 });
  }
}

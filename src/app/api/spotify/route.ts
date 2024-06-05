import { NextRequest, NextResponse } from "next/server";

const base = Buffer.from(
  `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
).toString("base64");
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${base}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: process.env.SPOTIFY_REFRESH_TOKEN!,
    }).toString(),
  });

  return response.json();
};

const getNowPlaying = async () => {
  const { access_token } = await getAccessToken();

  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export async function GET(req: NextRequest) {
  const response = await getNowPlaying();
  const responseData = await response.json();

  console.log(responseData);

  if (
    response.status === 204 ||
    response.status > 400 ||
    responseData.currently_playing_type !== "track"
  ) {
    return NextResponse.json({ isPlaying: false }, { status: 200 });
  }

  const data = {
    isPlaying: responseData.is_playing,
    title: responseData.item.name,
    album: responseData.item.album.name,
    artist: responseData.item.album.artists
      .map((artist: any) => artist.name)
      .join(", "),
    albumImageUrl: responseData.item.album.images[0].url,
    songUrl: responseData.item.external_urls.spotify,
  };

  return NextResponse.json(data, { status: 200 });
}

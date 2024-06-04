"use client";

import Image from "next/image";
import useSWR from "swr";

interface SpotifyData {
  isPlaying: boolean;
  title: string;
  album: string;
  artist: string;
  albumImageUrl: string;
  songUrl: string;
}

const SpotifyNowPlaying = () => {
  const fetcher = (url: string) => fetch(url, {
    headers: {
      'Cache-Control': 'no-store'
    }
  }).then((res) => res.json());
  const { data }: { data: SpotifyData } = useSWR("/api/spotify", fetcher);

  console.log(data)

  return (
    <div className="container py-20">
      <div className="border border-gray-600 p-4 rounded-lg">
        <h1>Spotify Now Playing</h1>
        <a
          target='_blank'
          rel='noopener noreferer'
          href={
            data?.isPlaying
              ? data.songUrl
              : 'https://open.spotify.com/user/12159172546'
          }
          className='relative mt-8 flex w-full items-center space-x-4 rounded-md border p-5 transition-shadow hover:shadow-md'
        >
          <div className='w-16'>
            {data?.isPlaying ? (
              <img
                className='w-16 shadow-sm'
                src={data?.albumImageUrl}
                alt={data?.album}
              />
            ) : (
              'none'
            )}
          </div>

          <div className='flex-1'>
            <p className='component font-bold'>
              {data?.isPlaying ? data.title : 'Not Listening'}
            </p>
            <p className='font-dark text-xs'>
              {data?.isPlaying ? data.artist : 'Spotify'}
            </p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default SpotifyNowPlaying;
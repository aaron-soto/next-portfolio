import { getRecentHits } from '@/lib/spotify';
import { SpotifyData } from '@/lib/types/spotify';
import Link from 'next/link';

const SpotifyRecentTracks = async () => {
  const tracks: SpotifyData | number = await getRecentHits(50);

  if (typeof tracks === 'number') {
    return <></>;
  }

  if (tracks.items.length === 0) {
    return <div>No tracks found</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center p-8 w-full">
      <p className="mb-4">My 50 last played songs</p>
      <ul>
        {tracks.items.map((item, index) => (
          <li key={index}>
            <Link
              href={item.track.uri}
              className="flex gap-2 bg-white/5 hover:bg-white/10 my-2 p-2 rounded-[10px] w-full transition-colors duration-300 cursor-pointer ease-in-out group"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="group-hover:scale-110 rounded-[4px] w-8 h-8 transition-transform duration-100 ease-in-out scale-95"
                src={item.track.album.images[0].url}
                alt={`${item.track.name} album cover`}
              />
              <div>
                <p className="text-xs">{item.track.name}</p>
                <p className="text-muted-foreground text-xs">
                  {item.track.artists.map(a => a.name).join(', ')}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SpotifyRecentTracks;

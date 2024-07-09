import { getCurrentlyPlaying } from '@/lib/spotify';
import { PlayIcon } from 'lucide-react';
import Link from 'next/link';
import { Skeleton } from './ui/skeleton';

const PlayerOffline = () => {
  return (
    <div className="flex flex-col justify-center items-center border-2 border-white/20 bg-black/40 w-full h-full min-h-[75px] overflow-hidden">
      <p>Playback Paused</p>
    </div>
  );
};

const PlaceholderPlayer = () => {
  return (
    <div className="relative h-full min-h-[75px] overflow-hidden">
      <div className="relative z-10 flex flex-col justify-center items-start gap-2 bg-[#00000050] pl-4 h-full text-black">
        <Skeleton className="w-2/3 h-2" />
        <Skeleton className="w-1/3 h-2" />
      </div>
      <div className="top-1/2 right-1 absolute pr-2 h-12 text-white -translate-y-1/2">
        <Skeleton className="rounded-full w-12 h-12" />
      </div>
    </div>
  );
};

const SpotifyNowPlaying: React.FC = async () => {
  const track = await getCurrentlyPlaying().then(res => {
    return res;
  });

  if (typeof track === 'undefined') {
    return <PlaceholderPlayer />;
  }

  if (typeof track === 'number') {
    return <PlayerOffline />;
  }

  return (
    <Link
      href={track.item.uri}
      className="w-full h-full min-h-[100px] cursor-pointer group"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={
          track.item.album.images.sort(
            (album1, album2) => album2.width - album1.width,
          )[0].url
        }
        alt="Cover"
        className="group-hover:scale-110 top-0 left-0 z-0 absolute rounded-[var(--radius)] w-full h-full transition-transform object-[50%_33%] object-cover"
      />
      <div className="relative z-10 flex flex-col justify-end items-start bg-[#00000050] pb-4 pl-4 w-full h-full text-white">
        <p className="group-hover:text-gray-200 font-semibold text-ellipsis text-lg whitespace-nowrap overflow-hidden">
          {track.item.name}
        </p>
        <p className="group-hover:text-gray-200 opacity-80 font-normal text-ellipsis text-sm whitespace-nowrap overflow-hidden">
          {track.item.artists.map(a => a.name).join(',')}
        </p>
      </div>
      <div className="group-hover:text-gray-200 right-4 bottom-4 z-10 absolute h-6 text-white">
        <PlayIcon className="w-6 h-6" />
      </div>
      {track.is_playing && (
        <div
          className={`flex gap-1 items-end z-0 absolute h-2/3 bottom-0 w-full left-0 pointer-events-none`}
        >
          <span className="b1 bar" />
          <span className="b2 bar" />
          <span className="b3 bar" />
          <span className="b4 bar" />
          <span className="b5 bar" />
          <span className="b6 bar" />
          <span className="b7 bar" />
        </div>
      )}
    </Link>
  );
};

export default SpotifyNowPlaying;
export { PlaceholderPlayer };

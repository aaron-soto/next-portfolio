export type Image = {
  url: string;
  height: number;
  width: number;
};

export type Album = {
  name: string;
  images: Image[];
};

export type Artist = {
  name: string;
};

export type Track = {
  uri: string;
  name: string;
  album: Album;
  artists: Artist[];
};

export type Item = {
  track: Track;
};

export type SpotifyData = {
  items: Item[];
};

export type SpotifyContext = {
  external_urls: {
    spotify: string;
  };
  href: string;
  type: string;
  uri: string;
};

export type SpotifyExternalURLs = {
  spotify: string;
};

export type SpotifyImage = {
  height: number;
  url: string;
  width: number;
};

export type SpotifyArtist = {
  external_urls: SpotifyExternalURLs;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
};

export type SpotifyAlbum = {
  album_type: string;
  artists: SpotifyArtist[];
  available_markets: string[];
  external_urls: SpotifyExternalURLs;
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
};

export type SpotifyExternalIDs = {
  isrc: string;
};

export type SpotifyItem = {
  album: SpotifyAlbum;
  artists: SpotifyArtist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: SpotifyExternalIDs;
  external_urls: SpotifyExternalURLs;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
};

export type SpotifyCurrentlyPlayingResponse = {
  timestamp: number;
  context: SpotifyContext;
  progress_ms: number;
  item: SpotifyItem;
};
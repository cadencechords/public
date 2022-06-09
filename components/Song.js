import { removeChords } from '../lib/SongUtils';

export default function Song({ song }) {
  return (
    <div className="min-w-full">
      <h2 className="mb-4 font-semibold text-xl">{song.name}</h2>
      <div className="text-lg whitespace-pre-wrap">
        {removeChords(song.content)}
      </div>
    </div>
  );
}

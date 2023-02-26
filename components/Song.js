import { build } from '@cadencechords/chord-kit';

export default function Song({ song }) {
  const content = build({
    content: song.content,
    format: { chords_hidden: true },
  });
  return (
    <div className="min-w-full">
      <h2 className="mb-4 text-xl font-semibold">{song.name}</h2>
      <div className="text-lg whitespace-pre-wrap">{content}</div>
    </div>
  );
}

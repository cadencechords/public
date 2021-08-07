import { removeChords } from "../lib/SongUtils";

export default function Song({ song }) {
	return (
		<div className="min-w-full" style={{ scrollSnapAlign: "center" }}>
			<h2 className="mb-2 font-semibold text-xl">{song.name}</h2>
			<div className="text-lg">{removeChords(song.content)}</div>
		</div>
	);
}

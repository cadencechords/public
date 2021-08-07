import Song from "./Song";

export default function SetlistDisplay({ setlist }) {
	if (setlist) {
		return (
			<div className="max-w-3xl mx-auto px-10 md:px-0 py-3 whitespace-pre">
				<div className="flex overflow-x-auto" style={{ scrollSnapType: "y mandatory" }}>
					{setlist.songs?.map((song, index) => (
						<Song song={song} key={index} />
					))}
				</div>
			</div>
		);
	} else {
		return null;
	}
}

import * as Transposer from 'chord-transposer';

export function removeChords(content) {
  if (content) {
    let linesOfSong = content.split(/\r\n|\r|\n/);

    content = linesOfSong.map((line, index) => {
      if (isChordLine(line)) {
        return null;
      } else if (line === '') {
        return <br key={index} className="leading-normal" />;
      } else {
        return <p key={index}>{line?.trim()}</p>;
      }
    });
  }

  return content;
}
export function isChordLine(line) {
  if (line) {
    let parts = line.split(' ');
    parts = parts.map(part => part.replace(/\s/g, ''));
    parts = parts.filter(part => part !== '');
    let numChordMatches = 0;

    parts?.forEach(part => {
      if (isChord(part)) {
        ++numChordMatches;
      }
    });

    return numChordMatches > parts.length / 2;
  } else {
    return false;
  }
}

export function isChord(potentialChord) {
  try {
    Transposer.Chord.parse(potentialChord);
    return true;
  } catch {
    return false;
  }
}

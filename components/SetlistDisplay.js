import AliceCarousel from 'react-alice-carousel';
import Song from './Song';
import 'react-alice-carousel/lib/alice-carousel.css';
import SetlistNavigation from './SetlistNavigation';
import { useState } from 'react';

export default function SetlistDisplay({ setlist }) {
  const [songIndex, setSongIndex] = useState(0);
  function buildTemplates() {
    return setlist?.songs?.map(song => <Song song={song} key={song.id} />);
  }

  if (setlist) {
    return (
      <>
        <div className="max-w-3xl mx-auto px-10 md:px-0 py-3 whitespace-pre mb-20">
          <AliceCarousel
            swipeDelta={100}
            animationDuration={400}
            disableButtonsControls
            disableDotsControls
            disableSlideInfo
            items={buildTemplates()}
            mouseTracking={true}
            onSlideChanged={e => setSongIndex(e.slide)}
            activeIndex={songIndex}
            autoHeight
          />
        </div>
        <SetlistNavigation
          songs={setlist?.songs}
          index={songIndex}
          onIndexChange={setSongIndex}
        />
      </>
    );
  } else {
    return null;
  }
}

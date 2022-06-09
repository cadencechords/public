import AliceCarousel from 'react-alice-carousel';
import Song from './Song';
import 'react-alice-carousel/lib/alice-carousel.css';

export default function SetlistDisplay({ setlist }) {
  function buildTemplates() {
    return setlist?.songs?.map(song => <Song song={song} key={song} />);
  }

  if (setlist) {
    return (
      <div className="max-w-3xl mx-auto px-10 md:px-0 py-3 whitespace-pre">
        <AliceCarousel
          swipeDelta={100}
          animationDuration={400}
          disableButtonsControls
          disableDotsControls
          disableSlideInfo
          items={buildTemplates()}
          mouseTracking={true}
        />
      </div>
    );
  } else {
    return null;
  }
}

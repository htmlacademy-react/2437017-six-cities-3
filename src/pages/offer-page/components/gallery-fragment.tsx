import { memo } from 'react';

interface imagesProps {
  images: string[];
}

function OfferGallery ({images}:imagesProps){
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {images.map((image) => (
          <div key={image} className="offer__image-wrapper">
            <img className="offer__image" src={image} alt="Photo studio"/>
          </div>
        ))}
      </div>
    </div>
  );
}

const MemorizedOfferGallery = memo(OfferGallery);

export default MemorizedOfferGallery;


import React from "react";

const ImageGalleryCard = () => {
  return (
    <div className="flex flex-col gap-4 p-4">
      {/* First row */}
      <div className="flex flex-wrap md:flex-nowrap gap-4 justify-center">
        <img
          src="https://media.istockphoto.com/id/509628540/photo/sagrada-familia-barcelona-spain.jpg?s=612x612&w=0&k=20&c=Wcmb2q7rhc_O4ab6HQhf_lqDeqe7b5pfoFIJXYxEikw="
          alt=""
          className="h-44 w-full sm:w-40 object-cover rounded-xl"
        />
        <img
          src="https://media.istockphoto.com/id/625648834/photo/view-of-the-city-from-park-guell-in-barcelona-spain.jpg?s=612x612&w=0&k=20&c=ixsgwjTFxV1IdqoJXPYFUP3eDYzPGtsXZ94NTFfAURI="
          alt=""
          className="h-44 w-full sm:w-[60%] object-cover rounded-xl"
        />
        <img
          src="https://media.istockphoto.com/id/525241683/photo/la-rambla-barcelona.jpg?s=612x612&w=0&k=20&c=kZ6njpKQwdNkc0DTwsxE5coKT2s1h272P_ocOnS-8Wc="
          alt=""
          className="h-44 w-full sm:w-40 object-cover rounded-xl"
        />
      </div>

      {/* Second row */}
      <div className="flex flex-wrap md:flex-nowrap gap-4 justify-center">
        <img
          src="https://hiddenbarcelona.com/wp-content/uploads/2023/02/gothic-quarter-barcelona.jpeg"
          alt=""
          className="h-44 w-full sm:w-[60%] object-cover rounded-xl"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmeQvvRvTakrhtjC_PXK6PvT1NR5eeq3E5Vw&s"
          alt=""
          className="h-44 w-full sm:w-40 object-cover rounded-xl"
        />
        <img
          src="https://pohcdn.com/sites/default/files/styles/paragraph__hero_banner__hb_image__1880bp/public/hero_banner/Montjuic-fountain.jpg"
          alt=""
          className="h-44 w-full sm:w-40 object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default ImageGalleryCard;

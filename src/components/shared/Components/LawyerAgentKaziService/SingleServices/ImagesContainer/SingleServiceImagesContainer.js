import React, { useState } from "react";
import liveLinkGenerator from "../../../../../../assets/utilities/liveLink/liveLinkGenerator";
import SingleServiceImageCard from "./SingleServiceImageCard";

const SingleServiceImagesContainer = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(photos[0]);

  return (
    <div>
      <div>
        <img
          className="w-[326px] h-[176px] md:w-[526px] md:h-[284px] lg:w-[819px] lg:h-[436px] rounded-t"
          src={liveLinkGenerator(selectedPhoto)}
          alt="selected"
        />
      </div>
      <div className="flex justify-center items-center gap-3 py-2 lg:py-4 bg-[linear-gradient(90.84deg,rgba(228,18,114,0.3)_15.44%,rgba(145,73,201,0.3)_92.53%)] rounded-b">
        {photos?.map((photo, i) => (
          <SingleServiceImageCard
            key={i}
            {...{ photo, i, setSelectedPhoto, selectedPhoto }}
          />
        ))}
      </div>
    </div>
  );
};

export default SingleServiceImagesContainer;

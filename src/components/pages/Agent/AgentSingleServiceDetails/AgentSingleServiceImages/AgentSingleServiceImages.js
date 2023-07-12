// Configuration
import React, { useState } from "react";

// Components
import AgentSingleProfileImageCard from "../../../../shared/Cards/Agent/AgentSingleProfileImageCard";

const AgentSingleServiceImages = ({ serviceDetails }) => {
  const [selectedId, setSelectedId] = useState(0);
  return (
    <div>
      <div>
        <img
          className="w-[819px] h-[436px] rounded-t"
          src={serviceDetails.photos[selectedId]}
          alt=""
        />
      </div>
      <div className="flex justify-center items-center gap-3 py-4 bg-[linear-gradient(90.84deg,rgba(228,18,114,0.3)_15.44%,rgba(145,73,201,0.3)_92.53%)] rounded-b">
        {serviceDetails.photos.map((photo, i) => (
          <AgentSingleProfileImageCard
            key={i}
            {...{ photo, i, setSelectedId }}
          />
        ))}
      </div>
    </div>
  );
};

export default AgentSingleServiceImages;

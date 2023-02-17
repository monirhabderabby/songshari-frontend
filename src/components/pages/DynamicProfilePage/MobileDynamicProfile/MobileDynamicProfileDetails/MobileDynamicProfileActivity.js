// Configuration
import React from "react";
import { useParams } from "react-router";

// Components
import { BottomNav } from "../../../../../Wrapper/Home/mobileversion/BottomNav";
import { MobileBackButton } from "../../../../shared/Components/MobileBackButton";
import MobileActivityPost from "../../../MobileActivity/MobileActivityPost";
import { useGetDynamicPostsQuery } from "../../../../../Redux/features/Post/postApi";

const MobileDynamicProfileActivity = () => {
  const { id } = useParams();
  const { data: posts, isLoading, error } = useGetDynamicPostsQuery(id);

  return (
    <div>
      <MobileBackButton name={"Activity"} />
      <div>
        <MobileActivityPost {...{ posts, isLoading, error }} />
      </div>
      <div className="h-20"></div>
      <BottomNav />
    </div>
  );
};

export default MobileDynamicProfileActivity;

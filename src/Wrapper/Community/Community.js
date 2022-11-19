import React from 'react';
import CommonBanner from '../../components/comons/CommonBanner';
import Comunity from '../../components/pages/comunity/Comunity';
import NavBar from '../../components/shared/NavBar/NavBar';

const Community = () => {
  return (
    <div>
      <NavBar />
      <CommonBanner title='Community' currentStage='> Community' />
      <Comunity />
    </div>
  )
}
export default Community;
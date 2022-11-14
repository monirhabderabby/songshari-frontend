import React from 'react';
import Anexecutive from '../../components/CardComopents/Anexecutive';
import Comunity from '../../components/comunity/Comunity';
import Membership from '../../components/membership/Membership';

const Community = () => {
  return (
    <div className='mb-32'>
      <Comunity />
      <Anexecutive></Anexecutive>
      <Membership />
    </div>
  )
}
export default Community;
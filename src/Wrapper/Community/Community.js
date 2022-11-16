import React from 'react';
import Anexecutive from '../../components/CardComopents/Anexecutive';
import Membership from '../../components/membership/Membership';
import Comunity from '../../components/pages/comunity/Comunity';

const Community = () => {
  return (
    <div className='mb-32'>
      <Comunity />
      <div className='my-6'>
        <Anexecutive />
      </div>
      <Membership />
    </div>
  )
}
export default Community;
import React from 'react'
import '../../../components/SingleProfilesUser/profileSection/Matches.css';
// import img from '../../../assets/images/Vector.png';
// import img1 from '../../../assets/images/coolicon.png';
import { BottomNav } from './BottomNav';
import { Link } from 'react-router-dom';
import { useGetMatchedUsersQuery } from '../../../Redux/features/connections/connectionApi';
import { ageCalculator } from '../../../assets/utilities/AgeCalculation/ageCalculator';

export const MatchesMov = () => {
  const { data, isLoading } = useGetMatchedUsersQuery();
  if (isLoading) {
    return;
  };
  return (
    <div>
      <div className='mt-5'>
        <div className='setting-mov'>
          <Link to='/setting'>
            <i className="fa-solid fa-chevron-left ml-8 mt-3"></i>
          </Link>
          <h1 className='profile-tit ml-20 mt-2 mb-5'>Match Partner</h1>
        </div>
      </div>
      <div className='ml-4 mr-4'>
        <div className="grid lg:grid-cols-2 gap-4">
          {
            data.map((info, index) => <div key={index}
              className=" rounded-lg lg:max-w-lg shadow-xl colorrrrrr"
            >
              <div className="flex flex-wrap justify-center px-10 pt-5"></div>
              <p className='bg-white w-28 text-center ml-3 rounded-full'>{info.percentage}% Match</p>
              <img src={info._doc.profilePhoto} className='w-20 h-20 mx-auto rounded-full mt-2' alt="Not Available"></img>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-white">{info._doc.firstName}</h2>
                <p className="text-white">Age : {ageCalculator(info._doc.dateOfBirth)} </p>
                <p className="text-white">{info._doc.hometown} , Bangladesh </p>
                <div className="card-actions justify-end pt-5 gap-10">
                  <div className='match-icon-mov ml-28 mb-4'>
                    <div className='match-icon1 rounded-full mr-4'>
                      <img src='https://i.ibb.co/Fh0pm2w/Vector.png' className='lg:max-w-lg' alt="Not Available"></img>
                    </div>
                    <div className='match-icon-2 rounded-full'>
                      <img src='https://i.ibb.co/km8DS6j/coolicon.png' alt="Not Available"></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>)
          }
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <BottomNav></BottomNav>
    </div>

  )
}

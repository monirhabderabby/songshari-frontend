// configuration
import React from "react";

// Third party packages

// components
import { ageCalculator } from "../../../../assets/utilities/AgeCalculation/ageCalculator";

export const MatchesMobileCard = ({ info }) => {
    // js variable declaration
    let name;
    let profilePhoto;
    let age;

    age = info?.data?.dateOfBirth ? ageCalculator(info?.data?.dateOfBirth) : "20";
    name = info.data.firstName + " " + info.data.lastName;
    if (name.length > 13) {
        name = name.slice(0, 12) + " ...";
    }
    profilePhoto = info.data.profilePhoto
        ? info.data.profilePhoto
        : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";

    return (
        <div className=" rounded-lg lg:max-w-lg shadow-xl colorrrrrr">
            <div className="flex flex-wrap justify-center px-10 pt-5"></div>
            <p className="bg-white w-28 text-center ml-3 rounded-full">{info.percentage}% Match</p>
            <img src={profilePhoto} className="w-20 h-20 mx-auto rounded-full mt-2" alt="Not Available"></img>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-white mb-0 pb-0">{name}</h2>
                <p className="text-white my-1">Age : {ageCalculator(age)} </p>
                <p className="text-white">Dhaka , Bangladesh </p>
                <div className="card-actions flex justify-center py-2 gap-10">
                    <div className="match-icon-mov">
                        <div className="match-icon1 rounded-full mr-4">
                            <img src="https://i.ibb.co/Fh0pm2w/Vector.png" className="lg:max-w-lg" alt="Not Available"></img>
                        </div>
                        <div className="match-icon-2 rounded-full">
                            <img src="https://i.ibb.co/km8DS6j/coolicon.png" alt="Not Available"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

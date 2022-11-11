import React from 'react';
import ProfileCard from "./ProfileCard";

const SingleProfiles = () => {
    return (
        <div className='container mx-auto'>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div class="md:col-span-4">
                    <div>
                        <ProfileCard />
                    </div>
                </div>
                <div class="md:col-span-5">
                    <div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt cumque magnam veritatis suscipit labore eligendi, minima sequi, iste odit, architecto perspiciatis nemo modi! Debitis iste, possimus enim fuga officiis illum.</p>
                    </div>
                </div>
                <div class="md:col-span-3">
                    <div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt cumque magnam veritatis suscipit labore eligendi, minima sequi, iste odit, architecto perspiciatis nemo modi! Debitis iste, possimus enim fuga officiis illum.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProfiles; <h1>Helo</h1>
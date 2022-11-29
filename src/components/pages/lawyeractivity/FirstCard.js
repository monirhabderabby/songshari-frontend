import React from 'react'

export const FirstCard = () => {
  return (
    <div className='grid lg:grid-cols-3 gap-6 container ml-12'>

      <div className="stats shadow">

        <div className="stat grid lg:grid-cols-2">
          <div>
            <div className="stat-title text-4xl font-bold">12</div>
            <div className="stat-valuetext-lg">unread messages</div>
          </div>

          <div className="stat-figure text-primary">
            <img src='https://i.ibb.co/XzXQ8ck/ic-messages-1.png' alt="Not Available"></img>
          </div>
        </div>
      </div>
      <div className="stats shadow">

        <div className="stat grid lg:grid-cols-2">
          <div>
            <div className="stat-title text-4xl font-bold">12</div>
            <div className="stat-valuetext-lg">Total completed case</div>
          </div>

          <div className="stat-figure text-primary">
            <img src='https://i.ibb.co/PtZvMKJ/circle-check.png' alt="Not Available"></img>
          </div>
        </div>
      </div>
      <div className="stats shadow">

        <div className="stat grid lg:grid-cols-2">
          <div>
            <div className="stat-title text-4xl font-bold">12</div>
            <div className="stat-valuetext-lg">Total cancelled case</div>
          </div>

          <div className="stat-figure text-primary">
            <img src='https://i.ibb.co/PxjZyb3/off-close.png' alt="Not Available"></img>
          </div>
        </div>
      </div>

    </div>
  )
}

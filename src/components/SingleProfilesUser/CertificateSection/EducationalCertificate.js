import React from 'react';

export const EducationalCertificateSidebar = ({ setSelectedImage }) => {
    const handleImage = (e) => {
        setSelectedImage(e.target.currentSrc)
    }

    return (
        <div>
            <div className='mt-4'>
                <div>
                    <h1 className="text-lg font-bold mb-2 text-slate-800">
                        SSC Certificate
                    </h1>
                    <div tabIndex="1" className='onselect-image rounded'>
                        <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/certificate-of-appreciation-portrait-design-template-009e3d995336bfe9277e0b01e6658bc1_screen.jpg?ts=1650358684" alt="not available" className='rounded-2xl w-full' onClick={handleImage} />
                        <div className='selected-btn'>
                            <button className='btn-certificate  text-white text-lg py-1 px-2 rounded'>Selected</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-6'>
                <div>
                    <h1 className="text-lg font-bold mb-2 text-slate-800">
                        SSC Certificate
                    </h1>
                    <div tabIndex="2" className='onselect-image rounded'>
                        <img src="https://www.shutterstock.com/image-vector/certificate-appreciation-medal-ribbon-portrait-260nw-479429395.jpg" alt="not available" className='rounded-2xl w-full' onClick={handleImage} />
                        <div className='selected-btn'>
                            <button className='btn-certificate  text-white text-lg py-1 px-2 rounded'>Selected</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-6'>
                <div>
                    <h1 className="text-lg font-bold mb-2 text-slate-800">
                        SSC Certificate
                    </h1>
                    <div tabIndex="3" className='onselect-image rounded'>
                        <img src="https://img.freepik.com/free-vector/modern-employee-month-certificate_52683-75428.jpg?w=2000" alt="not available" className='rounded-2xl w-full' onClick={handleImage} />
                        <div className='selected-btn'>
                            <button className='btn-certificate  text-white text-lg py-1 px-2 rounded'>Selected</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-6'>
                <div>
                    <h1 className="text-lg font-bold mb-2 text-slate-800">
                        SSC Certificate
                    </h1>
                    <div tabIndex="4" className='onselect-image rounded'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlisgkeJ4vUWfCnQ7AAuA8Xi6kxieUpDAu_K3MrtBNvoAy1zi6XUKCCBpeMDZVCp_osYo&usqp=CAU" alt="not available" className='rounded-2xl w-full' onClick={handleImage} />
                        <div className='selected-btn'>
                            <button className='btn-certificate  text-white text-lg py-1 px-2 rounded'>Selected</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-6'>
                <div>
                    <h1 className="text-lg font-bold mb-2 text-slate-800">
                        SSC Certificate
                    </h1>
                    <div tabIndex="5" className='onselect-image rounded'>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsCmvTUfjQJROGRqRimmATQIgD4ESoPp-kXA&usqp=CAU" alt="not available" className='rounded-2xl w-full' onClick={handleImage} />
                        <div className='selected-btn'>
                            <button className='btn-certificate  text-white text-lg py-1 px-2 rounded'>Selected</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function EducationalCertificate({ selectedImage }) {

    return (
        <div>
            <div className='py-2'>
                <div className='shadow-certificate rounded-2xl p-2 py-4 '>
                    <div className='flex justify-center items-center '>
                        <div className="max-h-[1187px] max-w-[800px] z-50 overflow-scroll">
                            <img
                                src={selectedImage}
                                style={{ zIndex: '1' }}
                                className="w-full rounded-2xl"
                                alt='not available'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

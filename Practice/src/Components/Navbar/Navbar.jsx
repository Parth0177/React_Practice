import React from 'react';
import myImage from '../../assets/Untitled-1920-x-1080-px-3-min-1024x576.jpg';
import notification from '../../assets/notifications_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg'
import user from '../../assets/person_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg'
import settings from '../../assets/settings_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg'
import search from '../../assets/search_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.png'

const Navbar = () => {
  return (
    <div className='flex text-white ml-5 mt-5 justify-between mr-2'>
      <div className='flex-row gap-10 h-15'>
      <img src={user} alt="" className='mb-5 h-12'/>
      <img src={notification} alt="" className='mb-5 h-12'/>
      <img src={settings} alt=""className='mb-5 h-12' />
      <img src={search} alt=""className='mb-5 h-12' />
      </div>
      <div>
        <img src={myImage} alt="Navbar Icon" className="h-90 w-350" />
      </div>
    </div>
  );
};

export default Navbar;

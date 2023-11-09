import React from 'react'; 
import Headertext from './Headertext';

const Header = () => {
    return (
        <div className='   bg-full bg-cover bg-center  bg-auto bg-no-repeat bg-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  to-transparent' style={{ backgroundImage: `url("https://i.ibb.co/fvyh69D/layer7.png")`  }}>
            <div>
            <div class="navbar  ">
                <div class="flex-1"> 
                    <img src="https://i.ibb.co/ZWvf4gN/Frame-5-1-1.png" width='120' className='p-1' alt="" />
                </div>
                <div class="flex-none">
                    <button class="btn btn-square btn-ghost">
                    <svg width="67" height="45" viewBox="0 0 67 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.99097 6.75H65.0088" stroke="#FF03C8" stroke-width="5"/>
                        <line x1="10" y1="18.5" x2="65" y2="18.5" stroke="#FF03C8" stroke-width="5"/>
                        <line x1="21" y1="29.5" x2="65" y2="29.5" stroke="#FF03C8" stroke-width="5"/>
                        </svg>
                    </button>
                </div>
                </div>
            </div>
            <div className='py-12 '>

            </div>
            
            <Headertext></Headertext>
            <div className='py-12'>

            </div>
        </div>
    );
};

export default Header;
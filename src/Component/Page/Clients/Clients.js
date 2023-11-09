import React from 'react';
import './Client.css';
import Carousel from './Carousel'; 

const Clients = () => {
  
  
    return (
        <div className='bg-gray-400'>
            <h1 className='text-2xl   ' style={{'color':'#005f57'}}>Testimonial</h1>
            <div>
                <h1 className='text-5xl my-6 text-white' >What’s Our Clients Says</h1>
            </div>
            <div className='flex  justify-around   h-96'>
                <div className=''>
                    <div class="card w-96  bg-base-100   shadow-2xl mt-12  image-full">
                        <figure> </figure>
                        <div class="card-body">
                            <div>
                                    <div class="avatar">
                                    <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://i.ibb.co/VYqscF3/Rectangle-10-1.png" />
                                        
                                    </div>
                                    </div> 
                                    <p className=''>Jhon hed</p>
                                    <p className='text-xs'>CEO , Nextgen</p>
                                    <div class="rating rating-xs">
                                        <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" checked />
                                    </div>
                            </div>
                            <div>
                             

                                <p className='text-xs'>Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private</p>
                                 

                            </div>
                             
                             
                        </div>
                    </div> 
                </div>
                <div>
                <div class="card w-96 bg-base-100 shadow-2xl  hoverbg image-full">
                        <figure> </figure>
                        <div class="card-body">
                            <div>
                                    <div class="avatar">
                                    <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://i.ibb.co/VYqscF3/Rectangle-10-1.png" />
                                        
                                    </div>
                                    </div> 
                                    <p className=''>Jhon hed</p>
                                    <p className='text-xs'>CEO , Nextgen</p>
                                    <div class="rating rating-xs">
                                        <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400"  />
                                        <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" checked />
                                    </div>
                            </div>
                            <div>
                            <svg width="35" height="35" viewBox="0 0 50 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.225 21.1H3.5C3.7 9.42508 6 7.50007 13.175 3.25007C14 2.75007 14.275 1.70007 13.775 0.850075C13.3 0.0250745 12.225 -0.249926 11.4 0.250074C2.95 5.25007 0 8.30007 0 22.825V36.3C0 40.575 3.475 44.025 7.725 44.025H15.225C19.625 44.025 22.95 40.7 22.95 36.3V28.8C22.95 24.425 19.625 21.1 15.225 21.1Z" fill="#D9D9D9" fill-opacity="0.1"/>
                            <path d="M42.2002 21.1H30.4752C30.6752 9.42508 32.9752 7.50007 40.1502 3.25007C40.9752 2.75007 41.2502 1.70007 40.7502 0.850075C40.2502 0.0250745 39.2002 -0.249926 38.3502 0.250074C29.9002 5.25007 26.9502 8.30007 26.9502 22.85V36.325C26.9502 40.6 30.4252 44.05 34.6752 44.05H42.1752C46.5752 44.05 49.9002 40.725 49.9002 36.325V28.825C49.9252 24.425 46.6002 21.1 42.2002 21.1Z" fill="#D9D9D9" fill-opacity="0.1"/>
                            </svg>

                                <p className='text-xs'>Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private</p>
                                <div className='flex-end'>
                                <svg className=' babago ' width="35" height="35" viewBox="0 0 50 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M34.6754 22.9498H46.4004C46.2004 34.6247 43.9004 36.5497 36.7254 40.7997C35.9004 41.2997 35.6254 42.3497 36.1254 43.1997C36.6004 44.0247 37.6754 44.2997 38.5004 43.7997C46.9504 38.7997 49.9004 35.7497 49.9004 21.2248V7.74983C49.9004 3.47483 46.4254 0.0248337 42.1754 0.0248337H34.6754C30.2754 0.0248337 26.9504 3.34983 26.9504 7.74983V15.2498C26.9504 19.6248 30.2754 22.9498 34.6754 22.9498Z" fill="#D9D9D9" fill-opacity="0.1"/>
                                <path d="M7.7002 22.9498H19.4252C19.2252 34.6247 16.9252 36.5497 9.7502 40.7997C8.9252 41.2997 8.6502 42.3497 9.1502 43.1997C9.6502 44.0247 10.7002 44.2997 11.5502 43.7997C20.0002 38.7997 22.9502 35.7497 22.9502 21.1998V7.72483C22.9502 3.44983 19.4752 -0.000167847 15.2252 -0.000167847H7.7252C3.3252 -0.000167847 0.000196457 3.32483 0.000196457 7.72483V15.2248C-0.0248032 19.6248 3.3002 22.9498 7.7002 22.9498Z" fill="#D9D9D9" fill-opacity="0.1"/>
                                </svg>
                                </div>

                            </div>
                             
                             
                        </div>
                    </div> 
                </div>
                <div>
                <div class="card w-96 bg-base-100 my-12 shadow-2xl image-full">
                        <figure> </figure>
                        <div class="card-body">
                            <div>
                                    <div class="avatar">
                                    <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src="https://i.ibb.co/VYqscF3/Rectangle-10-1.png" />
                                        
                                    </div>
                                    </div> 
                                    <p className=''>Jhon hed</p>
                                    <p className='text-xs'>CEO , Nextgen</p>
                                    <div class="rating rating-xs">
                                        <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400"   />
                                        <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" checked />
                                        <input type="radio" name="rating-5" class="mask mask-star-2 bg-orange-400" />
                                    </div>
                            </div>
                            <div>
                             

                                <p className='text-xs'>Everyone has the right to freedom of thought, conscience and religion; this right includes freedom to change his religion or belief, and freedom, either alone or in community with others and in public or private</p>
                                

                            </div>
                             
                             
                        </div>
                    </div> 
                </div>
                 
            </div>

        </div>
    );
};

export default Clients;
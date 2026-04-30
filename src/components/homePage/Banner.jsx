import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

const Banner = () => {
    return (
        <div className=''>
            <div className='bg-base-200 p-12 flex gap-20 items-center'>
                <Image src={'/images/hero-banner.png'} alt='banner image' width={700} height={700} className='object-cover  rounded-2xl' />
                <div className=' space-y-2 '>
                    <h2 className='font-bold text-5xl'>QurbaniHat</h2>
                    <h2 className='font-bold text-5xl'> Livestock Booking Platform</h2>
                    <p className=''>Explore verified cows and goats for Qurbani with<br></br> a smooth and secure booking experience.</p>
                    <button className='btn btn-outline btn-primary text-xl mt-2'><Link href={'/all-animals'} className='flex gap-2 items-center'>Browse Animals <FiArrowUpRight /></Link></button>
                </div>
            </div>
        </div> 
    );
};

export default Banner;
import AnimalsCard from '@/components/homePage/AnimalsCard';
import { getAnimalsData } from '@/lib/fetchData';
import React from 'react';

const AllAnimalsPage = async() => {
    const animals = await getAnimalsData();
    
    return (
        <div className='my-20 w-11/12 mx-auto'>
            <h1 className=' font-bold text-4xl text-center'>Featured animals</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-10'>
                {
                    animals.map(animal => <AnimalsCard key={animal.id} animal={animal}></AnimalsCard>)
                }
            </div>
        </div>
    );
};

export default AllAnimalsPage;
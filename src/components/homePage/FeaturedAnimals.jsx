import { getAnimalsData } from '@/lib/fetchData';
import React from 'react';
import AnimalsCard from './AnimalsCard';

const FeaturedAnimals = async() => {
    const allAnimals = await getAnimalsData();
    console.log(allAnimals);
    const animals = allAnimals.slice(0,4);
    return (
       <div className='mt-20'>
            <h1 className=' font-bold text-4xl text-center'>Featured animals</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-10'>
                {
                    animals.map(animal => <AnimalsCard key={animal.id} animal={animal}></AnimalsCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedAnimals;
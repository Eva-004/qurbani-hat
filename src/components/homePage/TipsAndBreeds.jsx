
import React from 'react';
import { GiCheckMark } from 'react-icons/gi';

const TipsAndBreeds = () => {
    return (
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 py-20 px-6">
  
  <div className="text-center mb-12">
    <h1 className="text-4xl md:text-5xl font-bold text-white">
      Qurbani Tips and Top Breeds
    </h1>
    <p className="text-blue-100 mt-3 text-lg">
      Smart guidance for choosing healthy animals
    </p>
  </div>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

    <div className="bg-white  rounded-2xl shadow-xl p-6">
      <h2 className="text-xl font-bold mb-5 text-gray-800">
        Quick checks for a healthy choice
      </h2>

      <ul className="space-y-4 text-gray-700">
        <li className='flex items-center gap-2'><GiCheckMark className='text-green-500 text-xl'/> Age Verification: Ensure at least 2 years (Cattle) or 1 year (Goat)</li>
        <li className='flex items-center gap-2'><GiCheckMark className='text-green-500 text-xl'/> Health & Vitality: Bright eyes, active movement</li>
        <li className='flex items-center gap-2'><GiCheckMark className='text-green-500 text-xl'/> Physical Integrity: No injuries or defects</li>
        <li className='flex items-center gap-2'><GiCheckMark className='text-green-500 text-xl'/> Natural Growth: Avoid over-bloated animals</li>
      </ul>
    </div>

    <div className="bg-white  rounded-2xl shadow-xl p-6">
      <h2 className="text-xl font-bold mb-5 text-gray-800">
        Top Breeds
      </h2>

      <ul className="space-y-4 text-gray-700">
        <li><b>Brahman</b> - Heat resistant, high meat yield</li>
        <li><b>Sahiwal</b> - Calm temperament, quality meat</li>
        <li><b>Mirakidim</b> - White coat, tender meat</li>
        <li><b>Desi</b> - Natural taste, widely available</li>
      </ul>
    </div>

  </div>
</div>
    );
};

export default TipsAndBreeds;
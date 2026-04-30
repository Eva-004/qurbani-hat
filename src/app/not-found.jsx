import Link from 'next/link';
import React from 'react';

export const metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
}

const NotFoundPage = () => {
    return (
        <div className='text-center my-40'>
            <div>
                <h1 className="text-6xl font-bold text-purple-800 mb-4">404</h1>
            <p className="text-lg text-gray-600 mb-6"> Page not found </p>
            <Link  href={"/"} className="px-5 py-2 border border-purple-800 rounded-full text-sm hover:bg-purple-800 hover:text-white transition"> Go to Home
           </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
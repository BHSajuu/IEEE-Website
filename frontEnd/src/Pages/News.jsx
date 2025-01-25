
import React from 'react';
import NewsCard from '../components/NewsCard';
import { newsData } from '../utility/TeamData';

function News() {



  return (
    <main className='mt-20 bg-gradient-to-r from-gray-700 to-gray-900 min-h-screen p-10'>
      <p className="text-4xl text-center font-serif m-4 relative text-cyan-300 font-bold uppercase overflow-hidden">
        <span className="absolute top-0 left-0 w-full h-full animate-glitch text-pink-300">
          Latest News
        </span>
        <span className="absolute top-0 left-0 w-full h-full animate-glitchShadow text-blue-600">
          Latest News
        </span>
        <span>Latest News</span>
      </p>

      <div className='grid grid-cols-1 gap-32 w-full  overflow-auto'>
        {newsData.map((newsItem) => (
          <NewsCard key={newsItem.id} newsItem={newsItem} />
        ))}
      </div>

    </main>
  );
}

export default News;

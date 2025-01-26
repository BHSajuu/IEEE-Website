
import React from 'react';
import NewsCard from '../components/NewsCard';
import { newsData } from '../utility/TeamData';

function News() {



  return (
    <main className='mt-20 bg-gradient-to-r from-gray-700 to-gray-900 min-h-screen p-10'>
      <p className="relative text-center text-4xl font-serif m-4 text-white font-bold uppercase">
        <span
          className="absolute top-0 left-1/4 right-1/4 h-full animate-gradientMove bg-gradient-to-r from-cyan-500 via-pink-500 to-purple-600 blur-md opacity-70"
        ></span>
        <span className="relative z-10">
          <span className="animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">
            Latest News
          </span>
        </span>
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

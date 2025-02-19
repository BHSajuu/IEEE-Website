import React, { useState, useEffect } from "react";
import axios from 'axios';
import { toast } from 'react-toastify';
import Loader from "./Loader";

const ManageNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currNews, setCurrNews] = useState({
    title: "",
    description: "",
    newsUrl: "",
    date: new Date().toISOString().split('T')[0],
  });

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('/api/news');
        setNews(response.data.data || []);
      } catch (error) {
        toast.error('Failed to load news');
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, []);

  const handleRemoveEvent = async (id) => {
    try {
      await axios.delete(`/api/news/${id}`);
      setNews(prev => prev.filter(item => item.id !== id));
      toast.success('News deleted successfully');
    } catch (error) {
      toast.error('Failed to delete news');
      console.error(error);
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCurrNews({ ...currNews, newsUrl: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!currNews.title || !currNews.description || !currNews.newsUrl) {
      toast.error('Please fill all required fields');
      return;
    }

    try {
      const response = await axios.post('/api/news', {
        ...currNews,
        date: new Date(currNews.date).toISOString()
      });
      setNews(prev => [...prev, response.data]);
      setCurrNews({
        title: "",
        description: "",
        newsUrl: "",
        date: new Date().toISOString().split('T')[0]
      });
      toast.success('News added successfully!');
    } catch (error) {
      toast.error('Failed to add news');
      console.error(error);
    }
  };

  if (loading) return <Loader/>;

  return (
    <main className="p-4 sm:p-6 flex flex-col  items-center min-h-screen ">
      {/* Add New News Card */}
      <div className="max-w-5xl w-full bg-gray-300 shadow-lg rounded-lg p-4 mb-6">
        {/* Card Header */}
        <h2 className="text-xl font-semibold mb-4">Add New News</h2>
        {/* Card Content (Form) */}
        
          <form onSubmit={handleSubmit}>
            <div className="grid w-full gap-4">
              {/* Title */}
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="title" className="font-medium text-black">
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  value={currNews.title}
                  onChange={(e) =>
                    setCurrNews({ ...currNews, title: e.target.value })
                  }
                  className="px-3 py-2 border rounded-md focus:ring-2 bg-white focus:outline-none"
                  placeholder="Title of the news"
                />
              </div>

              {/* Description */}
              <div className="flex flex-col space-y-1.5">
                <label htmlFor="description" className="font-medium text-black">
                  Description
                </label>
                <textarea
                  rows={8}
                  id="description"
                  value={currNews.description}
                  onChange={(e) =>
                    setCurrNews({ ...currNews, description: e.target.value })
                  }
                  className="px-3 py-2 border rounded-md focus:ring-2 bg-white focus:outline-none"
                  placeholder="Description of the news"
                />
              </div>

              {/* Image and Date */}
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
                {/* Image Upload */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="img" className="font-medium text-black">
                    Image
                  </label>
                  <input
                    id="img"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="border rounded-xl p-2 w-full mb-2"
                  />
                </div>

                {/* Date Input */}
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="date" className="font-medium text-black">
                    Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    value={currNews.date}
                    onChange={(e) =>
                      setCurrNews({ ...currNews, date: e.target.value })
                    }
                    className="px-3 py-2 border rounded-md focus:ring-2 bg-white focus:outline-none"
                    placeholder="Date of the news"
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-4">
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Save
              </button>
            </div>
          </form>
       
      </div>

      {/* Divider */}
      <div className="w-full h-[2px] bg-gray-400 my-2"></div>

      {/* All News Section */}
      <h2 className="text-3xl font-bold text-blue-600 mb-4">All News</h2>
      <ul className="mb-20 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
        {news.map((newsItem) => (
          <li
            key={newsItem.id}
            className="flex items-center bg-gray-300 p-4 rounded-lg shadow-sm hover:scale-105 transition-transform hover:shadow-lg"
          >
            {/* Left side - Text details */}
            <div className="flex-1">
              <p className="text-gray-800 font-medium">{newsItem.title}</p>
              <p className="text-gray-600 text-sm">{newsItem.date}</p>
            </div>

            {/* Right side - Image */}
            {newsItem.newsUrl && (
              <div className="ml-4">
                <img
                  src={newsItem.newsUrl}
                  alt="news-image"
                  className="w-16 h-16 rounded-full"
                />
              </div>
            )}

            {/* Remove button */}
            <button
              onClick={() => handleRemoveEvent(newsItem.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 ml-4"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ManageNews;

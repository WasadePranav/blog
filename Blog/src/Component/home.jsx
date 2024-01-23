import React, { useState } from 'react';


const Home= () => {
    const [bloggerName, setBloggerName] = useState('');
    const [blogTitle, setBlogTitle] = useState('');
    const [blogContent, setBlogContent] = useState('');
    const [postedBlog, setPostedBlog] = useState(null);
  
    const postBlog = () => {
      const newBlog = {
        bloggerName,
        blogTitle,
        blogContent,
      };
      setPostedBlog(newBlog);
      setBloggerName('');
      setBlogTitle('');
      setBlogContent('');
    };
  
    return (
        <div  style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2015/12/29/14/51/mountains-1112911_1280.jpg")' }} className=''>
      <div className="container  " style={{ backgroundImage: 'url("https://img.freepik.com/free-photo/blue-surface-with-study-tools_23-2147864592.jpg")' }}>
        <h1 className="text-3xl font-bold mb-10 "> Create Your Blog</h1>
  
        <div className="mb-4">
          <label htmlFor="bloggerName" className="block text-sm font-medium text-gray-700 mb-1 text-xl">
            Name of Blogger
          </label>
          <input
            type="text"
            id="bloggerName"
            value={bloggerName}
            onChange={(e) => setBloggerName(e.target.value)}
            className="p-2 border rounded-md w-full bg-gray-300"
          />
        </div>
  
        <div className="mb-4">
          <label htmlFor="blogTitle" className="block text-sm font-medium text-gray-700 mb-1 text-xl">
            Title
          </label>
          <input
            type="text"
            id="blogTitle"
            value={blogTitle}
            onChange={(e) => setBlogTitle(e.target.value)}
            className="p-2 border rounded-md w-full bg-gray-300"
          />
          
        </div>
  
        <div className="mb-4">
          <label htmlFor="blogContent" className="block text-sm font-medium text-gray-700 mb-1 text-xl">
            Content
          </label>
          <textarea
            id="blogContent"
            value={blogContent}
            onChange={(e) => setBlogContent(e.target.value)}
            rows="4"
            className="p-2 border rounded-md w-full bg-gray-300"
          ></textarea>
        </div>
  
        <button
          type="button"
          onClick={postBlog}
          className="bg-blue-500 text-white py-2 px-4 rounded-md mb-4 active:bg-blue-800 hover:bg-black transition duration-300"
        >
          Post Blog
        </button>
  
        {postedBlog && (
          <div className="blog-post  " >
            <h2 className="text-xl font-semibold mb-2">{postedBlog.blogTitle}</h2>
            <p className="text-gray-600 mb-4">By: {postedBlog.bloggerName}</p>
            <p>{postedBlog.blogContent}</p>
          </div>
        )}
      </div>
      </div>
    );
  };
  
  export default Home;

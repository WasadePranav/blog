import React, { useState } from 'react';


const Home = () => {

    const [imageURL, setImageURL] = useState('');
  const [postedImage, setPostedImage] = useState('');

  

    
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [searchTitle, setSearchTitle] = useState('');
    const [searchContent, setSearchContent] = useState('');
  
    const postBlog = () => {
      if (title && content) {
        const newPost = { title, content };
        setPosts([...posts, newPost]);
        setPostedImage(imageURL);
        setTitle('');
        setContent('');
      }
    };

    
  
    const searchBlogs = () => {
      
      console.log('Search Title:', searchTitle);
      console.log('Search Content:', searchContent);
    };
  
    return (
      <div className="container mx-auto p-4">
       
        <div className="flex flex-wrap justify-between items-center mb-8 search-bar p-4 rounded-md">
          <div className="flex flex-wrap">
            <input
              type="text"
              placeholder="Search by Title"
              value={searchTitle}
              onChange={(e) => setSearchTitle(e.target.value)}
              className="p-2 border rounded-lg w-40  w-48"
            />
            <input
              type="text"
              placeholder="Search by Content"
              value={searchContent}
              onChange={(e) => setSearchContent(e.target.value)}
              className="p-2 border-l-0 rounded-r-md w-40  w-48 rounded-lg"
            />
          </div>
          <button
            type="button"
            onClick={searchBlogs}
            className="bg-black text-white py-2 px-4 rounded-md  hover:bg-red-900 "
          >
            Search
          </button>
        </div>
  
        {/*code for  blog Form */}
        <div className="max-w-lg mx-auto bg-white p-8 rounded shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-grey">Write  a New Blog Post</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 text-xl mt-12 font-bold">Title</label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div className="container mx-auto p-4">
      <div className="mb-4">
        <label htmlFor="imageURL" className="block text-sm font-xl text-gray-700 mb-1 text-xl text-black font-bold ">
          Post Image
        </label>
        <input
          type="text"
          id="imageURL"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
          className="   border rounded-md w-full container mx-auto p-4 flex items-center justify-center  "
        />
      </div>

     
      </div>

            <div>
              <label htmlFor="content" className="  block text-sm font-medium text-gray-700 text-xl font-bold">   Content</label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows="4"
                className="mt-1 p-2 w-full border rounded-md "
              ></textarea>
            </div>
            
            <div>
              <button
                type="button"
                onClick={postBlog}
                
                className="bg-black text-white py-2 px-4 rounded-md w-100 h-500 hover:bg-blue-700 "
              >
                Publish Blog
              </button>
            </div>
          </form>   
        </div>
  
        {/* code for  displaying Blog Posts */}

        {postedImage && (
        <div className="mt-4">
          <p className="font-semibold mb-2">Your Blog:</p >
          <img src={postedImage} alt="Posted" className="max-w-full h-auto rounded-md w-150 md:h-48 flex items-center justify-center" />
        </div>
      )}
        <div className="max-w-2xl mx-auto">
          {posts.map((post, index) => (
            <div key={index} className="bg-white p-4 rounded-md shadow-md mb-4">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600">{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };



export default Home;

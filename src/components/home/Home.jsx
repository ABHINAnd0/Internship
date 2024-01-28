import React, { useState, useEffect } from 'react';
import { Box, Typography, Link, Button } from '@mui/material';
import axios from 'axios';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.error('Error fetching blogs:', error);
      });
  }, []);

  const whenClicked = (blog) => {
    setSelectedBlog(blog);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
      <Box sx={{ width: '100%', backgroundColor: '#fff', padding: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', marginBottom: '20px', borderRadius: '8px' }}>
        <Link component={RouterLink} to="/home" sx={{ textDecoration: 'none', color: '#333', marginRight: '20px' }}>Home</Link>
        <Link component={RouterLink} to="/blogform" sx={{ textDecoration: 'none', color: '#333' }}>Add Blog</Link>
      </Box>
      {blogs.map(blog => (
        <Box key={blog.id} sx={{ width: '100%', maxWidth: '600px', marginBottom: '20px', padding: '20px', backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
          <Typography variant='h6' sx={{ color: '#333', marginBottom: '5px' }}>ID: {blog.id}</Typography>
          <Typography variant='h6' sx={{ color: '#333', marginBottom: '10px' }}>{blog.title}</Typography>
          <Typography variant='body2' sx={{ color: '#666', marginBottom: '20px' }}>{blog.body}</Typography>
          <Button variant='contained' onClick={() => whenClicked(blog)} sx={{ backgroundColor: '#333', color: '#fff' }}>Read More</Button>
        </Box>
      ))}
      {selectedBlog && (
        <Box sx={{ width: '100%', maxWidth: '600px', padding: '20px', backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
          <Typography variant='h4' sx={{ color: '#333', marginBottom: '10px' }}>{selectedBlog.title}</Typography>
          <Typography variant='body1' sx={{ color: '#666', marginBottom: '20px' }}>{selectedBlog.body}</Typography>
          <Link component={RouterLink} to="/home" sx={{ color: '#4285F4', textDecoration: 'none' }}>Back to Blogs</Link>
        </Box>
      )}
    </Box>
  );
}

export default Home;

import React from 'react';
import { Box, Typography, Card, Stack, TextField, TextareaAutosize, Button, Link } from '@mui/material';
import { useNavigate, Link as RouterLink } from 'react-router-dom'

const BlogForm = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f0f0f0' }}>
      <Card sx={{ backgroundColor: '#fff', width: '50%', maxWidth: '500px', padding: '20px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
        <Typography variant='h4' sx={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Add Blog</Typography>
        <Stack spacing={2}>
          <TextField fullWidth label="Blog Name" variant="outlined" />
          <TextField fullWidth label="Author Name" variant="outlined" />
          <TextareaAutosize minRows={7} placeholder="Description" style={{ width: '100%', resize: 'vertical', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant='contained' onClick={() => { navigate('/home') }} sx={{ backgroundColor: '#333', color: '#fff', width: '50%' }}>Submit</Button>
          </Box>
          <Typography variant='body2' sx={{ textAlign: 'center' }}>
            <Link component={RouterLink} to="/home" sx={{ color: '#4285F4', textDecoration: 'none' }}>Cancel</Link>
          </Typography>
        </Stack>
      </Card>
    </Box>
  );
}

export default BlogForm;

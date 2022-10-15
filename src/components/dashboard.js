import React, { useState, useEffect } from 'react';
import './common.css';
import Grid from '@mui/material/Grid';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import Sidebar from './sidebar';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div >
      <Sidebar title='Dashboard'/>
      <div className="page">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Card variant="outlined" sx={{ width: 320,marginBottom:'5%' }}>
              <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
                Shop
              </Typography>
              <IconButton
                variant="plain"
                color="neutral"
                size="sm"
                sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
              >
                <BookmarkAdd />
              </IconButton>
              <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQSkOE5p_tcYDw4DbnlvPJghHrn7ty4prMPUhnN0WF&s"
                  srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
              <Box sx={{ display: 'flex' }}>
                <div>
                  <Typography level="body3">Total price:</Typography>
                  <Typography fontSize="lg" fontWeight="lg">
                    $2,900
                  </Typography>
                </div>
                <Button
                  variant="solid"
                  size="sm"
                  color="primary"
                  sx={{ ml: 'auto', fontWeight: 600 }}
                  onClick={()=>{navigate('/shop');}}
                >
                  Visit
                </Button>
              </Box>
            </Card>
            <Card variant="outlined" sx={{ width: 320 ,marginBottom:'5%' }}>
              <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
                Cart
              </Typography>
              <IconButton
                variant="plain"
                color="neutral"
                size="sm"
                sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
              >
                <BookmarkAdd />
              </IconButton>
              <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
                <img
                  src="https://t3.ftcdn.net/jpg/03/14/84/68/360_F_314846831_5jJsC7Us9obgwMjRDqFhs04dodzvnZvi.jpg"
                  srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
              <Box sx={{ display: 'flex' }}>
                <div>
                  <Typography level="body3">Total price:</Typography>
                  <Typography fontSize="lg" fontWeight="lg">
                    $2,900
                  </Typography>
                </div>
                <Button
                  variant="solid"
                  size="sm"
                  color="primary"
                  sx={{ ml: 'auto', fontWeight: 600 }}
                  onClick={()=>{navigate('/cart');}}

                >
                  Visit
                </Button>
              </Box>
            </Card>
          </Grid>
          <Grid item xs={6}>
          <Card variant="outlined" sx={{ width: 320 ,marginBottom:'5%' }}>
              <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
                Dashboard
              </Typography>
              <IconButton
                variant="plain"
                color="neutral"
                size="sm"
                sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
              >
                <BookmarkAdd />
              </IconButton>
              <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2621/2621084.png"
                  srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
              <Box sx={{ display: 'flex' }}>
                <div>
                  <Typography level="body3">Total price:</Typography>
                  <Typography fontSize="lg" fontWeight="lg">
                    $2,900
                  </Typography>
                </div>
                <Button
                  variant="solid"
                  size="sm"
                  color="primary"
                  sx={{ ml: 'auto', fontWeight: 600 }}
                  onClick={()=>{navigate('/dashboard');}}

                >
                  Visit
                </Button>
              </Box>
            </Card>
            <Card variant="outlined" sx={{ width: 320 }}>
              <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
                Check Out
              </Typography>
              <IconButton
                aria-label="bookmark Bahamas Islands"
                variant="plain"
                color="neutral"
                size="sm"
                sx={{ position: 'absolute', top: '0.5rem', right: '0.5rem' }}
              >
                <BookmarkAdd />
              </IconButton>
              <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
                <img
                  src="https://www.freeiconspng.com/thumbs/credit-card-icon-png/credit-card-black-png-0.png"
                  srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
              <Box sx={{ display: 'flex' }}>
                <div>
                  <Typography level="body3">Total price:</Typography>
                  <Typography fontSize="lg" fontWeight="lg">
                    $2,900
                  </Typography>
                </div>
                <Button
                  variant="solid"
                  size="sm"
                  color="primary"
                  aria-label="Explore Bahamas Islands"
                  sx={{ ml: 'auto', fontWeight: 600 }}
                  onClick={()=>{navigate('/check');}}
                >
                  Visit
                </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
        </div>
      </div>
  );
};

export default Dashboard;


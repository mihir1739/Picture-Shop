import React, { useState, useEffect ,createContext} from 'react';
import './common.css';
import Grid from '@mui/material/Grid';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';
import Sidebar from './sidebar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
var cart = []

function Template({handleClick,number,setCart}) {
    function addtocart(price,id){
        let obj = {
            id : id,
            price : price
        }
        cart.push(obj);
        setCart(cart);
    }
    let price = Math.floor(Math.random() * 10000);
    let id = number;
    return (
      <Card variant="outlined" sx={{ width: 320 }}>
        <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
          Picture - {number + 1}
        </Typography>
        <Typography level="body2">April 24 to May 02, 2021</Typography>
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
            src={`https://robohash.org/tak${number}?100x100`}
            srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
        <Box sx={{ display: 'flex' }}>
          <div>
            <Typography level="body3">Total price:</Typography>
            <Typography fontSize="lg" fontWeight="lg">
              {price}
            </Typography>
          </div>
          <Button
            variant="solid"
            size="sm"
            color="primary"
            aria-label="Explore Bahamas Islands"
            sx={{ ml: 'auto', fontWeight: 600 }}
            onClick={()=>{handleClick();addtocart(price,id);}}
          >
            Buy Now
          </Button>
        </Box>
      </Card>
    );
  }
  


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function Shop(props) {
    let arr = []
    console.log(cart);
    const [open, setOpen] = React.useState(false);
    for (let i = 0; i < 21; i++) {
        arr.push(i);
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    };
    function SnackBar() {
        setOpen(true);
        return (
          <Stack spacing={2} sx={{ width: '100%' }}>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                This is a success message!
              </Alert>
            </Snackbar>
          </Stack>
        );
    }
  return (
    <div >
      <Sidebar title='Shop'/>
      <div className="page">
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Product Added To Cart
            </Alert>
        </Snackbar>
        <Grid container spacing={2}>
          {arr.map((text,ind) => (
            <Template key = {ind} handleClick={SnackBar} number={text} text={ind} setCart={props.func}/>
          )

          )}
        </Grid>
        </div>
      </div>
  );
};

export {Shop , cart}




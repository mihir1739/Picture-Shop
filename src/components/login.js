import * as React from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Typography from '@mui/joy/Typography';
import TextField from '@mui/joy/TextField';
import Button from '@mui/joy/Button';
import Link from '@mui/joy/Link';
import { width } from '@mui/system';
import './common.css';

export default function Login() {
  return (
    <div className="container">
    <CssVarsProvider>
        <Sheet
          sx={{
            width: '40%',
            mx: 'auto', // margin left & right
            my: 6, // margin top & botom
            py: 4, // padding top & bottom
            px: 2, // padding left & right
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: 'sm',
            boxShadow: 'md',
            backgroundColor:'#000000'
          }}
          variant="outlined"
        >
          <div>
            <Typography level="h4" component="h1" sx={{alignSelf:'center',textAlign:'center'}}>
              <b>Welcome!</b>
            </Typography>
            <Typography level="body2" sx={{alignSelf:'center',textAlign:'center'}}>Sign in to continue.</Typography>
          </div>
          <TextField
            // html input attribute
            name="email"
            type="email"
            placeholder="Email"
            sx={{width:'50%',alignSelf:'center'}}
            label="Email"
          />
          <TextField
            name="password"
            type="password"
            placeholder="Password"
            label="Password"
            sx={{width:'50%',alignSelf:'center'}}
          />
          <Button sx={{ mt: 1 ,width:'50%',alignSelf:'center'/* margin top */ }}>Log in</Button>
          <Typography
            endDecorator={<Link href="/sign-up">Sign up</Link>}
            fontSize="sm"
            sx={{ alignSelf: 'center' }}
          >
            Don&apos;t have an account?
          </Typography>
        </Sheet>
      </CssVarsProvider>
    </div>
  );
}

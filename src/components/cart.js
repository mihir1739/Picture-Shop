import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import Sidebar from './sidebar';

import Button from '@mui/joy/Button';


function Cart () {
    let cart = []
    let sum = 0;
    for (let i = 0; i < 7; i++) {
        let obj = {
            id : Math.floor(Math.random() * 10),
            price : Math.floor(Math.random() * 10000)
        }
        sum += obj.price;
        cart.push(obj)    
    }
  return (
    <div >
      <Sidebar title='Cart'/>
      <div className="page">
      <div style={{ height: 400, width: '100%' }}>
      <table>
      <thead>
        <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Cost</th>
        </tr>
      </thead>
      <tbody>
        {cart.map((obj)=> (
            <tr>
                <td>Picture - {obj.id}</td>
                <td><img src={`https://robohash.org/tak${obj.id}?100x100`}/></td>
                <td>{obj.price}</td>
            </tr>
        ))}
        <tr>
                <td>Total</td>
                <td></td>
                <td>{sum}</td>
            </tr>
        </tbody>
      </table>
      <Button
                  variant="solid"
                  size="sm"
                  color="primary"
                  aria-label="Explore Bahamas Islands"
                  sx={{ width:"40%",ml: 'auto', fontWeight: 600 ,backgroundColor:"#898989",margin:"7%"}}
                >
                  Make Payment
                </Button>
    </div>
    </div>
    </div>
  );
};

export default Cart;


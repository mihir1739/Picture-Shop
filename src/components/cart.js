import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';
import Sidebar from './sidebar';
import { cart } from './shop';


const Cart = () => {
    console.log(cart)
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
        </tbody>
      </table>
    </div>
    </div>
    </div>
  );
};

export default Cart;


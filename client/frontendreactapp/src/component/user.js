import React, { useEffect, useState } from 'react';
import { fetchCars } from '../back/api';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

function Users() {
    const [car,setCar]=useState([])
    var cars = [
        { id: 1, name: 'JohnDoe', year: 'Watch, Belt', price: 120 },
        { id: 2, name: 'JaneSmith', year: 'Bag, Shoes', price: 200 },
        { id: 3, name: 'AliceJones', year: 'Ring, Necklace', price: 300 },
      ];
useEffect(()=>{
    fetchCars().then(res=>{
        const formcarupdated=res.data.map(car=>({
            id:car._id,
            name:car.name,
            year:car.year,
            price:car.price

        }))
cars=formcarupdated
setCar(formcarupdated)
    })
},[])

  


  return (
    <>
      <Typography variant="h4" gutterBottom>
        Order Page
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>car ID</TableCell>
              <TableCell>carname</TableCell>
              <TableCell>Items</TableCell>
              <TableCell>roul</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {car.map((car) => (
              <TableRow key={car.id}>
                <TableCell>{car.id}</TableCell>
                <TableCell>{car.name}</TableCell>
                <TableCell>{car.year}</TableCell>
                <TableCell>{car.roul}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Typography variant="h6" align="right" marginTop={2}>
      </Typography>
    </>
  );
}

export default Users;

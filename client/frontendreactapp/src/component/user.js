// import React, { useEffect, useState } from 'react';
// import { fetchCars } from '../back/api';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

// function Users() {
//     const [car,setCar]=useState([])
//     var cars = [
//         { id: 1, username: 'JohnDoe', year: 'Watch, Belt', price: 120 },
//         { id: 2, username: 'JaneSmith', year: 'Bag, Shoes', price: 200 },
//         { id: 3, username: 'AliceJones', year: 'Ring, Necklace', price: 300 },
//       ];
// useEffect(()=>{
//     fetchCars().then(res=>{
//         const formcarupdated=res.data.map(car=>({
//             id:car._id,
//             username:car.username,
//             year:car.year,
//             price:car.price

//         }))
      
// cars=formcarupdated
// setCar(formcarupdated)
//     })
// },[])

  


//   return (
//     <>
//       <Typography variant="h4" gutterBottom>
//         Order Pemail
//       </Typography>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>car ID</TableCell>
//               <TableCell>carusername</TableCell>
//               <TableCell>Items</TableCell>
//               <TableCell>roul</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {car.map((car) => (
//               <TableRow key={car.id}>
//                 <TableCell>{car.id}</TableCell>
//                 <TableCell>{car.username}</TableCell>
//                 <TableCell>{car.year}</TableCell>
//                 <TableCell>{car.roul}</TableCell>

//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//       <Typography variant="h6" align="right" marginTop={2}>
//       </Typography>
//     </>
//   );
// }

// export default Users;


import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Close';
import { useState,useEffect } from 'react';
import { deleteUser, fetchuser, postusers } from '../back/api';
import {
  GridRowModes,
  DataGrid,
  GridToolbarContainer,
  GridActionsCellItem,
  GridRowEditStopReasons,
} from '@mui/x-data-grid';

const roles = ['admin','user'];

const generateRandomId = () => Math.floor(Math.random() * 1000000); // توليد رقم عشوائي كـ ID
const generateRandomuserusername = () => `Trader ${Math.floor(Math.random() * 100)}`; // توليد اسم عشوائي
const generateRandomDate = () => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - Math.floor(Math.random() * 10)); // تعيين تاريخ عشوائي من السنوات الماضية
  return date.toISOString().split('T')[0]; // تحويل التاريخ إلى صيغة string
};
const generateRandomRole = () => roles[Math.floor(Math.random() * roles.length)];

const initialRows = [
  {
    id: generateRandomId(),
    username: generateRandomuserusername(),
    email: 'llol@gmail.com',
    joinDate: generateRandomDate(),
    role: generateRandomRole(),
  },
  {
    id: generateRandomId(),
    username: generateRandomuserusername(),
    email: 'example@example.com',
    joinDate: generateRandomDate(),
    role: generateRandomRole(),
  },
  {
    id: generateRandomId(),
    username: generateRandomuserusername(),
    email: 'example@example.com',
    joinDate: generateRandomDate(),
    role: generateRandomRole(),
  },
  {
    id: generateRandomId(),
    username: generateRandomuserusername(),
    email: 'example@example.com',
    joinDate: generateRandomDate(),
    role: generateRandomRole(),
  },
  {
    id: generateRandomId(),
    username: generateRandomuserusername(),
    email: 'example@example.com',
    joinDate: generateRandomDate(),
    role: generateRandomRole(),
  },
];

function EditToolbar(props) {
  const { setRows, setRowModesModel } = props;

  const handleClick = () => {
  
    
    const id = generateRandomId(); // استخدام الدالة المعرفة generateRandomId بدلاً من randomId
    setRows((oldRows) => [
      ...oldRows,
      { id, username: '', email: '', role: '', joinDate: new Date(), isNew: true }, // إضافة تاريخ افتراضي
    ]);
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'username' },
    }));
  };
  
  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Add record
      </Button>
    </GridToolbarContainer>
  );
}

export default function FullFeaturedCrudGrid() {
  const [user,setUser]=useState([])

      // var users = [
      //     { id: 1, username: 'JohnDoe', year: 'Watch, Belt', price: 120 },
      //     { id: 2, username: 'JaneSmith', year: 'Bag, Shoes', price: 200 },
      //     { id: 3, username: 'AliceJones', year: 'Ring, Necklace', price: 300 },
      //   ];
  useEffect(()=>{
    fetchuser().then(res=>{
          const formcarupdated=res.data.map(user=>({
              id:user._id,
              username:user.username,
              email:user.email,
              role:user.roul
  
          }))
          
        
  // users=formcarupdated
     setRows(formcarupdated); // قم بتحديث rows هنا بعد الجلب

      })
  },[])
  const [rows, setRows] = React.useState(initialRows);
  const [rowModesModel, setRowModesModel] = React.useState({});


// const handleDelete=(id)=>{
//             deleteUser(id).then(()=>{
//               setUser((prevUsers) => prevUsers.filter((user) => user.id !== id));
//             })
//           }



  const handleRowEditStop = (params, event) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  const handleEditClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
    if (editedRow.isNew) {
      setRows(rows.filter((row) => row.id !== id));
    }
  };

  const processRowUpdate = (newRow) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)));
    return updatedRow;
  };

  const handleRowModesModelChange = (newRowModesModel) => {
    setRowModesModel(newRowModesModel);
  };

  const columns = [
    { field: 'username', headeruserusername: 'userusername', width: 180, editable: true },
    {
      field: 'email',
      headeruserusername: 'email',
      type: 'string',
      width: 200,
      align: 'left',
      headerAlign: 'left',
      editable: true,
    },
    
    {
      field: 'role',
      headeruserusername: 'Department',
      width: 220,
      editable: true,
      type: 'singleSelect',
      valueOptions: ['admin', 'user'],
    },
    {
      field: 'actions',
      type: 'actions',
      headeruserusername: 'Actions',
      width: 100,
      cellClassuserusername: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;
  
        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main',
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              classuserusername="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />,
          ];
        }
  
        return [
          <GridActionsCellItem
            icon={<EditIcon />}
            label="Edit"
            classuserusername="textPrimary"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];
  

  return (
    <Box
      sx={{
        height: 500,
        width: '100%',
        '& .actions': {
          color: 'text.secondary',
        },
        '& .textPrimary': {
          color: 'text.primary',
        },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        rowModesModel={rowModesModel}
        onRowModesModelChange={handleRowModesModelChange}
        onRowEditStop={handleRowEditStop}
        processRowUpdate={processRowUpdate}
        slots={{ toolbar: EditToolbar }}
        slotProps={{
          toolbar: { setRows, setRowModesModel },
        }}
      />
    </Box>
  );
}


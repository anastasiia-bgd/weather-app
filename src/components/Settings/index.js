import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import EmptyPage from '../EmptyPage';

const ItemTitle = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  fontSize: '20',
  color: '#dd0f6f',
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  fontSize: '20',
  color: theme.palette.text.secondary,
}));


export default function Settings({ handleOpen, forecasts, theme, handleDelete, handleOpenEditModal }) {
  console.log(forecasts);
  return (
    <>
      {forecasts.length > 0 ? (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6} style={{ marginLeft: "30px" }}>
              {forecasts.map((el) => {
                return <Item key={el.id}>
                  {el.name}
                  <Button color='warning' className='buttonMUI' size='small' onClick={() => handleDelete(el.id)}>Delete</Button>
                  <Button color='secondary' className='buttonMUI' size='small' onClick={handleOpenEditModal}>Edit</Button>
                </Item>
              })}
            </Grid>
          </Grid>
          <Button color='secondary' className='buttonMUI' onClick={handleOpen} variant="outlined" style={{ marginLeft: "30px", marginTop: "20px" }}> Add Chart </Button>
        </Box>
      ) : (
        <Grid container>
          <Grid item xs={12} sm={6} lg={6} style={{ margin: "0 auto" }}>
            <EmptyPage />
            <Button color='secondary' className='buttonMUI' onClick={handleOpen} variant="outlined"> Add Chart </Button>
          </Grid>
        </Grid>
      )
      }
    </>
  );
}



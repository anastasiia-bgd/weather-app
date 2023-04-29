import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import EmptyPage from '../EmptyPage';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';

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

  return (
    <>
      {forecasts.length > 0 ? (
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={4}>
            <Grid item xs={6} style={{ marginLeft: "30px", marginTop: "" }}>
              {forecasts.map((el) => {
                return <Card variant="outlined" sx={{ width: 320 }} key={el.id}>
                  <CardOverflow>
                    <AspectRatio ratio="2">
                      <img
                        src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
                        srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
                        loading="lazy"
                        alt=""
                      />
                    </AspectRatio>
                  </CardOverflow>
                  <Typography level="h2" sx={{ fontSize: 'md', mt: 2 }}>
                    {el.name}
                  </Typography>

                  <Button color='warning' className='buttonMUI' size='small' onClick={() => handleDelete(el.id)}>Delete</Button>
                  <Button color='secondary' className='buttonMUI' size='small' onClick={handleOpenEditModal}>Edit</Button>
                </Card>
              })}
            </Grid>
          </Grid>
          <Button color='secondary' className='buttonMUI' onClick={handleOpen} variant="outlined" style={{ marginLeft: "30px", marginTop: "20px" }}> Add Chart </Button>
        </Box>
      ) : (
        <Grid container>
          <Grid item xs={12} sm={6} lg={6} style={{ margin: "0 auto" }}>
            <EmptyPage />
          </Grid>
        </Grid>
      )
      }
    </>
  );
}



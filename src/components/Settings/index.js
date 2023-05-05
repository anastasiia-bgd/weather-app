import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from "@mui/material";
import EmptyPage from '../EmptyPage';
import { Card as CardMUI } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import LocationCityIcon from '@mui/icons-material/LocationCity';


export default function Settings({ handleOpen, forecasts, theme, handleDelete, handleOpenEditModal, setCurrentId }) {

  const handleEdit = (id) => {
    handleOpenEditModal()
    setCurrentId(id)
  }

  return (
    <div>
      {forecasts.length > 0 ? (
        <>
          <Box sx={{
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
          }}>
            <Typography variant="h2" gutterBottom>Your charts</Typography>
          </Box>
          <Box sx={{
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 2,
            flexWrap: 'wrap',
            marginLeft: '30px',
          }}>
            {forecasts.map((el) => {
              return <CardMUI sx={{ maxWidth: 300 }} key={el.id}>
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    Chart name: {el.name}
                  </Typography>
                  <Typography gutterBottom variant='h6' component='div'>
                    <LocationCityIcon fontSize='small' />
                    {el.forecast?.city.name}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button onClick={() => handleDelete(el.id)} variant='contained' color='secondary' size='small'>
                    Delete
                  </Button>
                  <IconButton aria-label='add to favorites' onClick={() => handleEdit(el.id)}>
                    <EditIcon />
                  </IconButton>
                </CardActions>
              </CardMUI>
              //   return  <div className={style.chart__item}>
              //   <Typography
              //     id="basic-list-demo"
              //     level="body3"
              //     textTransform="uppercase"
              //     fontWeight="lg"
              //     textAlign='center'
              //   >
              //    {el.name}
              //   </Typography>
              //   {/* <List aria-labelledby="basic-list-demo"> */}
              //     <Button onClick={() => handleDelete(el.id)} color='secondary' size='small'>
              //         Delete
              //       </Button>
              //       <IconButton aria-label='add to favorites' onClick={handleOpenEditModal}>
              //         <EditIcon />
              //       </IconButton>
              //   {/* </List> */}
              // </div>
            })}
          </Box>
        </>
      ) : (
        <Grid container>
          <Grid item xs={12} sm={6} lg={6} style={{ margin: "0 auto" }}>
            <EmptyPage />
          </Grid>
        </Grid>
      )
      }
    </div>
  );
}



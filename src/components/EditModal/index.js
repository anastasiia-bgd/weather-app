import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, TextField } from "@mui/material";
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

export default function EditModal({ handleClose, setForecasts, setConfig, config, editModalState, forecasts }) {
    console.log(config);
   const [name, setName] = useState(config.name)
   const [data, setData] = useState('')
   const [type, setType] = useState('')
   const [color, setColor]  = useState('')

//    useEffect(() => {
//     if (config.id === idChart) {
//       setName(config.name);
//       setData(config.typeChart);
//       setType(config.type);
//       setColor(config.color);
//     }
//   }, [config, idChart]);
  

    const handleClick = () => {
        setForecasts((prev) => [...prev, config]);
        handleClose();
    };

    return (
        <div>
            <Modal open={editModalState} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" color="text.secondary">
                        Edit chart
                    </Typography>
                    <Grid container spacing={2} flexDirection="column">
                        <Grid item>
                            <TextField
                                label="Name"
                                fullWidth
                                value={name}
                                variant="outlined"
                                onChange={({target}) => {
                                    setName(target.value);
                                }}
                            />
                        </Grid>
                        <Grid item>
                        <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Data</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={data}
                                    label="Data"
                                    onChange={(e) => {
                                        setConfig((prev) => ({ ...prev, typeChart: e.target.value }));
                                    }}
                                >
                                    <MenuItem value={'temp'}>Tempreture</MenuItem>
                                    <MenuItem value={'humidity'}>Humidity</MenuItem>
                                </Select>
                            </FormControl>
                            </Grid>
                            <Grid item>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={type}
                                    label="Type"
                                    onChange={(e) => {
                                        setConfig((prev) => ({ ...prev, type: e.target.value }));
                                    }}
                                >
                                    <MenuItem value={'line'}>Line</MenuItem>
                                    <MenuItem value={'column'}>Column</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Color</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={color}
                                    label="Color"
                                    onChange={(e) => {
                                        setConfig((prev) => ({ ...prev, color: e.target.value }));
                                    }}
                                >
                                    <MenuItem value={'red'}>Red</MenuItem>
                                    <MenuItem value={'green'}>Green</MenuItem>
                                    <MenuItem value={'yellow'}>Yellow</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" onClick={handleClick}>
                                OK
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}

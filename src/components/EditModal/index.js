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

export default function EditModal({ handleClose, setForecasts, setConfig, config, editModalState, forecasts, currentId }) {

    const [currentForecast, setCurrentForecast] = useState('')

    useEffect(() => {
        setCurrentForecast(forecasts.find((el) => el.id === currentId))
    }, [currentId, forecasts]);

    useEffect(() => {
        setCurrentForecast(currentForecast)
    }, [currentForecast, forecasts])

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'name':
                setCurrentForecast((prev) => ({ ...prev, name: e.target.value }))
                break;
            case 'typeChart':
                setCurrentForecast((prev) => ({ ...prev, typeChart: e.target.value }))
                break;
            case 'type':
                setCurrentForecast((prev) => ({ ...prev, type: e.target.value }))
                break;
            case 'color':
                setCurrentForecast((prev) => ({ ...prev, color: e.target.value }))
                break;
            default:
                break;
        }
    };

    const handleClick = () => {
        let index = forecasts.findIndex(el => el.id === currentId)
        console.log(index);
        forecasts.splice(index, 1, currentForecast)
        setForecasts(forecasts)
        handleClose()
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
                                name='name'
                                fullWidth
                                value={currentForecast && currentForecast.name}
                                variant="outlined"
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item>
                            <FormControl fullWidth name='typeChart'>
                                <InputLabel id="demo-simple-select-label">Data</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    name='typeChart'
                                    id="demo-simple-select"
                                    value={currentForecast && currentForecast.typeChart}
                                    label="Data"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={'temp'}>Tempreture</MenuItem>
                                    <MenuItem value={'humidity'}>Humidity</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl fullWidth name='type'>
                                <InputLabel id="demo-simple-select-label">Type</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    name='type'
                                    value={currentForecast && currentForecast.type}
                                    label="Type"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={'line'}>Line</MenuItem>
                                    <MenuItem value={'column'}>Column</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl fullWidth name='color'>
                                <InputLabel id="demo-simple-select-label">Color</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    name='color'
                                    id="demo-simple-select"
                                    value={currentForecast && currentForecast.color}
                                    label="Color"
                                    onChange={handleChange}
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

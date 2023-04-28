import React from "react";
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
    height: 500,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
};

export default function EditModal({ handleClose, setForecasts, setConfig, config, editModalState }) {

    const handleClick = () => {
        setForecasts((prev) => [config]);
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
                                value={config.name}
                                variant="outlined"
                                onChange={(e) => {
                                    setConfig((prev) => ({ ...prev, name: e.target.value }));
                                }}
                            />
                        </Grid>
                        <Grid item>
                        <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Index</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={config.type}
                                    label="Index"
                                    onChange={(e) => {
                                        setConfig((prev) => ({ ...prev, typeChart: e.target.value }));
                                    }}
                                >
                                    <MenuItem value={'temp'}>Temprature</MenuItem>
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
                                    value={config.type}
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
                                    value={config.color}
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

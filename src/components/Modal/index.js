import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, TextField } from "@mui/material";
import useDebounce from "../../hooks/useDebounce.js";
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

export default function BasicModal({ modalState, handleClose, setForecasts, config, setConfig }) {
    const { v4: uuidv4 } = require('uuid');
    const [searchText, setSearchText] = useState("");

    const debouncedSearchText = useDebounce(searchText, 1000);

    useEffect(() => {
        if (debouncedSearchText) {
            handleFetch(debouncedSearchText);
        }
    }, [debouncedSearchText]);

    const handleClick = () => {
        setForecasts((prev) => [config, ...prev]);
        handleClose();
    };

    const handleFetch = (location) => {
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=4dbbf70b1cb6ba72b3f175bc70c3a74a`)
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    setConfig((prev) => ({ ...prev, forecast: data }));
                }
            })
            .catch((error) => {
                console.log(error);
            });
        setSearchText("");
    };

    return (
        <div>
            <Modal open={modalState} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" color="text.secondary">
                        Add new chart
                    </Typography>
                    <Grid container spacing={2} flexDirection="column">
                        <Grid item>
                            <TextField
                                fullWidth
                                label="City"
                                variant="outlined"
                                onChange={(e) => {
                                    setSearchText(e.target.value);
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                fullWidth
                                label="Name"
                                variant="outlined"
                                onChange={(e) => {
                                    setConfig((prev) => ({ ...prev, name: e.target.value }));
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <TextField
                                fullWidth
                                label="Type"
                                variant="outlined"
                                onChange={(e) => {
                                    setConfig((prev) => ({ ...prev, type: e.target.value, id: uuidv4()}));
                                }}
                            />
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
                                        setConfig((prev) => ({ ...prev, color: e.target.value}));
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

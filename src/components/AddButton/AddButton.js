import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";

function AddButton({ handleOpen }) {
    const theme = createTheme({
        palette: {
            secondary: {
                main: "#000",
                secondary: "#dd0f6f",
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <div>
                <Button color="secondary" variant="outlined" size="large" onClick={handleOpen}>
                    AddButton
                </Button>
            </div>
        </ThemeProvider>
    );
}

export default AddButton;

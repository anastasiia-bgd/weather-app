import { useState} from "react";
import { Routes, Route } from "react-router-dom";
import './index.css'
import Footer from "./components/Footer/Footer";
import Settings from "./components/Settings";
import { Header } from "./components/Header";
import MainPage from "./components/MainPage";
import Modal from "./components/Modal";
import { createTheme } from "@mui/material/styles";
import EditModal from "./components/EditModal";
import dayjs from 'dayjs';

import DataFilter from "./components/DataFilter"


function App({children}) {
    const theme = createTheme({
        palette: {
            secondary: {
                main: "#000",
                secondary: "#dd0f6f",
            },
        },
    });

    const [location, setLocation] = useState("");
    const [forecast, setForecast] = useState({});
    const [modalState, setModalState] = useState(false);
    const [editModalState, setEditModalState] = useState(false);
    const [forecasts, setForecasts] = useState([]);
    // const [startDate, setStartDate] = useState(dayjs())
    // const [endDate, setEndDate] = useState(setStartDate(startDate.add(5, 'day')))
    const [config, setConfig] = useState({
        name: "",
        type: "",
        color: "",
        id: '',
        typeChart:'',
        forecast: {}
    });



    const handleOpenModal = () => setModalState(true);
    const handleCloseModal = () => setModalState(false);

    const handleOpenEditModal = () => setEditModalState(true);
    const handleCloseEditModal = () => setEditModalState(false);

    const handleDelete =(id) => {
        setForecasts(prevState => prevState.filter(el => el.id !== id))
    }

    return (
        <div className="app">
            <div className="container">
                <Header location={location} setLocation={setLocation} handleOpen={handleOpenModal} />
               
                <Routes>
                    <Route path="/" element={<MainPage forecast={forecast} handleOpen={handleOpenModal} forecasts={forecasts} />} />
                    <Route path="/settings" element={<Settings handleOpen={handleOpenModal} forecasts={forecasts}
                    setConfig={setConfig} theme={theme} handleDelete={handleDelete} handleOpenEditModal={handleOpenEditModal} />} />
                </Routes>
                {/* <Footer data={data} /> */}
                <Modal
                    modalState={modalState}
                    setModalState={setModalState}
                    handleOpen={handleOpenModal}
                    handleClose={handleCloseModal}
                    forecasts={forecasts}
                    setForecasts={setForecasts}
                    setForecast={setForecast}
                    location={location}
                    setLocation={setLocation}
                    config={config}
                    setConfig={setConfig}
                />
                <EditModal 
                config={config} 
                setConfig={setConfig}
                setForecasts={setForecasts}
                editModalState={editModalState} 
                setEditModalState={setEditModalState}
                handleOpen={handleOpenEditModal}
                handleClose={handleCloseEditModal}
                />
            </div>
        </div>
    );
   
}

export default App;
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Settings from "./components/Settings";
import { Header } from "./components/Header";
import MainPage from "./components/MainPage";
import Modal from "./components/Modal";
import { createTheme } from "@mui/material/styles";
import EditModal from "./components/EditModal";
import './index.css'


function App() {
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
    const [config, setConfig] = useState({
        name: "",
        type: "",
        color: "",
        id: '',
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
                <Header location={location} setLocation={setLocation} />
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

//   const handleChangeSearchInput = (value) => {
//     setSearchQuery(value);
// };

// const search = (searchQuery) => {
//     return fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=4dbbf70b1cb6ba72b3f175bc70c3a74a`)
//     .then ((res) => {
//       return res.ok ? res.json() : Promise.reject(`Ошибка : ${res.status}`);
//   });
//   } // отправка запроса с данными из инпута

// useEffect(() => {
//   search(searchQuery).then((response) => setData(response))
// }
// ,[searchQuery])

// const [lat, setLat] = useState('')
// const [lon, setLon] = useState('')

// const urlCity = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=4dbbf70b1cb6ba72b3f175bc70c3a74a`// прогноз
// const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=10.99&cnt=3&appid=4dbbf70b1cb6ba72b3f175bc70c3a74a`// //прогноз
// const urlForecast= `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4dbbf70b1cb6ba72b3f175bc70c3a74a`

// console.log(forecast.list[1].main.temp);
// console.log(forecast.list.map(el=>{
//   return el.main.temp
// }));

// const searchLocation = async (event) => {
//     const response = await fetch(urlCity)
//     let fetchedData = await response.json()
//       setData(fetchedData)
//     console.log(data);
//     setLocation('')
// }

// useEffect(() => {
//   fetch(urlForecast)
//     .then((res) => {
//       return res.json()
//     })
//     .then((json) => {
//       // console.log(json);
//       setForecast(json)
//     })
// },[])

// console.log(data[0].lat);
// const searchCity =
// fetch(url)
// .then((res) => {
//   return res.json()
// })
// .then((json) => {
//   console.log(json);
//   // setData(json);
// })
//  const handleInputKeyDown = (event) => {
//     if (event.key === 'Enter') {
//       handleFetch();
//     }
//   };

//   useEffect(() => {
//     localStorage.setItem("forecast", JSON.stringify(forecast));
// }, [forecast])

// const handleInputChange = (event) => {
//   setLocation(event.target.value);
//  };
//  console.log(forecast);

// const handleFetch = () => {
//   fetch(urlForecast)
//     .then(response => response.json())
//     .then(data => {
//       setForecast(data)
//       console.log(data);
//     })
//     .catch(error => {
//      console.log(error)
//     });
// };

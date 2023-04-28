import {Grid} from "@mui/material";
import React, { useEffect, useState } from "react";
import Chart from "../Chart/index.";
import Empty from "../EmptyPage";


export default function MainPage({ forecasts }) {
// console.log(forecasts);

    const [data, setData] = useState([]);

    useEffect(() => {
        setData(forecasts);
    }, [forecasts]);

    return (
        <>
            {data.length > 0 ? (
                data.map((el) => (
                    <Grid item key={el.id} xs={12} sm={6} lg={6} style={{ marginLeft: "30px", marginRight: "30px" }} >
                        {el.forecast?.city?.name}
                        <Grid item style={{ margin: "0 auto" }}>
                            <Chart forecast={el.forecast} type={el.type} name={el.name} color={el.color} typeChart={el.typeChart} />
                        </Grid>
                    </Grid>
                ))
            ) : (
                <Grid container>
                    <Grid item xs={12} sm={6} lg={6} style={{ margin: "0 auto" }}>
                        <Empty />
                    </Grid>
                </Grid>
            )}
        </>
    );
}



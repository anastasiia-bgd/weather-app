import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import accessibility from "highcharts/modules/accessibility";
import exporting from "highcharts/modules/exporting";
import style from './style.module.css'
import { useState } from "react";

exporting(Highcharts);
accessibility(Highcharts);

export default function Chart({ forecast, type, name, color}) {
    const [dataChart, setDataChart] = useState()

    let options = {
        chart: {
            type: `${type}`, 
            
        },
        title: {
            text: `${name}`,
        },
        xAxis: {
            categories: forecast.list?.map((el) => {
                return el.dt_txt;
            }),
        },
        yAxis: {
            title: {
                text: "°C",
            },
        },
        series: [
            {
                name: "temp",
                data: forecast.list?.map((el) => {
                    return `el.main.${dataChart}`;
                }),
                color: `${color}`,
            },
        ],
    };

    return (
        <div className={style.charts}>
                <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
}

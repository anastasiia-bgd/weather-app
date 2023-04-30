import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import accessibility from "highcharts/modules/accessibility";
import exporting from "highcharts/modules/exporting";
import style from './style.module.css'
import dayjs from 'dayjs';

exporting(Highcharts);
accessibility(Highcharts);

export default function Chart({ forecast, type, name, color, typeChart }) {

    let options = {
        chart: {
            type: `${type}`,

        },
        title: {
            text: `${name}`,
        },
        xAxis: {
            categories: forecast.list?.map((el) => {
                let date = el.dt_txt;
                return dayjs(date).format("DD/MM/YYYY");
            }),
        },
        yAxis: {
            title: {
                text: typeChart === 'temp' ? "°C" : "φ"
            },
        },
        series: [
            {
                name: "data",
                data: forecast.list?.map((el) => {
                    if (typeChart === 'temp') {
                        return el.main.temp
                    }
                    return el.main.humidity
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
// "°C" "φ"
import React from 'react'
import style from './style.module.css'

export const ChartList = ({forecasts}) => {
    return (
        <div className={style.chartListContainer}>
            {forecasts?.map(chart => (
                <Settings className={style.chart} key={chart._id}
                    chart={chart}
                />))}
        </div>
    )
}

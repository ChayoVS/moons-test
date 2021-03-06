import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';


const ChartDoughnut = () => {
    const [charData, setCharData] = useState({})

    const chart = () => {
        setCharData({
            datasets : [
                {
                    data: [80, 120],
                    backgroundColor: [
                        'rgba(80, 90, 192, 0.6)',
                        'rgba(75, 192, 192, 0.6)'
                    ],
                }
            ]
        })
    }

    useEffect(() => {
        chart()
    }, [])

    return (
            <div>
                <Doughnut
                data= {charData}
                options = {{
                    cutoutPercentage: 90
                }}
                />
            </div>
    )
}

export default ChartDoughnut;

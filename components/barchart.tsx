import {useEffect, useRef} from "react";
import {Chart} from "chart.js/auto";
import {BarElement, ChartData, ChartDataset, Plugin} from "chart.js";
import "chartjs-plugin-datalabels";
interface BarChartProps {
    datalist: any[];
}

export const BarChart: React.FC<BarChartProps> = ({datalist}) => {
    const chartRef: any = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            if (chartRef.current.chart) {
                const currentChart = chartRef.current.chart;
                currentChart.config.data.datasets[0].data = datalist;
                currentChart.config.data.datasets[0].datalabels = {
                    display: false,
                };
                // datalist.forEach((newData) => {
                //     const existingDataIndex = currentData.findIndex(
                //         (data: any) =>
                //             data.country_name === newData.country_name
                //     );
                //     if (existingDataIndex !== -1) {
                //         // Update existing data
                //         currentData[existingDataIndex].population =
                //             newData.population;
                //     } else {
                //         // Add new data
                //         currentData.push(newData);
                //     }
                // });

                // // Remove data points not present in new datalist
                // currentData.forEach((dataPoint:any, index:number) => {

                //     const countryExists = datalist.some(
                //         (newData) => dataPoint.country_name === newData.country_name
                //     );

                //     if (!countryExists) {

                //         currentData.splice(index, 1);
                //     }
                // });
                // currentData.sort((a: any, b: any) => {
                //     a.population - b.population;
                // })
                currentChart.config.options.scales.x.max =
                    datalist[0]?.population * 1.1;
                currentChart.update()
            } else {
                const ctx = chartRef.current.getContext("2d");

                const newChart: Chart = new Chart(ctx, {
                    type: "bar",
                    data: {
                       datasets: [
                            {
                                data: datalist,
                            },
                        ],
                    },
                    options: {
                        responsive: true,
                        resizeDelay: 500,
                        animation: {
                            duration: 1000,
                            easing: "linear",
                            onProgress: function () {
                                var chartInstance = this,
                                    ctx = chartInstance.ctx;
                                ctx.textAlign = "left";
                                ctx.textBaseline = "middle";
                                this.data.datasets.forEach(function (
                                    dataset,
                                    i
                                ) {
                                    var meta = chartInstance.getDatasetMeta(i);

                                    meta.data.forEach(function (
                                        bar: any,
                                        index
                                    ) {
                                        var data: any = dataset?.data[index];

                                        var x = bar.x + 5;
                                        var y = bar.y;
                                        const popStr = Number(data.population).toLocaleString();
                                        ctx.fillText(popStr, x, y);
                                    });
                                });
                            },
                        },
                        indexAxis: "y",
                        parsing: {
                            yAxisKey: "country_name",
                            xAxisKey: "population",
                        },
                        scales: {
                            x: {
                                type: "linear",
                                display: true,
                                grid: {
                                    display: true,
                                },
                                
                                max: datalist[0]?.population * 1.1,
                                ticks: {
                                    stepSize:100000000,
                                    display: true,
                                    callback: function (value, index, ticks) {
                                        return typeof value == "number"
                                            ? Math.floor(value / 1000000) + "M"
                                            : value;
                                    },
                                },
                            },
                            y: {
                                display: true,
                                grid: {
                                    display: false,
                                },
                            },
                        },
                        plugins: {
                            title: {
                                display: true,
                                text: "World Population Ranking 1950 - 2021",
                            },
                        },
                    },
                });
                chartRef.current.chart = newChart;
            }
        }
    }, [datalist]);

    return (
        <div>
            <canvas style={{width: "100%"}} ref={chartRef} />
        </div>
    );
};

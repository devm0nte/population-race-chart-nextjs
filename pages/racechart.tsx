import {BarChart} from "@/components/barchart";
import {RacingBarChart} from "@/components/barchart-d3";
import LegendButton from "@/components/legendButton";
import {TimelineBar} from "@/components/timelinebar";
import {regionType} from "@/data/type";
import {ResponseData, getRandomColor} from "@/lib/api.utils";
import React, {useEffect, useState} from "react";
import cacheFile from "@/data/cachePopulation.json";
import {HashLoader} from "react-spinners";

const RaceChart = () => {
    const [chartData, setChartData] = useState<any[]>([]);
    const [currentYear, setCurrentYear] = useState<number>(1950);
    const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
    const [isPlaying, setIsPlaying] = useState<boolean>(true);
    const [regionColor, setRegionColor] = useState<any[]>();
    const [loading, setLoading] = useState<boolean>(false);
    const [parentActiveLegends, setParentActiveLegends] = useState<string[]>(
        []
    );
    const cacheData: any = cacheFile;

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            const response = await fetch("/api/population/year?take=0", {
                method: "GET",
            });
            return response.json();
        };
        getData()
            .then((data: ResponseData) => {
                setLoading(false);
                setChartData(data.data);
            })
            .catch((error) => {
                setLoading(false);
                alert("CAN NOT CONNECT TO DB, Using Cache file");
                setChartData(cacheData.data);
            });

    }, []);
    useEffect(() => {
        setRegionColor(
            regionType.map((region) => {
                let color = "#808080";
                switch (region) {
                    case "Asia":
                        color = "#1D6996";
                        break;
                    case "Europe":
                        color = "#EDAD08";
                        break;
                    case "Africa":
                        color = "#73AF48";
                        break;
                    case "Oceania":
                        color = "#94346E";
                        break;
                    case "Americas":
                        color = "#38A6A5";
                        break;
                    default:
                        break;
                }
                return {name: region, color: color};
            })
        );
    }, []);

    useEffect(() => {
        const addYearInterval = () => {
            const intervalID: NodeJS.Timeout = setInterval(() => {
                setCurrentYear((prev) => {
                    if (prev == 2021) {
                        setIsPlaying(false);
                    }
                    return prev < 2021 ? prev + 1 : prev;
                });
            }, 500);
            setIntervalId(intervalID);
        };
        if (isPlaying && chartData.length > 0) {
            addYearInterval();
        } else {
            clearInterval(intervalId);
        }
        return () => clearInterval(intervalId);
    }, [isPlaying, chartData]);

    const handlePlayBtn = () => {
        setIsPlaying((prevState) => {
            return !prevState;
        });
        if (currentYear >= 2021) {
            setCurrentYear(1950);
        }
    };

    const mapRegionTypeColor = (regionName: string) => {
        const result = regionColor?.find(
            (region) => region.name === regionName
        );
        return result.color || "#000000";
    };

    const formatChartDataByYear = (data: any[], year: number): any[] => {
        if (!data.length) return [];
        const objIdx = data.findIndex((data) => data.year === year);

        if (objIdx >= 0) {
            const chartDataList: any[] = [];

            for (
                let index = 0;
                index < data[objIdx].countries.length;
                index++
            ) {
                const country = data[objIdx].countries[index];
                country.color = mapRegionTypeColor(country.region);
                if (chartDataList.length > 10) {
                    break;
                }
                if (parentActiveLegends.includes(country.region)) {
                    chartDataList.push(country);
                }
            }
            return chartDataList;
        }
        return [];
    };

    const onYearChanged = (year: number) => {
        setCurrentYear(year);
    };

    const handleActiveLegendsChange = (activeLegends: string[]) => {
        setParentActiveLegends(activeLegends);
    };

    return (
        <>
            <div
                style={{textAlign: "center"}}
                className="w-full h-full text-center"
            >
                {loading ? (
                    <div className="absolute top-1/2 left-1/2">
                        <HashLoader
                            size={100}
                            loading={loading}
                            className="spinner-container"
                            color="#36d7b7"
                        />
                    </div>
                ) : (
                    <>
                        <h1 className="font-bold text-3xl p-4">
                            World Population Ranking 1950 - 2021
                        </h1>

                        <div className="w-full h-full mx-auto rounded text-center">
                            {/* <BarChart
                        datalist={formatChartDataByYear(chartData, currentYear)}
                    /> */}
                            <LegendButton
                                onActiveLegendsChange={
                                    handleActiveLegendsChange
                                }
                            />
                            <RacingBarChart
                                data={formatChartDataByYear(
                                    chartData,
                                    currentYear
                                )}
                            />
                            <div className="w-full" style={{minWidth: "800px"}}>
                                <TimelineBar
                                    year={currentYear}
                                    onYearChange={onYearChanged}
                                />
                                <div className="flex justify-center text-center m-12 px-60">
                                    <div className="flex-auto">
                                        <button
                                            className={
                                                isPlaying
                                                    ? "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                                    : currentYear >= 2021
                                                    ? "bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded"
                                                    : "bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                                            }
                                            onClick={handlePlayBtn}
                                        >
                                            {isPlaying
                                                ? "PLAYING"
                                                : currentYear >= 2021
                                                ? "REPLAY"
                                                : "PAUSED"}
                                        </button>
                                    </div>
                                    <div className="flex-auto">
                                        <h1 className="text-5xl font-black">
                                            {currentYear}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default RaceChart;

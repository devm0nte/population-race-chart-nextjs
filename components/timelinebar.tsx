import React, {useEffect, useState} from "react";

interface TimelineBarProps {
    year: number;
    onYearChange: (newYear: number) => void;
}

export const TimelineBar: React.FC<TimelineBarProps> = ({
    year,
    onYearChange,
}) => {
    const [progress, setProgress] = useState(0);
    const [isDragging, setDragging] = useState(false);

    const startYear = 1950;
    const endYear = 2021;
    useEffect(() => {
        const updateProgress = (currentYear: number) => {
            const yearsPassed = currentYear - startYear;
            const totalYears = endYear - startYear; 
            const percentage = (yearsPassed / totalYears) * 100;

            setProgress(percentage);
        };

        updateProgress(year);
    }, [year]);

    const handleChangeYearBar= (event: React.MouseEvent<HTMLDivElement>) => {

        const barWidth = event.currentTarget.clientWidth;
        const clickX =
            event.clientX -
            event.currentTarget.getBoundingClientRect().left;
        const newProgress = (clickX / barWidth) * 100;

        if (newProgress >= 0 && newProgress <= 100) {
            setProgress(newProgress);
            const newYear = Math.round(
                (newProgress / 100) * (endYear - startYear) + startYear
            );
            onYearChange(newYear);
        }
    };


    return (
        <div className="mt-12 mx-12">
            <div
                className="relative h-5 bg-gray-300 rounded-md mx-5"
                onClick={handleChangeYearBar}
            >
                <div className="flex justify-between absolute px-2 top-4 left-0 w-full transform -translate-y-0 text-md font-bold text-black">
                    <span>{startYear}</span>
                    <span>{endYear}</span>
                </div>
                <div
                    className="bg-cyan-200 h-full transition-all duration-500 ease-linear rounded-md"
                    style={{width: `${progress}%`}}
                ></div>
                <div
                    style={{left: `${progress}%`,  backgroundColor: `${isDragging? "gray" : "rgb(103 232 249)" }`}}
                    className="disabled cursor-not-allowed z-1000 marker transition-all duration-500 ease-linear absolute top-100 transform -translate-x-1/2 -translate-y-full font-bold bg-cyan-500 text-white p-2 rounded-md"
                >
                    {year}
                </div>
            </div>
        </div>
    );
};

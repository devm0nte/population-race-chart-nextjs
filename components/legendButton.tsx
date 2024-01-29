import React, {useEffect, useState} from "react";

interface LegendData {
    [key: string]: string;
}

interface LegendButtonProps {
    onActiveLegendsChange: (activeLegends: string[]) => void;
}

const LegendButton: React.FC<LegendButtonProps> = ({onActiveLegendsChange}) => {
    const [activeLegends, setActiveLegends] = useState<string[]>([
        "Africa",
        "Americas",
        "Asia",
        "Europe",
        "Oceania",
    ]);

    useEffect(() => {
        onActiveLegendsChange(activeLegends);
    }, [activeLegends, onActiveLegendsChange]);

    const handleButtonClick = (region: string) => {
        if (activeLegends.includes(region)) {
            if (activeLegends.length > 1) {
                setActiveLegends(
                    activeLegends.filter(
                        (activeRegion) => activeRegion !== region
                    )
                );
            }
        } else {
            setActiveLegends([...activeLegends, region]);
        }
        onActiveLegendsChange(activeLegends);
    };

    const legendData: LegendData = {
        Africa: "#73AF48",
        Americas: "#38A6A5",
        Asia: "#1D6996",
        Europe: "#EDAD08",
        Oceania: "#94346E",
    };

    return (
        <div>
            <div>
                {Object.entries(legendData).map(([region, color]) => (
                    <button
                        key={region}
                        className={`rounded text-white font-bold`}
                        style={{
                            backgroundColor: `${
                                activeLegends.includes(region)
                                    ? color + "90"
                                    : "gray"
                            }`,
                            margin: "5px",
                            padding: "10px",
                            cursor: "pointer",
                        }}
                        onClick={() => handleButtonClick(region)}
                    >
                        {region}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default LegendButton;

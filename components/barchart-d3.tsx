import React, {useRef, useEffect, useState} from "react";
import {select, scaleBand, scaleLinear, max, axisBottom, axisTop} from "d3";
import {getRandomColor} from "@/lib/api.utils";

interface RacingBarChartProps {
    data: {
        country_name: string;
        region: string;
        flag: string;
        population: number;
    }[];
}

export function RacingBarChart({data}: RacingBarChartProps) {
    const svgRef = useRef<SVGSVGElement | null>(null);
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const [activeLegends, setActiveLegends] = useState<string[]>([]);

    const width = wrapperRef.current?.clientWidth || 800;
    const height = 500;
    const marginTop = 30;
    const marginRight = 40;
    const marginBottom = 30;
    const marginLeft = 40;
    const nameWidth = 150;

    useEffect(() => {
        const svg = select(svgRef.current);
        const wrapper = wrapperRef.current;

        if (!svg || !wrapper) return;
        svg.attr("height", height)
            .attr("viewBox", [0, 0, width, height])
            .attr("style", `width: 80%; min-width: 1000px; height: auto; `);

        const yScale = scaleBand()
            .paddingOuter(0.5)
            .paddingInner(0.1)
            .domain(
                data.map((d, index) => {
                    return index.toString();
                })
            )
            .range([0, height]);

        const xScale = scaleLinear()
            .domain([0, max(data, (d) => d.population) || 0])
            .range([0, width - nameWidth - 120]);

        const circleRadius = yScale.bandwidth() / 2;

        // draw the bars
        svg.selectAll(".bar")
            .data(data, (d: any, index) => d.country_name)
            .join((enter) =>
                enter
                    .append("rect")
                    .attr("y", (d, index) => yScale(index.toString()) || 0)
            )
            .attr("fill", (d: any) => d.color + "90")
            .attr("stroke", (d: any) => d.color)
            .attr("class", "bar")
            .attr("x", nameWidth)
            .attr("height", yScale.bandwidth())
            .transition("linear")
            .attr("width", (d) => xScale(d.population) || 0)
            .attr("y", (d, index) => yScale(index.toString()) || 0);

        // draw the labels
        svg.selectAll(".label")
            .data(data, (d: any, index) => d.country_name)
            .join((enter) =>
                enter.append("text").attr("y", (d, index) => {
                    return (
                        (yScale(index.toString()) || 0) +
                            (yScale.bandwidth() / 2 + 5) || 0
                    );
                })
            )
            .text((d) => `${d.country_name}`)
            .attr("class", "label")
            .attr("x", 20)
            .attr("width", nameWidth)
            .transition("linear")
            .attr(
                "y",
                (d, index) =>
                    (yScale(index.toString()) || 0) +
                        yScale.bandwidth() / 2 +
                        5 || 0
            );
        // ADD VALUE LABEL
        svg.selectAll(".label-value")
            .data(data, (d: any, index) => d.country_name)
            .join((enter) =>
                enter
                    .append("text")
                    .attr(
                        "y",
                        (d, index) =>
                            (yScale(index.toString()) || 0) +
                                yScale.bandwidth() / 2 +
                                5 || 0
                    )
                    .attr("class", "label-value")
                    .attr("x", (d) => nameWidth + xScale(d.population) + 10)
            )
            .text((d) => `${d.population.toLocaleString()}`)
            .transition("linear")
            .duration(500)
            .attr(
                "y",
                (d, index) =>
                    (yScale(index.toString()) || 0) +
                        yScale.bandwidth() / 2 +
                        5 || 0
            )
            .attr("x", (d) => nameWidth + xScale(d.population) + 10);

        svg.selectAll(".circle-icon")
            .data(data, (d: any, index) => d.country_name)
            .join((enter) =>
                enter
                    .append("circle")
                    .attr("class", "circle-icon")
                    .attr(
                        "cy",
                        (d, index) =>
                            (yScale(index.toString()) || 0) +
                                yScale.bandwidth() / 2 || 0
                    )
                    .attr("cx", nameWidth + circleRadius + 5)
                    .attr("r", circleRadius - 2)
                    .attr(
                        "fill",
                        (d: any) =>
                            `url(#${d.country_name
                                .replace(/\s/g, "_")
                                .toLowerCase()}-image)`
                    )
            )
            .transition("linear")
            .duration(500)
            .attr(
                "cy",
                (d, index) =>
                    (yScale(index.toString()) || 0) + yScale.bandwidth() / 2 ||
                    0
            )
            .attr("cx", nameWidth + circleRadius + 5);
        const defs = svg.append("defs");
        data.forEach((d) => {
            defs.append("pattern")
                .attr(
                    "id",
                    `${d.country_name.replace(/\s/g, "_").toLowerCase()}-image`
                )
                .attr("height", 1)
                .attr("width", 2)
                .attr("x", "0")
                .attr("y", "0")
                .append("image")
                .attr("xlink:href", d.flag)
                .attr("height", yScale.bandwidth())
                .attr("width", yScale.bandwidth())
                .attr("clip-path", "circle(" + circleRadius + "px)");
        });
    }, [activeLegends, data]);

    return (
        <div
            className="chart-container mx-10"
            ref={wrapperRef}
            style={{marginBottom: "2rem", width: "100%", height: "100%"}}
        >
            <svg ref={svgRef}></svg>
        </div>
    );
}

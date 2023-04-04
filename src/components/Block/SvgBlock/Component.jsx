import { NodeViewWrapper } from "@tiptap/react";
import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import { exampleData } from "./ExampleData";

const Paper = ({ editor, node }) => {
  //draws chart
  const svgContainer = useRef();
  useEffect(() => {
    const data = exampleData.map((d) => {
      return {
        date: d3.timeParse("%Y-%m-%d")(d.date),
        value: d.value,
      };
    });
    const margin = { top: 10, right: 30, bottom: 30, left: 60 },
      width = 460 - margin.left - margin.right,
      height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    const svg = d3
      .select(svgContainer.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3
      .scaleTime()
      .domain(
        d3.extent(data, function (d) {
          return d.date;
        })
      )
      .range([0, width]);
    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x));

    // Add Y axis
    const y = d3
      .scaleLinear()
      .domain([
        0,
        d3.max(data, function (d) {
          return +d.value;
        }),
      ])
      .range([height, 0]);
    svg.append("g").call(d3.axisLeft(y));

    // Add the line
    svg
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr(
        "d",
        d3
          .line()
          .x(function (d) {
            return x(d.date);
          })
          .y(function (d) {
            return y(d.value);
          })
      );
  }, []);

  return (
    <NodeViewWrapper className="w-full h-full flex items-center justify-end group my-3">
      <div className="w-16/20 mr-10" ref={svgContainer}></div>
    </NodeViewWrapper>
  );
};

export default Paper;

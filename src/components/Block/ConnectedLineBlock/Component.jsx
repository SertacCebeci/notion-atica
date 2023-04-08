import { NodeViewWrapper } from "@tiptap/react";
import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

import { ConnectedLineExample } from "@/components/Block/ConnectedLineBlock/example";
import SideActions from "@/components/BlockSideActions/SideActions";
import TooltipLayer from "./Layers/TooltipLayer";
import AnnotationTooltip from "./Layers/AnnotationTooltip";
//import AnnotationLayer from "./Layers/AnnotationLayer";

const Component = (props) => {
  const svgContainer = useRef();
  useEffect(() => {
    const data = ConnectedLineExample;

    var allGroup = ["valueA", "valueB", "valueC"];

    const dataReady = allGroup.map(function (grpName) {
      // .map allows to do something for each element of the list
      return {
        name: grpName,
        values: data.map(function (d) {
          return { time: d.time, value: +d[grpName] };
        }),
      };
    });

    const margin = { top: 10, right: 30, bottom: 30, left: 60 },
      width = 600 - margin.left - margin.right,
      height = 450 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    const svg = d3
      .select(svgContainer.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    const { mouseover, mousemove, mouseleave } = TooltipLayer(svgContainer);
    //AnnotationLayer(svgContainer);

    const myColor = d3.scaleOrdinal().domain(allGroup).range(d3.schemeSet2);

    // Add X axis --> it is a date format
    const x = d3.scaleLinear().domain([0, 10]).range([0, width]);
    svg
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x));

    // Add Y axis
    const y = d3.scaleLinear().domain([0, 20]).range([height, 0]);
    svg.append("g").call(d3.axisLeft(y));

    // Add the lines
    const line = d3
      .line()
      .x((d) => x(+d.time))
      .y((d) => y(+d.value));
    svg
      .selectAll("myLines")
      .data(dataReady)
      .join("path")
      .attr("class", (d) => d.name)
      .attr("d", (d) => line(d.values))
      .attr("stroke", (d) => myColor(d.name))
      .style("stroke-width", 4)
      .style("fill", "none");

    // Add the points
    svg
      // First we need to enter in a group
      .selectAll("myDots")
      .data(dataReady)
      .join("g")
      .style("fill", (d) => myColor(d.name))
      .attr("class", (d) => d.name)
      // Second we need to enter in the 'values' part of this group
      .selectAll("myPoints")
      .data((d) => d.values)
      .join("circle")
      .attr("cx", (d) => x(d.time))
      .attr("cy", (d) => y(d.value))
      .attr("r", 5)
      .attr("stroke", "white")
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave)
      .on("click", (d) => console.log(d));

    // Add a label at the end of each line
    svg
      .selectAll("myLabels")
      .data(dataReady)
      .join("g")
      .append("text")
      .attr("class", (d) => d.name)
      .datum((d) => {
        return { name: d.name, value: d.values[d.values.length - 1] };
      }) // keep only the last value of each time series
      .attr(
        "transform",
        (d) => `translate(${x(d.value.time)},${y(d.value.value)})`
      ) // Put the text at the position of the last point
      .attr("x", 12) // shift the text a bit more right
      .text((d) => d.name)
      .style("fill", (d) => myColor(d.name))
      .style("font-size", 15);

    // Add a legend (interactive)
    svg
      .selectAll("myLegend")
      .data(dataReady)
      .join("g")
      .append("text")
      .attr("x", (d, i) => 30 + i * 60)
      .attr("y", 30)
      .text((d) => d.name)
      .style("fill", (d) => myColor(d.name))
      .style("font-size", 15)
      .on("click", function (event, d) {
        // is the element currently visible ?
        const currentOpacity = d3.selectAll("." + d.name).style("opacity");
        // Change the opacity: from 0 to 1 or from 1 to 0
        d3.selectAll("." + d.name)
          .transition()
          .style("opacity", currentOpacity == 1 ? 0 : 1);
      });

    const { annotationMouseOver, annotationMouseMove, annotationMouseLeave } =
      AnnotationTooltip(svgContainer);
    const annotateMarginY = 30;
    const targetX = 320;
    const annotateWidth = 80;
    svg
      .append("rect")
      .attr("x", targetX)
      .attr("y", margin.top + annotateMarginY)
      .attr("width", annotateWidth)
      .attr("height", height - margin.top - annotateMarginY)
      .attr("stroke", "black")
      .style("opacity", 0.3)
      .attr("fill", "#A0A000")
      .on("mouseover", annotationMouseOver)
      .on("mousemove", annotationMouseMove)
      .on("mouseleave", annotationMouseLeave);

    // Add the points
  }, []);

  return (
    <NodeViewWrapper className="w-full h-full flex items-start justify-end group my-3">
      <SideActions editor={props.editor} getPos={props.getPos} />
      <div className="w-16/20 text-start mr-10">
        <div ref={svgContainer}></div>
      </div>
    </NodeViewWrapper>
  );
};

export default Component;

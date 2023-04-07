import * as d3 from "d3";

const TooltipLayer = (svgContainer) => {
  const Tooltip = d3
    .select(svgContainer.current)
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip absolute z-20")
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "2px")
    .style("border-radius", "5px")
    .style("padding", "5px");

  const mouseover = function (event, d) {
    Tooltip.style("opacity", 1);
  };
  const mousemove = function (event, d) {
    Tooltip.html("Exact value: " + d.value)
      .style("left", `${event.layerX + 10}px`)
      .style("top", `${event.layerY}px`);
  };
  const mouseleave = function (event, d) {
    Tooltip.style("opacity", 0);
  };

  return {
    mouseover,
    mousemove,
    mouseleave,
  };
};

export default TooltipLayer;

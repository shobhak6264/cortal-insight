import React, { useState, useEffect, useRef, useContext } from 'react';
import * as d3 from 'd3';
import { Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions, Button } from '@material-ui/core';
import LazyLoad from 'react-lazyload';
import { useGraphContext } from '../context/GraphContext';
import { data } from '../data';

export const ImageScatterPlot = () => {
  const svgRef = useRef();
  const [selectedImage, setSelectedImage] = useState(null);
  const { setActiveNode } = useGraphContext(); 
  const imageData = data();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const plot = svg.append("g");
    const zoom = d3.zoom().scaleExtent([0.5, 8]).on("zoom", zoomed);

    svg.call(zoom);

    const images = plot.selectAll("image")
      .data(imageData)
      .enter()
      .append("svg:image")
      .attr("xlink:href", d => d.url)
      .attr("x", d => d.x)
      .attr("y", d => d.y)
      .attr("width", 50)
      .attr("height", 50)
      .style("cursor", "pointer")
      .on("click", handleClick);

    function zoomed(event) {
      plot.attr("transform", event.transform);
      images.attr("width", 50 / event.transform.k).attr("height", 50 / event.transform.k);
    }

    function handleClick(event, d) {
      setSelectedImage(d);
      setActiveNode(d);
    }

    return () => {
      svg.on(".zoom", null);
    };
  }, []);

  return (
    <div>
      <svg ref={svgRef} width="100%" height="1000px">
        {imageData.map((image, index) => (
          <LazyLoad key={index} height={50} offset={100}>
            <image
              xlinkHref={image.url}
              x={image.x}
              y={image.y}
              width={50}
              height={50}
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedImage(image)}
            />
          </LazyLoad>
        ))}
      </svg>
      <ImageModal open={!!selectedImage} onClose={() => setSelectedImage(null)} image={selectedImage}/>
    </div>
  );
};

const ImageModal = ({ open, onClose, image }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Image Insights</DialogTitle>
      <DialogContent>
        <DialogContentText>{image?.insights}</DialogContentText>
        <img src={image && image.url} width="max-content" height="max-content" />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">Close</Button>
      </DialogActions>
    </Dialog>
  );
};

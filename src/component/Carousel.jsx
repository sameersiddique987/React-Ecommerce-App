import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
function ImageCarousel() {
const images = [
    {
        src: "https://pixosoft.com/images/sliders/pixosoft-slider-3.jpg",  
        alt: "First Image"
    },
    {
        src: "https://helloyubo.com/wp-content/uploads/2022/10/creative_fashion-2-1024x372.jpg",
        alt: "Second Image"
    },
    {
        src: "https://cdn.sanity.io/images/cbjxg0yl/production_v2/207796ae5c4b77588415a94bdaf3c8c29ea92bd3-2480x761.jpg",
        alt: "Third Image"
    }
];
    return (
        <Carousel
            autoPlay={true}
            animation="fade"
            duration={500}
            indicators={true}
            navButtonsAlwaysVisible={true}
        >
            {images.map((item, i) => (
                <ImageItem key={i} item={item} />
            ))}
        </Carousel>
    );
}

function ImageItem(props) {
    return (
        <Paper>
            <img
                src={props.item.src}
                alt={props.item.alt}
                style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
        </Paper>
    );
}

export default ImageCarousel;



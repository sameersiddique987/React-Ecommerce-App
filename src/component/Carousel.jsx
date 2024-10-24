import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

function ImageCarousel() {
    const images = [
        {
            src: "https://soliloquywp.com/wp-content/uploads/2016/09/How-to-Add-a-Homepage-Slider-in-WordPress.png",
            alt: "First Image"
        },
        {
            src: "https://wpnewsify.com/wp-content/uploads/2017/09/Logo-Slider-794x398.jpg",
            alt: "Second Image"
        },
        {
            src: "https://landofcoder.b-cdn.net/wp-content/uploads/2020/08/magento-2-image-slider-1-2.jpg",
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



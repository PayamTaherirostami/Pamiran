import React from "react";
import SimpleImageSlider from "react-simple-image-slider";


export default function Slider() {
    const images = [{url: "../images/1.jpg"  },
                    {url: "../images/10.jpg" },
                    {url: "../images/12.jpg" },
                    {url: "../images/13.jpg" },
                    {url: "../images/4.jpg"  },
                    {url: "../images/5.jpg"  },
                    {url: "../images/6.jpg"  },
                 ];
    return (
    <div className="Slider">
        <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
        slideDuration={1}
        autoPlay={true}
        />
    </div>
    );
}
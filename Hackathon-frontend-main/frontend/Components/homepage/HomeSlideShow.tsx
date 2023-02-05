import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Image from 'next/image'
import s1 from '../../public/s1.jpg'
import s2 from '../../public/s2.jpg'
import s3 from '../../public/s3.jpg'
import s4 from '../../public/s4.jpg'
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import React, { useState, useEffect, useRef } from 'react';


const HomeSlideShow = () => {
    const sl1 = <Image src={s1} alt="Picture of the author" width={300} height={300} />;
    const sl2 = <Image src={s2} alt="Picture of the author" width={300} height={300} />;
    const sl3 = <Image src={s3} alt="Picture of the author" width={300} height={300} />;
    const sl4 = <Image src={s4} alt="Picture of the author" width={300} height={300} />;
    
    const [pause, setPause] = useState(false);
  
    const [sliderRef] = useKeenSlider(
        {
          loop: true,
        },
        [
          (slider) => {
            let timeout: any
            let mouseOver = false
            function clearNextTimeout() {
              clearTimeout(timeout)
            }
            function nextTimeout() {
              clearTimeout(timeout)
              if (mouseOver) return
              timeout = setTimeout(() => {
                slider.next()
              }, 2000)
            }
            slider.on("created", () => {
              slider.container.addEventListener("mouseover", () => {
                mouseOver = true
                clearNextTimeout()
              })
              slider.container.addEventListener("mouseout", () => {
                mouseOver = false
                nextTimeout()
              })
              nextTimeout()
            })
            slider.on("dragStarted", clearNextTimeout)
            slider.on("animationEnded", nextTimeout)
            slider.on("updated", nextTimeout)
          },
        ]
      )
    
      return (
        <>
          <div ref={sliderRef} 
          className={`keen-slider`}
          style={
            {
                width: "350px",
                height: "350px",
                borderRadius: "10px",
                border: "30px solid #fff",
            }
          }
          >
            <div className="keen-slider__slide number-slide1"><Image src={s1} alt="Picture of the author"  width={300} height={300} /></div>
            <div className="keen-slider__slide number-slide2"><Image src={s2} alt="Picture of the author" width={300} height={300} /></div>
            <div className="keen-slider__slide number-slide3"><Image src={s3} alt="Picture of the author" width={300} height={300} /></div>
            <div className="keen-slider__slide number-slide4"><Image src={s4} alt="Picture of the author" width={300} height={300} /></div>

          </div>
        </>
      )
}



// const fadeImages = [
//   {
//     url: "./global/s1.jpg",
//     caption: "First Slide",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
//     caption: "Second Slide",
//   },
//   {
//     url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//     caption: "Third Slide",
//   },
// ];

// const HomeSlideShow = () => {
//   return (
//     <div className="slide-container w-100 h-100">
//       <Fade>
//         {fadeImages.map((fadeImage, index) => (
//           <div key={index}>
//             <img style={{ width: "100%" }} src={fadeImage.url} />
//             <h2>{fadeImage.caption}</h2>
//           </div>
//         ))}
//       </Fade>
//     </div>
//   );
// };

export default HomeSlideShow;

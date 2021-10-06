import img1 from './sliderimg/img.png'
import img2 from './sliderimg/img2.png'
import backImg from './sliderimg/back.png'
import nextImg from './sliderimg/next.png'
import './slider.scss'
import { useState } from 'react'

export const Slider = () => {
    const [offset, setOffset] = useState(0)

    const prev = () => {
        if (offset >= 0) {
            setOffset(0)
        }
        else {
            setOffset(offset + 1080)

        }
    }

    const next = () => {
        if (offset <= -1080) {
            setOffset(0)
        }
        else {
            setOffset(offset - 1080)

        }
    }

    return (
        <div className="slider">
            <div style={{ left: `${offset}px` }} className="slider__line">
                <img src={img2} alt="" />
                <img src={img1} alt="" />
            </div>
            <div className="slide__buttons">
                <button onClick={prev}>
                    {/* back */}
                    <img className="slide__buttons-prev" src={backImg} alt="prev" />
                </button>
                <button onClick={next}>
                    <img className="slide__buttons-next" src={nextImg} alt="next" />
                </button>
            </div>
        </div>
    )
}
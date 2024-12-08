import React from 'react'
import Imageabout from '../Components/About/ImageAbout/Imageabout'
import ImagePart from '../Components/About/ImagePart/ImagePart'
import ImageWithText from '../Components/About/ImageWithText/ImageWithText'
import Image3 from '../Components/About/Image3/Image3'
import LayerImage from '../Components/About/4LayerImage/LayerImage'
import UniqueMiddleLineLayout from '../Components/About/UniqueMiddleLineLayout/UniqueMiddleLineLayout'
import AboutFooter from '../Components/About/AboutFooter/AboutFooter'

const About = () => {
    return (
        <>
            <Imageabout />
            <ImagePart />
            <ImageWithText />
            <Image3 />
            <LayerImage />
            <UniqueMiddleLineLayout />
            <AboutFooter />
        </>
    )
}

export default About

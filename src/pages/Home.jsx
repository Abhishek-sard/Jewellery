import React from 'react'
import ImageSlider from '../Components/ImageSlider/ImageSlider'
import Cart from '../Components/cart/Cart'
import TwoColumnLayout from '../Components/TwoColumnLayout/TwoColumnLayout'
import ImageRow from '../Components/ImageRow/ImageRow'
import TwoRowLayer from '../Components/TwoRowLayer/TwoRowLayer'
import ImageHand from '../Components/ImageHand/ImageHand'
import ImageThree from '../Components/ImageThree/ImageThree'
import MiddleLineLayout from '../Components/MiddleLineLayout/MiddleLineLayout'
import Footer from '../Components/Footer/Footer'

const Home = () => {
    return (
        <>
            <ImageSlider />
            <Cart />
            <TwoColumnLayout />
            <ImageRow />
            <TwoRowLayer />
            <ImageHand />
            <ImageThree />
            <MiddleLineLayout />
            <Footer />
        </>
    )
}

export default Home

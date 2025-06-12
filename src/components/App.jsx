import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import PlantSection from "./PlantSection";
import TestimonialSection from "./TestimonialSection";

function App() {
    const indoorPlants = [
        { image: '/images/Peace_lily.jpg', title: 'Peace Lily', tags: ['Indoor', 'Easy Care'], buttonText: 'Plant Now' },
        { image: '/images/Snake_Plant.jpg', title: 'Snake Plant', tags: ['Indoor', 'Low Light'], buttonText: 'Plant Now' },
        { image: '/images/Pothos.jpg', title: 'Pothos', tags: ['Indoor', 'Fast Growing'], buttonText: 'Plant Now' }
    ];

    const outdoorPlants = [
        { image: '/images/Lavender.jpg', title: 'Lavender', tags: ['Outdoor', 'Sunny'], buttonText: 'Plant Now' },
        { image: '/images/Rose_bush.jpg', title: 'Rose Bush', tags: ['Outdoor', 'Flowering'], buttonText: 'Plant Now' },
        { image: '/images/Fern.webp', title: 'Fern', tags: ['Outdoor', 'Shade'], buttonText: 'Plant Now' }
    ];

    const gardeningTools = [
        { image: '/images/trovel.jpg', title: 'Trowel', tags: ['Hand Tool', 'Durable'], buttonText: 'Buy Now' },
        { image: '/images/Pruningtool.jpg', title: 'Pruning Shears', tags: ['Precision', 'Ergonomic'], buttonText: 'Buy Now' },
        { image: '/images/Watering_can.avif', title: 'Watering Can', tags: ['2L Capacity', 'Eco-Friendly'], buttonText: 'Buy Now' }
    ];

    return (
        <>
            <Header />
            <HeroSection />
            <PlantSection id="indoor-plants" title="Indoor Plants" icon="/images/indoorplant.png" plants={indoorPlants} />
            <PlantSection id="outdoor-plants" title="Outdoor Plants" icon="/images/outdoorplant.png" plants={outdoorPlants} />
            <PlantSection id="gardening-tools" title="Gardening Tools" icon="/images/Tools_img.png" plants={gardeningTools} />
            <TestimonialSection />
            <Footer />
        </>
    );
}

export default App;

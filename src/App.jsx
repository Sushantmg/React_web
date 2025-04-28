import { useState } from "react";
import Mobilenavbar from "./componets/Mobilenavbar";
import HeroSection from "./componets/HeroSection";
import PopularDestinations from "./componets/PopularDestinations";
import ExploreDestinations from "./componets/ExploreDestinations";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import Carousel from "./componets/Carousel";
import Description from "./componets/Description";




const cardData = [
  {
    image: 'https://via.placeholder.com/400',
    title: 'Beautiful Paris',
    description: 'Explore the city of love and lights.',
    buttonText: 'Learn More'
  },
  {
    image: 'https://via.placeholder.com/400',
    title: 'Maldives Paradise',
    description: 'Relax on pristine beaches surrounded by crystal-clear waters.',
    buttonText: 'Book Now'
  },
  {
    image: 'https://via.placeholder.com/400',
    title: 'Swiss Alps Adventure',
    description: 'Ski or hike the beautiful snow-capped Alps.',
    buttonText: 'Discover More'
  },
  // Add more objects as needed
];







export default function App() {
  const [category, setCategory] = useState("All");

  return (
    <div className="font-sans text-gray-800">
      {/* Header and Mobile Navbar */}
      <div className="flex flex-col gap-2 p-4 bg-gray-100">
        <Header />
        <Mobilenavbar />
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* Description */}
      <Description/>







      {/* Popular Destinations with Category Setter */}
      <PopularDestinations setCategory={setCategory} />

      {/* Explore Destinations with the Category Filter */}
      <ExploreDestinations category={category} />
      <div className="App">
      <h1 className="text-3xl font-bold text-center mb-8">Explore Our Destinations</h1>
      <Carousel cardData={cardData} />
    </div>



      {/* Footer */}
      <Footer />
    </div>
  );
}

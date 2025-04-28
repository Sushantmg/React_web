import { useState } from "react";
import Mobilenavbar from "./componets/Mobilenavbar";
import HeroSection from "./componets/HeroSection";
import PopularDestinations from "./componets/PopularDestinations";
import ExploreDestinations from "./componets/ExploreDestinations";
import Footer from "./componets/Footer";
import Header from "./componets/Header";
import Carousel from "./componets/Carousel";
import Description from "./componets/Description";
import { PartnersList } from "./componets/PartnerList";




const cardData = [
  {
    image: '	https://www.optilingo.com/wp-content/uploads/2020/06/paris-1836415_640.jpg',
    title: 'Beautiful Paris',
    description: 'Explore the city of love and lights.',
    buttonText: 'Learn More'
  },
  {
    image: '	https://arenatours.com/wp-content/uploads/2016/11/paradise-island-resort-maldives-2-1180x596.jpg',
    title: 'Maldives Paradise',
    description: 'Relax on pristine beaches surrounded by crystal-clear waters.',
    buttonText: 'Book Now'
  },
  {
    image: '	https://i.pinimg.com/originals/64/b5/f1/64b5f1189c83f87278599928ac2965c6.jpg',
    title: 'Swiss Alps Adventure',
    description: 'Ski or hike the beautiful snow-capped Alps.',
    buttonText: 'Discover More'
  },
  
];







export default function App() {
  const [category, setCategory] = useState("All");

  return (
    <div className="font-sans text-gray-800">
      
      <div className="flex flex-col gap-2 p-4 bg-gray-100">
        <Header />
        <Mobilenavbar />
      </div>

      
      <HeroSection />

      
      <Description/>







      
      <PopularDestinations setCategory={setCategory} />

      
      <ExploreDestinations category={category} />
      <div className="App">
      <h1 className="text-3xl font-bold text-center mb-8">Explore Our Destinations</h1>
      <Carousel cardData={cardData} />
    </div>

<PartnersList/>


      <Footer />
    </div>
  );
}

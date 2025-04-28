export default function HeroSection() {
    return (
      <section className="relative bg-cover bg-center h-[90vh]" style={{ backgroundImage: "url('travel.jpg')" }}>
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Explore the World</h1>
          <p className="text-lg md:text-2xl">Your journey starts here</p>
        </div>
      </section>
    );
  }
  
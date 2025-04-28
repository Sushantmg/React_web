const destinations = [
  { name: "Paris", image: "/images/paris.jpg", type: "City" },
  { name: "New York", image: "/images/newyork.jpg", type: "City" },
  { name: "Maldives", image: "/images/maldives.jpg", type: "Beach" },
  { name: "Bali", image: "/images/bali.jpg", type: "Beach" },
  { name: "Swiss Alps", image: "/images/swissalps.jpg", type: "Mountain" },
  { name: "Mount Everest", image: "/images/everest.jpg", type: "Mountain" },
];

export default function ExploreDestinations({ category }) {
  const filtered = category === "All" ? destinations : destinations.filter(d => d.type === category);

  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">Explore Destinations</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
        {filtered.map((dest, idx) => (
          <div key={idx} className="destination-card">
            <img src={dest.image} alt={dest.name} className="h-48 w-full object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">{dest.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

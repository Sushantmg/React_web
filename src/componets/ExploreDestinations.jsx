const destinations = [
  { name: "Paris", image: "https://s1.1zoom.me/b8048/487/Sky_Evening_France_Eiffel_Tower_Paris_From_above_520603_1920x1080.jpg", type: "City" },
  { name: "New York", image: "https://i.redd.it/1sspx91csie31.jpg", type: "City" },
  { name: "Maldives", image: "https://wallpapercave.com/wp/wp4088744.jpg", type: "Beach" },
  { name: "Bali", image: "https://wallpaper.dog/large/10910056.jpg", type: "Beach" },
  { name: "Swiss Alps", image: "https://images5.alphacoders.com/676/thumb-1920-676278.jpg", type: "Mountain" },
  { name: "Mount Everest", image: "		https://cdn.mos.cms.futurecdn.net/D9bzCVeZLHQnZ6bUWvAkrW.jpg", type: "Mountain" },
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

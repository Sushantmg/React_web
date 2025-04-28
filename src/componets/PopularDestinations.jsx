export default function PopularDestinations({ setCategory }) {
  return (
    <section className="py-16 text-center">
      <h2 className="text-4xl font-bold mb-8 text-blue-600">Popular Destinations</h2>
      <div className="flex justify-center flex-wrap gap-4">
        <button onClick={() => setCategory("All")} className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">All</button>
        <button onClick={() => setCategory("Beach")} className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">Beach</button>
        <button onClick={() => setCategory("Mountain")} className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">Mountain</button>
        <button onClick={() => setCategory("City")} className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">City</button>
      </div>
    </section>
  );
}

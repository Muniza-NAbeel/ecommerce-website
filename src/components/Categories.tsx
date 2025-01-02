import Image from "next/image";
import Link from "next/link"; 

const Categories = () => {
  const items = [
    {
      title: "Mens Must-Haves",
      description: "Explore Now!",
      image: "/mens.avif", 
      link: "/mens", 
    },
    {
      title: "Glamour & Grace",
      description: "Explore Now!",
      image: "/women.jpg", 
      link: "/women", 
    },
    {
      title: "Kiddie Corner",
      description: "Explore Now!",
      image: "/kid.jpg",
      link: "/kids", 
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold mb-8">
        NEW <span className="text-yellow-500">ARRIVALS</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative h-64 rounded-xl duration-500 hover:scale-125">
              <Image
                src={item.image}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-500">{item.description}</p>
              <Link href={item.link}>
                <span className="mt-4 inline-flex items-center text-yellow-500 font-semibold duration-100 hover:scale-150">
                  Explore Now
                  <span className="ml-2 text-lg">&rarr;</span>
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

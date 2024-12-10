import Image from 'next/image';
import Project1 from '@/Assets/Tech/adbiyas.jpeg';
import Project2 from '@/Assets/Tech/adbiysaSoluation.jpeg';
import Project3 from '@/Assets/Tech/grocery.jpeg';
import Project4 from '@/Assets/Tech/Text.jpeg';
import Project6 from '@/Assets/Tech/UsaJob.jpeg';
import Project5 from '@/Assets/Tech/HasanTax.jpeg';
const Portfolio = () => {
  const projects = [
    {
      title: "Adbiyas Tour",
      image: Project1, // Replace with actual image URLs
    },
    {
      title: "Adbiyas Solution",
      image: Project2,
    },
    {
      title: "Adbiyas Grocery",
      image: Project3,
    },
    {
      title: "Desitax Org.",
      image: Project4,
    },
    {
      title: "Hasan Tax",
      image: Project5,
    },
    {
      title: "Nanny Job USA",
      image: Project6,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-purple-100 to-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Portfolio</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-105"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="text-white text-lg font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-8 px-6 py-2 bg-purple-600 text-white rounded-lg shadow-lg transform transition duration-300 hover:bg-purple-700 hover:scale-105">
          See All Projects
        </button>
      </div>
    </section>
  );
};

export default Portfolio;

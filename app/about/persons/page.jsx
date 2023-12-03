import React from "react";

export const metadata = {
  title: "People of Baghdad",
};
const Persons = () => {
  const people = People();

  return (
    <div className="flex flex-wrap justify-center">
      {people.map((item, idx) => (
        <div
          key={idx}
          className="max-w-md mx-2 my-4 bg-white rounded-xl overflow-hidden shadow-md flex-none w-full"
        >
          <img
            className="h-60 w-full object-cover"
            src={item.image_url}
            alt={`${item.name} Image`}
          />
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              {item.breed}
            </div>
            <a
              className="block mt-1 text-lg leading-tight font-medium text-black"
            >
              {item.name}
            </a>
            <p className="mt-2 text-gray-500">{item.info}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Persons;

function People() {
  return [
    {
      name: "Whiskers",
      image_url: "https://picsum.photos/1000/1500?random=11",
      info: "Whiskers is a playful and curious cat, always ready for a good cuddle.",
      breed: "Domestic Shorthair",
    },
    {
      name: "Mittens",
      image_url: "https://picsum.photos/1000/1500?random=1",
      info: "Mittens is known for her gentle nature and distinctive white paws.",
      breed: "Ragdoll",
    },
    {
      name: "Shadow",
      image_url: "https://picsum.photos/1000/1500?random=2",
      info: "Shadow is a mysterious cat who enjoys lounging in sunbeams.",
      breed: "Maine Coon",
    },
    {
      name: "Oreo",
      image_url: "https://picsum.photos/1000/1500?random=3",
      info: "Oreo is a sweet and affectionate cat with a black and white coat.",
      breed: "American Shorthair",
    },
    {
      name: "Fluffy",
      image_url: "https://picsum.photos/1000/1500?random=4",
      info: "Fluffy is a long-haired beauty who loves to be pampered.",
      breed: "Persian",
    },
    {
      name: "Simba",
      image_url: "https://picsum.photos/1000/1500?random=5",
      info: "Simba is a regal cat with a mane-like coat and a love for adventure.",
      breed: "Siberian",
    },
    {
      name: "Tiger",
      image_url: "https://picsum.photos/1000/1500?random=6",
      info: "Tiger is a bold and energetic cat with distinctive tiger-like stripes.",
      breed: "Bengal",
    },
    {
      name: "Luna",
      image_url: "https://picsum.photos/1000/1500?random=7",
      info: "Luna is a graceful and nocturnal cat with a love for moonlit strolls.",
      breed: "Siamese",
    },
    {
      name: "Cleo",
      image_url: "https://picsum.photos/1000/1500?random=8",
      info: "Cleo is an elegant cat who enjoys lounging on soft cushions.",
      breed: "Egyptian Mau",
    },
    {
      name: "Smokey",
      image_url: "https://picsum.photos/1000/1500?random=9",
      info: "Smokey is a mysterious cat with a smoky gray coat and a calm demeanor.",
      breed: "Russian Blue",
    },
    {
      name: "Leo",
      image_url: "https://picsum.photos/1000/1500?random=10",
      info: "Leo is a brave and outgoing cat who loves to explore new territories.",
      breed: "Norwegian Forest Cat",
    },
  ];
}

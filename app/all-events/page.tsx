import React from "react";

const AllEvents = () => {
  const events = [
    {
      id: 1,
      name: "React Events",
      date: "10/10/2024",
      time: "11:00 am",
      price: 1000,
      imageUrl: "/assets/images/a.png",
      location: {
        address: "11, broad street",
        city: "Surulere",
        state: "Lagos",
        country: "Nigeria",
      },
    },
  ];
  return (
    <div>
      <h1 className="font-bold text-2xl">Upcoming Events</h1>
      <hr />
      <div>
        {events.map((event) => (
          <article>
            <h2>{event.name}</h2>
          </article>
        ))}
      </div>
    </div>
  );
};

export default AllEvents;

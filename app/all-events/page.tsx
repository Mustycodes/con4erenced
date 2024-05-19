import React from "react";
import Event from "../components/Event";

const AllEvents = () => {
  const events = [
    {
      id: 1,
      name: "React Events",
      date: "10/10/2024",
      time: "11:00 am",
      price: 1000,
      onlineUrl: '',
      imageUrl: "/assets/images/a.png",
      location: {
        address: "11, broad street",
        city: "Surulere",
        state: "Lagos",
        country: "Nigeria",
      },
    },
    {
      id: 2,
      name: "Angular Events",
      date: "10/10/2024",
      time: "11:00 am",
      price: 785,
      onlineUrl: '',
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
      <h1 className='font-bold text-2xl my-4'>Upcoming Events</h1>
      <hr className="my-4" />
      <div className="grid grid-cols-3 gap-4">
        {events.map((event) => (
          <Event event={event} />
        ))}
      </div>
    </div>
  );
};

export default AllEvents;

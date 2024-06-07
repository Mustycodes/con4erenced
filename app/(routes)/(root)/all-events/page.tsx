import EventThumbnail from "@/app/components/EventThumbnail";

const AllEvents = () => {
  const events = [
    {
      id: 1,
      name: "React Events",
      date: "Sat, Jun 15",
      time: "11:00 am",
      price: 1000,
      onlineUrl: '',
      imageUrl: "/assets/images/DevFest2.png",
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
      date: "Sun, Jun 16",
      time: "11:00 am",
      price: 785,
      onlineUrl: '',
      imageUrl: "/assets/images/DevFest2019.png",
      location: {
        address: "11, broad street",
        city: "Surulere",
        state: "Lagos",
        country: "Nigeria",
      },
    },
    {
      id: 3,
      name: "React Events",
      date: "10/10/2024",
      time: "11:00 am",
      price: 1000,
      onlineUrl: '',
      imageUrl: "/assets/images/DevFest2.png",
      location: {
        address: "11, broad street",
        city: "Surulere",
        state: "Lagos",
        country: "Nigeria",
      },
    },
    {
      id: 3,
      name: "React Events",
      date: "10/10/2024",
      time: "11:00 am",
      price: 1000,
      onlineUrl: '',
      imageUrl: "/assets/images/DevFest2019.png",
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
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center md:justify-start">
        {events.map((event) => (
          <EventThumbnail event={event} />
        ))}
      </div>
    </div>
  );
};

export default AllEvents;

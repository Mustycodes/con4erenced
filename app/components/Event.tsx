import Link from "next/link";

interface EventProps {
  event: any;
}
const Event = ({ event }: EventProps) => {
  return (
    <Link href={`/all-events/${event.id}`}>
      <article className='border rounded p-4 space-y-1'>
        <h2 className='font-bold'>{event.name}</h2>
        <p>
          {event.date} {event.time}
        </p>
        <p className='font-bold text-2xl'>${event.price}</p>
      </article>
    </Link>
  );
};

export default Event;

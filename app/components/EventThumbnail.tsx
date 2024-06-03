import Image from "next/image";
import Link from "next/link";

interface EventProps {
  event: any;
}
const Event = ({ event }: EventProps) => {
  return (
    <article className='relative w-full bg-red-100 shadow-lg rounded-md'>
      <Link href={`/all-events/${event.id}`} className="w-full h-44">
        <Image src={event.imageUrl} layout="fill" className="rounded-t-md object-cover" alt="" />
      </Link>
      <div className='flex flex-col p-4'>
        <Link href={`/all-events/${event.id}`}>
          <h2 className='font-bold'>{event.name}</h2>
        </Link>
        <p>
          {event.date} {event.time}
        </p>
        <p className='font-bold text-2xl'>${event.price}</p>
      </div>
    </article>
  );
};

export default Event;

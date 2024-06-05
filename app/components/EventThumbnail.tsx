import Image from "next/image";
import Link from "next/link";

interface EventProps {
  event: any;
}
const Event = ({ event }: EventProps) => {
  return (
    <article className='max-w-sm border border-gray-200 shadow-md rounded-lg bg-white overflow-hidden'>
      <Link href={`/all-events/${event.id}`}>
        <Image src={event.imageUrl} width={800} height={800} alt={event.name} />
      </Link>
      <div className='m-4'>
        <Link href={`/all-events/${event.id}`} className='hover:underline'>
          <h4 className='font-bold text-xl'>{event.name}</h4>
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

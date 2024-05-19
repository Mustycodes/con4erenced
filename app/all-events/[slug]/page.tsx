"use client";
import { useParams } from "next/navigation";

const EventPage = () => {
  const { slug } = useParams();
  return <div>This is Page {slug}</div>;
};

export default EventPage;

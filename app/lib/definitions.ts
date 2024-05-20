interface Event {
  id: number;
  name: string;
  date: string;
  time: string;
  price: 785;
  onlineUrl: string;
  imageUrl: string;
  location: {
    address: string;
    city: string;
    state: string;
    country: string;
  };
}

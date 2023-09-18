export interface IHotel {
  provinceId: number;
  location: string;
  type: string;
  id: number;
  name: string;
  address: string;
  rating: number;
  price: number;
  stars: number;
  amenities: string[];
  description: string;
  image: string[];
  numberOfRoom: number;
}

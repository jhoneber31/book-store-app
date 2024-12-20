export interface IBook {
  id:                 number;
  title:              string;
  description:        string;
  price:              number;
  discountPercentage: number;
  rating:             number;
  stock:              number;
  author:             string;
  category:           string;
  thumbnail:          string;
  images:             string[];
}

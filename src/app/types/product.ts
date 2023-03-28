export interface IProduct {
  id: string;
  url: string;
  name: string;
  sizeType: string | null;
  size: string;
  barcode: string;
  manufacturer: string;
  brand: string;
  description: string;
  price: number;
  typeOfCare: string[];
  cosmeticType: boolean;
}

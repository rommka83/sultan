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
  price: string;
  typeOfCare?: string[];
  cosmeticType: boolean;
}

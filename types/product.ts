export interface Product {
  _id: string;
  _creationTime?: number;
  name: string;
  slug: string;
  category: "headphones" | "earphones" | "speakers";
  description: string;
  price: number;
  isNew: boolean;
  features: string;
  inTheBox: Array<{
    quantity: number;
    item: string;
  }>;
  image: string;
  galleryImages: string[];
}
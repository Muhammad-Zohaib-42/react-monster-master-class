import type { Dispatch, ReactNode, SetStateAction } from "react";

export type StoreProviderProps = {
  children: ReactNode;
};

export type ContextValue = {
  isFilterMenuOpen: boolean;
  setIsFilterMenuOpen: Dispatch<SetStateAction<boolean>>;
  productsData: ProductObjType[];
  setProductsData: Dispatch<SetStateAction<ProductObjType[]>>,
  currentPage: number,
  setCurrentPage: Dispatch<SetStateAction<number>>,
  itemsPerPage: number,
  searchQuery: string,
  setSearchQuery: Dispatch<SetStateAction<string>>,
  minPrice: number | null,
  setMinPrice: Dispatch<SetStateAction<number | null>>;
  maxPrice: number | null,
  setMaxPrice: Dispatch<SetStateAction<number | null>>;
  keyword: string,
  setKeyword: Dispatch<SetStateAction<string>>;
  category: string,
  setCategory: Dispatch<SetStateAction<string>>;
};

export type ProductObjType = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: [
    {
      rating: number;
      comment: string;
      date: string;
      reviewerName: string;
      reviewerEmail: string;
    },
    {
      rating: number;
      comment: string;
      date: string;
      reviewerName: string;
      reviewerEmail: string;
    },
    {
      rating: number;
      comment: string;
      date: string;
      reviewerName: string;
      reviewerEmail: string;
    },
  ];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
  thumbnail: string;
};

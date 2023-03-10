
import { Props as ProductButtonsProps } from "../components/ProductButtons";
import { Props as ProductCardPropos } from "../components/ProductCard";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductTitleProps } from "../components/ProductTitle";



export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  count: number;
  product: Product;
  maxCount?: number;
  increaseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardPropos): JSX.Element,
  Title: (Props: ProductTitleProps) => JSX.Element,
  Image: (Props: ProductImageProps) => JSX.Element,
  Buttons: (Props: ProductButtonsProps) => JSX.Element
}

export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface ProductInCart extends Product {
  count: number;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;

  increaseBy: (value: number) => void;
  reset: () => void;
}

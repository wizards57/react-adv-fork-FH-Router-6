import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface Props {
  className?: string;
  title?: string;
  style?: React.CSSProperties;
}

export const ProductTitle = ({ title, className, style }: Props) => {
  // esta forma de definir la variable con su tipo es como si fuera una interface pero de una sola variable
  const { product } = useContext(ProductContext);
  /* let titleToShow: string;
  title ? (titleToShow = title) : (titleToShow = product.title); */

  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {title ? title : product.title}
    </span>
  );
};

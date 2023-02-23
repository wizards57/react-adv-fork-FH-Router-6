import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export const ProductTitle = ({ title }: { title?: string }) => {
  // esta forma de definir la variable con su tipo es como si fuera una interface pero de una sola variable
  const { product } = useContext(ProductContext);
  /* let titleToShow: string;
  title ? (titleToShow = title) : (titleToShow = product.title); */

  return (
    <span className={styles.productDescription}>
      {title ? title : product.title}{" "}
    </span>
  );
};

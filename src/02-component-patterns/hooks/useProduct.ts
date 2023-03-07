import { useState, useEffect, useRef } from 'react';
import { Product, onChangeArgs } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const useProduct = ({ onChange, product, value = 0 }: useProductArgs) => {

  const [count, setCount] = useState(value);

  const isControlled = useRef(!!onChange); //Doble signo !! para convertirlo en true

  const increaseBy = (value: number) => {

    if (isControlled.current) {
      return onChange!({ count: value, product }); //El sibolo ! es para decirle a js que siempre va a tener un valor en onChange otra opción  puede poner en el if && onChange
    }

    const newValue = Math.max(count + value, 0)
    setCount(newValue);

    onChange && onChange({ count: newValue, product });
  }

  useEffect(() => {
    setCount(value);
  }, [value])



  return {
    increaseBy, count
  }
}
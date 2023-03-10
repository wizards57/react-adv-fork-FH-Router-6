import { useState, useEffect, useRef } from 'react';
import { Product, onChangeArgs, InitialValues } from '../interfaces/interfaces';

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues
}

export const useProduct = ({ onChange, product, value = 0, initialValues }: useProductArgs) => {

  const [count, setCount] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false);

  // console.log(initialValues?.count);

  const increaseBy = (value: number) => {

    let newValue = Math.max(count + value, 0)
    newValue = Math.min(newValue, initialValues?.maxCount || newValue)
    setCount(newValue);

    onChange && onChange({ count: newValue, product });
  }

  const reset = () => {
    setCount(initialValues?.count || value);
  }

  useEffect(() => {
    if (!isMounted.current) return;
    setCount(value);
  }, [value])

  useEffect(() => {
    isMounted.current = true;
  }, [])


  return {
    count,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === count,
    maxCount: initialValues?.maxCount,
    increaseBy,
    reset

  }
}
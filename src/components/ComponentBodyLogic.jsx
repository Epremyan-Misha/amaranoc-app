import { useState, useEffect } from "react";

export default function useBodyLogic() {
  const [count, setCount] = useState(1);
  const [countWithNight, setCountWithNight] = useState(1);
  const [delivery, setDelivery] = useState(false);

  const handleIncrement = () => setCount(count + 1);

  const handleDecrement = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleIncrementForNight = () => {
    setCountWithNight(countWithNight + 1);
  };

  const handleDecrementForNight = () => {
    if (countWithNight > 1) setCountWithNight(countWithNight - 1);
  };

  useEffect(() => {
    setDelivery(countWithNight >= 10);
  }, [countWithNight]);

  return {
    count,
    countWithNight,
    delivery,
    handleIncrement,
    handleDecrement,
    handleIncrementForNight,
    handleDecrementForNight,
  };
}

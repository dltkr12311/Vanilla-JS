import { useState, useRef, useMemo, useEffect } from "react";

const useInfiniteScroll = ({ lists }) => {
  const containerRef = useRef(null);
  const perPage = 10;
  const [count, setCount] = useState(1);

  const observer = new IntersectionObserver((entries, observer) => {
    if (!entries[0].isIntersecting) return;

    setCount((value) => value + 1);
    observer.disconnect();
  });

  useEffect(() => {
    if (
      perPage * count >= lists.length ||
      containerRef.current === null ||
      containerRef.current.children.length === 0
    )
      return;

    observer.observe(
      containerRef.current.children[containerRef.current.children.length - 1]
    );
  }, [count]);

  return { containerRef, list1: lists.slice(0, count * perPage) };
};

export default useInfiniteScroll;

import React, { useState, useEffect, useRef } from "react";
import { getList } from "./api/api";
import useInfiniteScroll from "./hooks/useInfiniteScroll";
import Item from "./Item";
import "./App.css";

const App = () => {
  const [lists, setLists] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadLists = async () => {
      setLoading(true);
      const newLists = await getList(page);
      setLists((prev) => [...prev, ...newLists]);
      setLoading(false);
    };
    loadLists();
  }, [page]);

  const { containerRef } = useInfiniteScroll(lists);

  return (
    <div className="App">
      <div className="container" ref={containerRef}>
        {lists &&
          lists.map((list) => (
            <Item key={list.id} name={list.name} trips={list.trips} />
          ))}
        {loading && <div className="loading">loading...</div>}
      </div>
    </div>
  );
};

export default App;

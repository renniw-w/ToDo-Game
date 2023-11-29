import React, { useEffect, useState } from "react";
import Items from "./Items";
import eventBus from "./EventBus";

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [currentItem, setCurrentItem] = useState([]);

  eventBus.on("itemChanged", (data: any) => setDataLoaded(false));
  if (!dataLoaded) {
    console.log("Loading Items...");
    fetch("/api/item")
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      });
    setDataLoaded(true);
    console.log("data loaded");
  }
  useEffect(() => {
    setLoading(true);
  }, []);

  if (loading || !dataLoaded) {
    return <p>Loading...</p>;
  }

  function onUpdateItem(updatedItem: any) {
    const updatedItems: any = items.map((item) => {
      // @ts-ignore
      if (item.id === updatedItem.id) {
        return updatedItem;
      } else {
        return item;
      }
    });
    setItems(updatedItems);
  }

  return (
    <div>
      <Items items={items} onUpdateItem={onUpdateItem} />
    </div>
  );
};
export default ItemList;

import React, { useEffect, useState } from "react";
import Items from "./Items";
import eventBus from "./EventBus";
import SelectedTaskList from "./SelectedTaskList";

const ItemList = () => {
  const [items, setItems] = useState<item[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);

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

  function onUpdateItem(updatedItem: item) {
    const updatedItems = items.map((item) => {
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

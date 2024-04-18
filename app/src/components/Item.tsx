import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Button } from "reactstrap";
import EventBus from "./EventBus";
import SelectTask from "./SelectTask";
import DummyUsers from "./DummyData";

function Item({
  item,
  item: { id, name, score, description },
  captureEdit,
  changeEditState,
}: any) {
  const handleDelete = () => {
    fetch(`http://localhost:8080/api/item/${item.id}`, {
      method: "delete",
    });
    EventBus.dispatch("itemChanged", { message: "Item wurde gelöscht" });
  };
  return (
    <tr key={id}>
      <td hidden={true}>{id}</td>
      <td>{name}</td>
      <td>{score}</td>
      <td>{description}</td>
      <td>
        <Button
          color="primary"
          onClick={() => {
            captureEdit(item);
            changeEditState(item);
          }}
        >
          Aufgabe Bearbeiten
        </Button>
        <SelectTask users={DummyUsers} />
        <Button
          color="danger"
          onClick={() => {
            handleDelete();
          }}
        >
          Löschen
        </Button>
      </td>
    </tr>
  );
}

export default Item;

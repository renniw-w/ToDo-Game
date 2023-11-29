import { Table } from "reactstrap";
import React, { useState } from "react";
import Item from "./Item";
import EditItem from "./EditItem";
import eventBus from "./EventBus";
import AddItemForm from "./addItemForm";

function Items({ items, onUpdateItem }: any) {
  // state for conditional render of edit form
  const [editForm, setEditForm] = useState({
    id: "",
    name: "",
    score: "",
    description: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  eventBus.on("handleCancelEditItemForm", () => setIsEditing(false));

  // hides Form after update, displays changes
  function handleItemUpdate(updatedItem: any) {
    eventBus.dispatch("handleCancelEditItemForm", {
      message: "Item wurde geupdated",
    });
    onUpdateItem(updatedItem);
  }

  // capture user input in edit form inputs
  function handleChange(event: any) {
    setEditForm({
      ...editForm,
      [event.target.name]: event.target.value,
    });
  }

  //logic for conditional rendering the form shows the item you want when you want them, and hides it when you don't
  function changeEditState(item: any) {
    if (item.id === editForm.id) {
      setIsEditing((isEditing) => !isEditing); // hides the form
    } else if (!isEditing) {
      setIsEditing((isEditing) => !isEditing); // shows the Form
    }
  }

  // capture the Item you wish to edit, set to state
  function captureEdit(clickdItem: any) {
    let filtered = items.filter((item: any) => item.id === clickdItem.id);
    setEditForm(filtered[0]);
  }

  return (
    <>
      <h1>Mögliche Aufagen:</h1>
      <div>
        <Table hover bordered striped>
          <thead>
            <tr>
              <th />
              <th>Aufgabe</th>
              <th>Anzahl der Punkte</th>
              <th>Beschreibung</th>
              <th>Aufgabe Bearbeiten</th>
              {/* Edit Button*/}
            </tr>
          </thead>
          <tbody>
            {items.map((item: any) => (
              <Item
                key={item.id}
                item={item}
                captureEdit={captureEdit}
                changeEditState={changeEditState}
              />
            ))}
          </tbody>
        </Table>
        {isEditing ? (
          <EditItem
            editForm={editForm}
            handleChange={handleChange}
            handleItemUpdate={handleItemUpdate}
          />
        ) : (
          <AddItemForm />
        )}
      </div>
    </>
  );
}

export default Items;

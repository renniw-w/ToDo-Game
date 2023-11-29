import { Button, Form, Input, Label } from "reactstrap";
import eventBus from "./EventBus";
import { useState } from "react";

function EditItem({ editForm, handleItemUpdate, handleChange }: any) {
  let { id, name, score, description } = editForm;
  const [errorMessage, setErrorMessage] = useState("");

  // handle Cancel
  function handleCancel(event: any) {
    setErrorMessage("");
    eventBus.dispatch("handleCancelEditItemForm", {
      message: "Item wurde geupdated",
    });
  }

  // Patch request; calls handleItemUpdate to push changes to page
  function handleEditForm(event: any) {
    event.preventDefault();

    const handleSuccess = () => {
      setErrorMessage("Aufgabe wurde gespeichert");
      eventBus.dispatch("itemChanged", { message: "Aufgabe Wurde Bearbeitet" });
    };

    const handleError = (response: any) => {
      const errorMessage = "ERROR: " + response.status;
      setErrorMessage(errorMessage);
    };
    fetch(`http://localhost:8080/api/item`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editForm),
    })
      .then((updateItem) => {
        handleItemUpdate(updateItem);
      })
      .then(() => handleSuccess())
      .catch((response) => {
        if (!response.ok) {
          handleError(response);
        }
      });
  }

  return (
    <>
      <h4>Aufgabe Bearbeiten</h4>
      <Form onSubmit={handleEditForm}>
        <div>
          <Label>Name:</Label>
          <Input type="hidden" name="id" value={id} />
          <Input type="text" name="name" value={name} onChange={handleChange}>
            Aufgabe
          </Input>
        </div>
        <div>
          <Label>Score:</Label>
          <Input
            type="number"
            name="score"
            value={score}
            onChange={handleChange}
          >
            Aufgabe
          </Input>
        </div>
        <div>
          <Label>Beschreibung:</Label>
          <Input
            type="text"
            name="description"
            value={description}
            onChange={handleChange}
          >
            Aufgabe
          </Input>
        </div>
        <Button type="submit" color="success">
          Submit
        </Button>
        <Button type="reset" onClick={handleCancel} color="danger">
          Cancel
        </Button>
      </Form>
      <div>{errorMessage}</div>
    </>
  );
}

export default EditItem;

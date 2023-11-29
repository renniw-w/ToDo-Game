import { Button, Form, Input, Label } from "reactstrap";
import { useState } from "react";
import eventBus from "./EventBus";
import "bootstrap/dist/css/bootstrap.min.css";

const AddItemForm = () => {
  const [showForm, setShowForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleCancel = () => {
    setShowForm(false);
    setErrorMessage("");
  };
  const handleError = (response: any) => {
    const errorMessage = "ERROR: " + response.status;
    setErrorMessage(errorMessage);
    setShowForm(true);
  };
  const handleSuccess = () => {
    setShowForm(false);
    setErrorMessage("");
    eventBus.dispatch("itemChanged", { message: "Aufgabe wurde Hinzugefühgt" });
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    fetch("http://localhost:8080/api/item", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then(() => handleSuccess())
      .catch((response) => {
        if (!response.ok) {
          handleError(response);
        }
      });
  };

  return (
    <>
      {showForm ? (
        <Form name={"neueAufgabenForm"} onSubmit={handleSubmit}>
          <h1>Speicher eine neue Aufgabe:</h1>
          <div>
            <Label>Name:</Label>
            <Input type="text" id="name" name="name" required={true} />
          </div>
          <div>
            <Label>Score:</Label>
            <Input type={"number"} id="score" name="score" required={true} />
          </div>
          <div>
            <Label>Description:</Label>
            <Input type={"text"} id="description" name="description" />
          </div>
          <Button color="success" type="submit">
            Speichern
          </Button>
          <Button color="danger" onClick={() => handleCancel()}>
            Abbruch
          </Button>
        </Form>
      ) : (
        <Button color="primary" onClick={() => setShowForm(true)}>
          Aufgabe Hinzufügen
        </Button>
      )}
      <div>{errorMessage}</div>
    </>
  );
};
export default AddItemForm;

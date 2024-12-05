import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { useState } from "react";
import eventBus from "./EventBus";
import { user } from "./Types";

type SelectTaskProp = {
  users: user[];
  itemId: number;
};

const SelectTask = ({ users, itemId }: SelectTaskProp) => {
  const [dropdownOpen, setdropdownOpen] = useState(false);

  const toggle = () => setdropdownOpen((prevState) => !prevState);

  const handleSelectUser = (user: user, itemId: number) => {
    eventBus.dispatch("UserSelected", { userId: user.id, userName: user.name });
    fetch(`http://localhost:8080/api/playerWorkItem/${itemId}`, {
      method: "POST",
      mode: "cors",
    });
  };
  return (
    <>
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={"end"}>
        <DropdownToggle caret>Aufgabe Auswählen</DropdownToggle>
        <DropdownMenu container={"body"}>
          <DropdownItem header>Wähle deinen User aus.</DropdownItem>
          {users.map((user) => (
            <DropdownItem
              key={user.id}
              onClick={() => handleSelectUser(user, itemId)}
            >
              {user.name}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>{" "}
    </>
  );
};

export default SelectTask;

import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { useState } from "react";
import eventBus from "./EventBus";

type SelectTaskProp = {
  users: user[];
};

const SelectTask = ({ users }: SelectTaskProp) => {
  const [dropdownOpen, setdropdownOpen] = useState(false);

  const toggle = () => setdropdownOpen((prevState) => !prevState);

  const handleSelectUser = (user: user) => {
    eventBus.dispatch("UserSelected", { userId: user.id, userName: user.name });
  };
  return (
    <>
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={"end"}>
        <DropdownToggle caret>Aufgabe Auswählen</DropdownToggle>
        <DropdownMenu container={"body"}>
          <DropdownItem header>Wähle deinen User aus.</DropdownItem>
          {users.map((user) => (
            <DropdownItem key={user.id} onClick={() => handleSelectUser(user)}>
              {user.name}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>{" "}
    </>
  );
};

export default SelectTask;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/user/actions";
import Button from "react-bootstrap/Button";
import { selectUser } from "../../store/user/selectors";
import Nav from "react-bootstrap/Nav";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <>
      <Nav.Item style={{ color: "white" }}>{user.name}</Nav.Item>
      <Button
        style={{
          marginLeft: "20px",
        }}
        variant="outline-secondary"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </>
  );
}

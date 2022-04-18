import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import "./styles.css";
import SocialMediaIcons from "../SocialMediaIcons";
import DropDownMenu from "../DropDownMenu";
import SearchBar from "../SearchBar";

export default function Navigation() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <>
      <Navbar className="nav-bar-container" bg="black" variant="dark">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-bar">
            <div className="left-navbar">
              <DropDownMenu />
              <SearchBar />
            </div>

            <div className="tittle">
              <Navbar.Brand className="nav-tittle" as={NavLink} to="/">
                Gaming and chill
              </Navbar.Brand>
            </div>

            <div className="right-navbar">
              {loginLogoutControls}
              <span
                style={{
                  borderRight: "1px dashed #fff",
                  marginLeft: "10px",
                  marginRight: "20px",
                }}
              />

              <SocialMediaIcons />
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

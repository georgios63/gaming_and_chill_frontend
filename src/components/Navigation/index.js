import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import "./styles.css";
import SocialMediaIcons from "../SocialMediaIcons";
import DropDownMenu from "../DropDownMenu";
import SearchBar from "../SearchBar";
import { allGames } from "../../store/games/selectors";
import { fetchGamesBySearchBar } from "../../store/games/actions";

export default function Navigation() {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const games = useSelector(allGames);

  const filterHandler = (event) => {
    const newFilter = games.filter((value) => {
      return value.title.toLowerCase().includes(event.toLowerCase());
    });

    if (event === "") {
      dispatch(fetchGamesBySearchBar([]));
    } else {
      dispatch(fetchGamesBySearchBar(newFilter));
    }
  };

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <>
      <Navbar className="nav-bar-container" bg="black" variant="dark">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-bar">
            <div className="left-navbar">
              <DropDownMenu />
              {}
              <SearchBar
                placeholder="Search"
                type="search"
                onChange={(event) => filterHandler(event.target.value)}
              />
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

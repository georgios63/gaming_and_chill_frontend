import Dropdown from "react-bootstrap/Dropdown";

const DropDownMenu = () => {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle split variant="dark">
          {" "}
          Menu 🎮{" "}
        </Dropdown.Toggle>
        <Dropdown.Menu variant="dark">
          <Dropdown.Item href="/category/action" active>
            Action
          </Dropdown.Item>
          <Dropdown.Item href="/category/mmo">MMO</Dropdown.Item>
          <Dropdown.Item href="/category/fps">FPS</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="/category/news">News</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default DropDownMenu;

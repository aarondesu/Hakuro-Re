import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

class AppBar extends React.Component {
  constructor(props) {
    super(props);

    this.handleMenuCLick = this.handleMenuCLick.bind(this);

    this.state = {
      activeItem: "list"
    };
  }

  handleMenuCLick(e, { name }) {
    this.setState({ activeItem: name });
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Menu pointing secondary size="small">
        <Menu.Item
          name="list"
          active={activeItem === "list"}
          onClick={this.handleMenuCLick}
          as={Link}
          to="/"
        />
        <Menu.Item
          name="test"
          active={activeItem === "test"}
          onClick={this.handleMenuCLick}
          as={Link}
          to="/test"
        />
      </Menu>
    );
  }
}

export default AppBar;

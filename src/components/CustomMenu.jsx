import React, { Component } from "react";
import { Menu } from "antd";
import About from "../views/About";
import Contact from "../views/Contact";
import App from "../App";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

class CustomMenu extends Component {

  state = {
    current: 'home',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {

    const routing = (
      <Router>
        <div>
          <Menu
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
          >
            <Menu.Item key="home">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="about" ><Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item key="contact"><Link to="/contact">Contact</Link>
            </Menu.Item>
          </Menu>
          <Route exact path="/" component={App} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </div>
      </Router>
    )
    return (routing);
  }

}
export default CustomMenu;
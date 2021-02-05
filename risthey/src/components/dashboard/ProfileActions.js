import React from "react";
import { Menu, Button } from "antd";

import { Link } from "react-router-dom";
import {
  ProfileOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;

class ProfileActions extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <>
        <div>
          <div style={{ width: 256 }}>
            <Button
              type="primary"
              onClick={this.toggleCollapsed}
              style={{ marginBottom: 16 }}
            >
              {React.createElement(
                this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined
              )}
            </Button>
            <Menu
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              mode="inline"
              theme="dark"
              inlineCollapsed={this.state.collapsed}
            >
              <Menu.Item key="1" icon={<ProfileOutlined />}>
                प्रोफ़ाइल जानकारी बदलें
                <Link to="/edit-profile"></Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<ProfileOutlined />}>
                आपकी बुनियादी जानकारी
                <Link to="/add-basic"></Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<DesktopOutlined />}>
                अनुभव जोड़ें
                <Link to="/add-experience"></Link>
              </Menu.Item>
              <Menu.Item key="4" icon={<ContainerOutlined />}>
                शिक्षा जोड़ें
                <Link to="/add-education"></Link>
              </Menu.Item>

              <SubMenu
                key="sub1"
                icon={<MailOutlined />}
                title="परिवार की जानकारी जोड़ें"
              >
                <Menu.Item key="5">
                  <Link to="/add-family">
                    परिवार के सदस्य की जानकारी जोड़ें
                  </Link>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </div>
        </div>
        <br />
      </>
    );
  }
}

export default ProfileActions;

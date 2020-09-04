import React, { Component } from "react";
import { Layout, Menu, Dropdown } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer, Button, Avatar, Divider } from "antd";
import { DownOutlined, UserOutlined, GlobalOutlined, TableOutlined } from "@ant-design/icons";

import Logo from "../../assets/images/logo-acc.png";
import MenuComponent from "./MenuComponent";
import history from '../Shared/history';

const { Header, Sider, Content } = Layout;

export default class BodyComponentConsolidator extends Component {
	state = {
		collapsed: false,
		visible: false,
	};

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};
	showDrawer = () => {
		this.setState({
			visible: true,
		});
	};

	onClose = () => {
		this.setState({
			visible: false,
		});
	};

	logout = () => {
		localStorage.clear()
		history.push('/login')
	}

	menu = () => {
		return(
			<Menu>
				<Menu.Item key="1" icon={<UserOutlined />}>
					1st menu item
				</Menu.Item>
				<Menu.Item key="2" icon={<UserOutlined />}>
					2nd menu item
				</Menu.Item>
				<Menu.Item key="3" onClick={this.logout }icon={<UserOutlined />}>
					Logout
				</Menu.Item>
			</Menu>
		);
	}

	render() {
		return (
			<Layout>
				<Sider className="web-menu" trigger={null} collapsible collapsed={this.state.collapsed}>
					<MenuComponent />
				</Sider>
				<Layout className="site-layout">
					<Header className="site-layout-background" style={{ padding: 0 }}>
						{React.createElement(this.state.collapsed ? MenuOutlined : MenuOutlined, {
							className: "trigger web-menu-btn",
							onClick: this.toggle,
						})}
						<div className="bars-menu-holder">
							<Button className="bars-menu" type="primary" onClick={this.showDrawer}>
								<span className="bars-btn"></span>
							</Button>
						</div>

						<div className="right-container">
							<div className="inner-right">
								<TableOutlined />
								<GlobalOutlined />
								<Divider type="vertical" />
								<Dropdown trigger="click" className="name-dropdown" overlay={this.menu}>
									<Button>
										Admin <DownOutlined />
									</Button>
								</Dropdown>
								<Avatar src={Logo} />
							</div>
						</div>

						<nav className="mobile-menu">
							<Drawer placement="left" closable={false} onClose={this.onClose} visible={this.state.visible}>
								<MenuComponent />
							</Drawer>
						</nav>
					</Header>
					<Content
						className="site-layout-background"
						style={{
							margin: "24px 16px",
							padding: 24,
							minHeight: 280,
						}}
					>
						{this.props.children}
					</Content>
				</Layout>
			</Layout>
		);
	}
}

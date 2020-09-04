import React, { Fragment, useState } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo-acc.png";
import {
	MonitorOutlined,
	DashboardOutlined,
	FileOutlined,
	PushpinOutlined,
	BookOutlined,
	HomeOutlined,
	NotificationFilled
} from "@ant-design/icons";
const { SubMenu } = Menu;
const MenuComponent = () => {
	const [collapsed, setCollapsed] = useState(false);

	const toggleCollapsed = () => {
		setCollapsed(!collapsed)
	};

	return (
		<Fragment>
			<div className="logo-container" onClick={toggleCollapsed}>
				<img className="logo" alt="logo" src={Logo}></img>
			</div>
			<Menu className="site-label">
				<Menu.Item disabled>
					<HomeOutlined /> <span>ACC Portal Admin</span>
				</Menu.Item>
			</Menu>
			<div>
				<Menu
					// defaultSelectedKeys={["1"]}
					// defaultOpenKeys={["sub1"]}
					mode="inline"
					theme="dark"
					inlineCollapsed={collapsed}
				>
					<Menu.Item key="1" icon={<DashboardOutlined />}>
						<Link to="/dashboard"><span>Dashboard</span></Link>
					</Menu.Item>
					<Menu.Item key="2" icon={<NotificationFilled />}>
						<Link to="/announcements"><span>Announcements</span></Link>
					</Menu.Item>
					<SubMenu key="sub1" icon={<FileOutlined />} title="Pages">
						<Menu.Item key="3">
							<Link to="/page"><span>Page</span></Link>
						</Menu.Item>
						{/* <Menu.Item key="6">Publish</Menu.Item> */}
					</SubMenu>
					<Menu.Item key="4" icon={<PushpinOutlined />}>
						<Link to="/posts"><span>Posts</span></Link>
					</Menu.Item>
					<Menu.Item key="5" icon={<BookOutlined />}>
						<Link to="/readings"><span>Readings</span></Link>
					</Menu.Item>
					<Menu.Item key="6	" icon={<MonitorOutlined />}>
						<Link to="/uploader"><span>Uploader</span></Link>
					</Menu.Item>
				</Menu>
			</div>
		</Fragment>
	);
}
export default MenuComponent;
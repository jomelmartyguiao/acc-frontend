import React, { Fragment, useState } from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo-acc.png";
import {
	DashboardOutlined,
	FileOutlined,
	PushpinOutlined,
	BookOutlined,
	MonitorOutlined,
	HomeOutlined,
} from "@ant-design/icons";
const { SubMenu } = Menu;
const MenuComponent = () => {
	const [collapsed, setCollapsed] = useState(false);

	const toggleCollapsed = () => {
		setCollapsed(!collapsed)
	};
	// const navigateToDashboard = () => {
	// 	window.location.assign("http://localhost:3000/dashboard");
	// };
	const navigateToPages = () => {
		window.location.assign("http://localhost:3000/pagecreation");
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
					defaultSelectedKeys={["5"]}
					defaultOpenKeys={["sub1"]}
					mode="inline"
					theme="dark"
					inlineCollapsed={collapsed}
				>
					<Menu.Item key="1" icon={<DashboardOutlined />}>
						<Link to="/dashboard"><span>Dashboard</span></Link>
					</Menu.Item>
					<SubMenu key="sub1" icon={<FileOutlined />} title="Pages">
						<Menu.Item key="5" onClick={navigateToPages}>
							Page Creation
						</Menu.Item>
						<Menu.Item key="6">Publish</Menu.Item>
					</SubMenu>
					<Menu.Item key="2" icon={<PushpinOutlined />}>
						Post
					</Menu.Item>
					<Menu.Item key="3" icon={<BookOutlined />}>
						Readings
					</Menu.Item>
					<Menu.Item key="4" icon={<MonitorOutlined />}>
						Monitoring
					</Menu.Item>
					<Menu.Item key="5" icon={<MonitorOutlined />}>
						<Link to="/uploader"><span>Uploader</span></Link>
					</Menu.Item>
				</Menu>
			</div>
		</Fragment>
	);
}
export default MenuComponent;
import React, { Component, Fragment } from "react";
import { Card, Col, Row, List, Icon, Timeline, Table, Tag, Space } from "antd";
import {
	FileTextOutlined,
	PushpinOutlined,
	ClockCircleOutlined,
	UserAddOutlined,
	MessageOutlined,
	LockOutlined,
	ProfileOutlined,
} from "@ant-design/icons";
export default class Dashboard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					title: "TOTAL PAGES",
					count: "100",
				},
				{
					title: "TOTAL POSTS",
					count: "3567",
				},
				{
					title: "TOTAL SESSIONS",
					count: "1452",
				},
			],
			dataSource: [
				{
					key: "1",
					name: "Mike",
					age: 32,
					address: "10 Downing Street",
				},
				{
					key: "2",
					name: "John",
					age: 42,
					address: "10 Downing Street",
				},
				{
					key: "3",
					name: "John",
					age: 42,
					address: "10 Downing Street",
				},
				{
					key: "1",
					name: "Mike",
					age: 32,
					address: "10 Downing Street",
				},
				{
					key: "4",
					name: "John",
					age: 42,
					address: "10 Downing Street",
				},
				{
					key: "1",
					name: "Mike",
					age: 32,
					address: "10 Downing Street",
				},
				{
					key: "5",
					name: "John",
					age: 42,
					address: "10 Downing Street",
				},
				{
					key: "1",
					name: "Mike",
					age: 32,
					address: "10 Downing Street",
				},
				{
					key: "6",
					name: "John",
					age: 42,
					address: "10 Downing Street",
				},
				{
					key: "1",
					name: "Mike",
					age: 32,
					address: "10 Downing Street",
				},
				{
					key: "1",
					name: "Mike",
					age: 32,
					address: "10 Downing Street",
				},
				{
					key: "6",
					name: "John",
					age: 42,
					address: "10 Downing Street",
				},
				{
					key: "1",
					name: "Mike",
					age: 32,
					address: "10 Downing Street",
				},
				{
					key: "6",
					name: "John",
					age: 42,
					address: "10 Downing Street",
				},
				{
					key: "1",
					name: "Mike",
					age: 32,
					address: "10 Downing Street",
				},
			],
			columns: [
				{
					title: "Name",
					dataIndex: "name",
					key: "name",
				},
				{
					title: "Age",
					dataIndex: "age",
					key: "age",
				},
				{
					title: "Address",
					dataIndex: "address",
					key: "address",
				},
			],
		};
	}

	cardIcon = data => {
		if (data === "TOTAL PAGES") {
			return <FileTextOutlined />;
		} else if (data === "TOTAL POSTS") {
			return <PushpinOutlined />;
		} else if (data === "TOTAL SESSIONS") {
			return <ClockCircleOutlined />;
		}
	};
	render() {
		let { data } = this.state;
		let { dataSource } = this.state;
		let { columns } = this.state;
		return (
			<Fragment>
				<div className="site-card-wrapper">
					<h1 className="module-title">Dashboard</h1>
					<span className="module-subtitle">Overview of websites current state</span>
					<Row gutter={16}>
						<Col span={18} className="acc-col">
							<List
								grid={{
									gutter: 16,
									xs: 1,
									sm: 1,
									md: 1,
									lg: 2,
									xl: 3,
									xxl: 3,
								}}
								dataSource={data}
								renderItem={item => (
									<List.Item>
										<Card bordered={false}>
											<div className="card-holder">
												<div className="card-icon">{this.cardIcon(item.title)}</div>
												<div className="card-details">
													<p className="card-count">{item.count}</p>
													<span>{item.title}</span>
												</div>
											</div>
										</Card>
									</List.Item>
								)}
							/>
							<Card bordered={false}>
								<div className="acc-card-title">
									<p>ACCESS STATS BY PAGE</p>
								</div>
							</Card>
							<Card bordered={false}>
								<div className="acc-card-title">
									<p>LAST USER SESSIONS</p>
									<Table className="table-holder" dataSource={dataSource} columns={columns} />;
								</div>
							</Card>
						</Col>
						<Col span={6} className="acc-col">
							<Card title="RECENT ACTIVITIES" className="recent-holder" bordered={false}>
								<div className="recent-holder-wrapper">
									<Timeline>
										<Timeline.Item dot={<UserAddOutlined className="timeline-icons color-green" />} color="green">
											<span className="recent-details">
												<b className="recent-name">John Doe,</b>started following you on Instagram
											</span>
											<small>4 hours ago</small>
										</Timeline.Item>
										<Timeline.Item dot={<ProfileOutlined className="timeline-icons color-blue" />} color="blue">
											<span className="recent-details">Invoice for 30 hours call has been paid</span>
											<small>4 hours ago</small>
										</Timeline.Item>
										<Timeline.Item dot={<LockOutlined className="timeline-icons color-red" />} color="red">
											<span className="recent-details">You've logged in on a new device</span>
											<small>4 hours ago</small>
										</Timeline.Item>
										<Timeline.Item dot={<MessageOutlined className="timeline-icons color-blue" color="orange" />}>
											<span className="recent-details">You've have new message on Facebook</span>
											<small>4 hours ago</small>
										</Timeline.Item>
										<Timeline.Item dot={<MessageOutlined className="timeline-icons color-blue" />}>
											<span className="recent-details">You've have new message on Facebook</span>
											<small>4 hours ago</small>
										</Timeline.Item>
										<Timeline.Item dot={<MessageOutlined className="timeline-icons color-blue" />}>
											<span className="recent-details">You've have new message on Facebook</span>
											<small>4 hours ago</small>
										</Timeline.Item>
										<Timeline.Item dot={<MessageOutlined className="timeline-icons color-blue" />}>
											<span className="recent-details">You've have new message on Facebook</span>
											<small>4 hours ago</small>
										</Timeline.Item>
										<Timeline.Item dot={<MessageOutlined className="timeline-icons color-blue" />}>
											<span className="recent-details">You've have new message on Facebook</span>
											<small>4 hours ago</small>
										</Timeline.Item>
										<Timeline.Item dot={<MessageOutlined className="timeline-icons color-blue" />}>
											<span className="recent-details">You've have new message on Facebook</span>
											<small>4 hours ago</small>
										</Timeline.Item>
									</Timeline>
								</div>
							</Card>
						</Col>
					</Row>
				</div>
			</Fragment>
		);
	}
}

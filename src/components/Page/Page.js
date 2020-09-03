import React, { Component, Fragment } from "react";
import { Link } from 'react-router-dom';
import { Card, Col, Row, List, Table, Modal, Button, Input,Tooltip,Tag } from "antd";
import {
	FileTextOutlined,
	PushpinOutlined,
	SendOutlined,
	EditOutlined,
	DeleteFilled,
	CopyOutlined,
	FormOutlined,
	CloseOutlined,
	SaveOutlined,
	QuestionCircleFilled
} from "@ant-design/icons";

const dataSource = [];
const { TextArea } = Input;

for (let i = 1; i < 10; i++) {
	dataSource.push({
		key: i,
		id: i,
		title: `Region ${i}`,
		description: "sample",
		status: [`Published`],
		by: `Edward King`,
		date: `2020-01-0${i}`,
	});
} 
for (let i = 10; i < 20; i++) {
	dataSource.push({
		key: i,
		id: i,
		title: `Region ${i}`,
		description: "sample",
		status: [`Not Published`],
		by: `Edward King`,
		date: `2020-01-${i}`,
	});
} 
export default class Page extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pageCreationToolTip: "Sample Text",
			value: '',
			visible: false,
			selectedRowKeys: [],
			dataSource: [],
			data: [
				{
					title: "TOTAL PAGES",
					count: "100",
				},
				{
					title: "PUBLISH PAGES",
					count: "3567",
				},
				{
					title: "NOT PUBLISHED PAGES",
					count: "1452",
				},
				{
					title: "DRAFTS",
					count: "1452",
				},
			],
			columns: [
				{
					title: "Id",
					dataIndex: "id",
					key: "id",
				},
				{
					title: "Title",
					dataIndex: "title",
					key: "title",
				},
				{
					title: "Description",
					dataIndex: "description",
					key: "description",
				},
				{
					title: "Status",
					dataIndex: "status",
                    key: "status",
                    // render: status => <Tag color = "#f0c108" >{status}</Tag>,
                    render: status => (
                        <>
                          {status.map(tag => {
                            let color = ''
                            if (tag === 'Published') {
                              color = '#f0c108';
                            }
                            return (
                              <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                              </Tag>
                            );
                          })}
                        </>
                      ),
                   
                },
				{
					title: "Published/Created by",
					dataIndex: "by",
					key: "by",
				},
				{
					title: "Date Created",
					dataIndex: "date",
					key: "date",
				},
			],
		};
	}
	showModal = () => {
		this.setState({
			visible: true,
		});
	};
	// showPage = () => {
	// 	window.location.assign("http://localhost:3000/page");
	// };
	handleSave = e => {
		console.log(e);
		this.setState({
			visible: false,
		});
	};

	handleCancel = e => {
		console.log(e);
		this.setState({
			visible: false,
		});
	};
	cardIcon = data => {
		if (data === "TOTAL PAGES") {
			return <FileTextOutlined />;
		} else if (data === "PUBLISH PAGES") {
			return <PushpinOutlined />;
		} else if (data === "NOT PUBLISHED PAGES") {
			return <SendOutlined />;
		} else if (data === "DRAFTS") {
			return <EditOutlined />;
		}
	};
	onSelectChange = selectedRowKeys => {
		console.log("selectedRowKeys changed: ", selectedRowKeys);
		this.setState({ selectedRowKeys });
	};

	onPageDescriptionChange = ({ target: { value } }) => {
		this.setState({ value });
	  };

	render() {
		let { data, columns, selectedRowKeys } = this.state;
		const rowSelection = {
			selectedRowKeys,
			onChange: this.onSelectChange,
			hideDefaultSelections: true,
			selections: [
				Table.SELECTION_ALL,
				Table.SELECTION_INVERT,
				{
					key: "odd",
					text: "Select Odd Row",
					onSelect: changableRowKeys => {
						let newSelectedRowKeys = [];
						newSelectedRowKeys = changableRowKeys.filter((key, index) => {
							if (index % 2 !== 0) {
								return false;
							}
							return true;
						});
						this.setState({ selectedRowKeys: newSelectedRowKeys });
					},
				},
				{
					key: "even",
					text: "Select Even Row",
					onSelect: changableRowKeys => {
						let newSelectedRowKeys = [];
						newSelectedRowKeys = changableRowKeys.filter((key, index) => {
							if (index % 2 !== 0) {
								return true;
							}
							return false;
						});
						this.setState({ selectedRowKeys: newSelectedRowKeys });
					},
				},
			],
		};
		return (
			<Fragment>
				<div className="site-card-wrapper">
					<h1 className="module-title">Page Creation</h1>
					<span className="module-subtitle">List of created pages and the options to create pages</span>
					<Row gutter={16}>
						<Col span={24} className="acc-col">
							<List
								grid={{
									gutter: 16,
									xs: 1,
									sm: 1,
									md: 2,
									lg: 2,
									xl: 4,
									xxl: 4,
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
								<Row>
									<Col span={12}>
										<div className="acc-card-title">
											<p>LIST OF PAGES</p>
										</div>
									</Col>
									<Col span={12}>
										<div className="buttons-right-holder">
											<Button danger className="acc-btn btn-danger" icon={<DeleteFilled />}>
												Delete
											</Button>
											<Button className="acc-btn btn-primary" icon={<CopyOutlined />}>
												Duplicate
											</Button>
											<Link to="/readings/new-reading">
												<Button className="acc-btn btn-success" icon={<FormOutlined />} to="/page/new-page">
													New
												</Button>
											</Link>
										</div>
									</Col>
								</Row>
								<Table className="table-holder" rowSelection={rowSelection} columns={columns} dataSource={dataSource} />
							</Card>
						</Col>
					</Row>
				</div>
				<Modal
					title={
						<div className="modal-header">
							<p> Create Page</p>
							<small>Fill out the form for new pages.</small>
						</div>
					}
					visible={this.state.visible}
					onOk={this.handleSave}
					onCancel={this.handleCancel}
					footer={[
						<Button key="back" onClick={this.handleCancel} className="acc-btn btn-default" icon={<CloseOutlined />}>
							Cancel
						</Button>,
						<Button key="submit" className="acc-btn btn-success" onClick={this.handleSave} icon={<SaveOutlined />}>
							Save
						</Button>,
						<Tooltip placement="topLeft" title={this.state.pageCreationToolTip}>
						 <QuestionCircleFilled  className="page-footer-tooltip" />
					    </Tooltip>
					]}
				>
					<Row>
						<Col span={8}>
							<p>Page Name</p>
						</Col>
						<Col span={16}>
							<Input placeholder="Input Page Name"/>
						</Col>
					</Row>
					<Row>
						<Col span={8}>
							<p>Description</p>
						</Col>
						<Col span={16}>
							<TextArea  
							  value={this.state.value}
							  onChange={this.onPageDescriptionChange} 
							  autoSize={{ minRows: 3, maxRows: 5 }}></TextArea>
						</Col>
					</Row>
				</Modal>
			</Fragment>
		);
	}
}

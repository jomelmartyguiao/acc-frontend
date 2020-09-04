import React, { Component, Fragment } from "react";
import { Card, Col, Row, List, Table, Modal, Button, Input,Tooltip, Select, Tag  } from "antd";
import {
	DeleteFilled,
	FormOutlined,
	CloseOutlined,
	SaveOutlined,
	QuestionCircleFilled
} from "@ant-design/icons";
const { Option } = Select;


const dataSource = [];
const { TextArea } = Input;

for (let i = 1; i < 10; i++) {
	dataSource.push({
		key: i,
		id: i,
		content: `Author Page`,
		announcement: "Information about a personnel",
		status: [`Published`],
        publisheddate: `2020-01-0${i}`,
	});
}

for (let i = 10; i < 25; i++) {
	dataSource.push({
		key: i,
		id: i,
		content: `Author Page`,
		announcement: "Information about a personnel",
		status: [`Not Published`],
        publisheddate: `2020-01-${i}`,
	});
}
export default class Announcement extends Component {
    constructor(props) {
		super(props);
		this.state = {
			pageToolTip: "Create Announcement",
			value: '',
			visible: false,
			selectedRowKeys: [],
			dataSource: [],
			data: [
				{
					title: "PUBLISH ANNOUNCEMENTS",
					count: "35",
				},
				{
					title: "NOT PUBLISH ANNOUNCEMENTS",
					count: "45",
				},
				{
					title: "UPCOMING MASS DATE",
					count: "2020-10-10",
				},
			],
			columns: [
				{
					title: "Id",
					dataIndex: "id",
					key: "id",
				},
				{
					title: "Content",
					dataIndex: "content",
					key: "content",
				},
				{
					title: "Announcement",
					dataIndex: "announcement",
					key: "announcement",
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
					title: "Publish Date",
					dataIndex: "publisheddate",
					key: "publisheddate",
                },
                
			],
		};
    }
    showModal = () => {
		this.setState({
			visible: true,
		});
	};
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
    onSelectChange = selectedRowKeys => {
		console.log("selectedRowKeys changed: ", selectedRowKeys);
		this.setState({ selectedRowKeys });
	};

	onPageDescriptionChange = ({ target: { value } }) => {
		this.setState({ value });
      };
      
     handleChange = value => {
        console.log(`selected ${value}`);
      }
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
                
					<h1 className="module-title">Create Announcements</h1>
					<span className="module-subtitle">Manage of Announcements</span>
					<Row gutter={16}>
						<Col span={24} className="acc-col">
							<List
								grid={{
									gutter: 16,
									xs: 1,
									sm: 1,
									md: 2,
									lg: 2,
									xl: 3,
									xxl: 3,
								}}
								dataSource={data}
								renderItem={item => (
									<List.Item>
										<Card bordered={false}>
											<div className="card-holder text-center">
												{/* <div className="card-icon">{this.cardIcon(item.title)}</div> */}
												<div className="card-details">
													<span>{item.title}</span>
													<p className="card-count">{item.count}</p>
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
											<p>LIST OF ANNOUNCEMENTS</p>
										</div>
									</Col>
									<Col span={12}>
										<div className="buttons-right-holder">
											<Button danger className="acc-btn btn-danger" icon={<DeleteFilled />}>
												Delete
											</Button>
											<Button className="acc-btn btn-success" icon={<FormOutlined />} onClick={this.showModal}>
												New
											</Button>
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
							<p> Create Announcement</p>
							<small>Fill out the form for new announcement.</small>
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
                        <Button key="submit" className="acc-btn btn-success" onClick={this.handleSave} icon={<SaveOutlined />}>
                            Save and Publish
                        </Button>,
						<Tooltip placement="topLeft" title={this.state.pageToolTip}>
						 <QuestionCircleFilled  className="page-footer-tooltip" />
					    </Tooltip>
					]}
				>
					<Row>
						<Col span={8}>
							<p>Content</p>
						</Col>
						<Col span={16}>
                            <Select defaultValue="regionI" style={{ width: '100%' }} onChange={this.handleChange}>
                                <Option value="regionI">Region I</Option>
                                <Option value="regionII">Region II</Option>
                                <Option value="regionIII">Region III</Option>
                            </Select>
						</Col>
					</Row>
                   
					<Row>
						<Col span={8}>
							<p>Announcement</p>
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
        )
    }
}

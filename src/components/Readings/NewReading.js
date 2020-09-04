import React, { Component, Fragment } from "react";
import { Col, Row, Button, Input, Collapse, DatePicker, Tabs } from "antd";
// import { PlusOutlined } from "@ant-design/icons";
import "jodit";
import "jodit/build/jodit.min.css";
// import JoditEditor from "jodit-react";
const { TabPane } = Tabs;
const { TextArea } = Input;
const { Panel } = Collapse;
// const { Option } = Select;

export default class NewReading extends Component {
	constructor(props) {
		super(props);
		this.state = {
			content: "",
		};
	}

	config = {
		height: 388,
		readonly: false, // all options from https://xdsoft.net/jodit/doc/
		uploader: {
			insertImageAsBase64URI: true,
		},
		toolbarButtonSize: "small",
		defaultMode: "1",
		askBeforePasteHTML: false,
		askBeforePasteFromWord: false,
		defaultActionOnPaste: "insert_only_text",
		buttons:
			"bold,strikethrough,underline,italic,eraser,|,ul,ol,|,outdent,indent,|,font,fontsize,brush,paragraph,|,image,table,link,|,align,undo,redo,selectall,|,hr,symbol",
		toolbarAdaptive: false,
		placeholder: "Bible Verse",
	};
	render() {
		// const { previewVisible, previewImage, fileList, previewTitle } = this.state;
		// const uploadButton = (
		// 	<div>
		// 		<PlusOutlined />
		// 		<div style={{ marginTop: 8 }}>Upload</div>
		// 	</div>
		// );
		return (
			<Fragment>
				<div className="site-card-wrapper">
					<h1 className="module-title">Add New Reading</h1>
					<Row gutter={16}>
						<Col span={18}>
							<Input placeholder="Enter title here" className="mt-2" />
							<Input placeholder="Enter theme here" className="mt-2 mb-4" />
							<Tabs defaultActiveKey="1" type="card" size={"small"}>
								<TabPane tab="First Reading" key="1">
									<TextArea autoSize={{ minRows: 10, maxRows: 12 }} placeholder="Bible verse"></TextArea>
								</TabPane>
								<TabPane tab="Second Reading" key="2">
									<TextArea autoSize={{ minRows: 10, maxRows: 12 }} placeholder="Bible verse"></TextArea>
								</TabPane>
								<TabPane tab="Good News" key="3">
									<TextArea autoSize={{ minRows: 10, maxRows: 12 }} placeholder="Bible verse"></TextArea>
								</TabPane>
							</Tabs>
							{/* <JoditEditor 
                           
                                // editorRef={this.setRef}
                                value={this.state.content}
                                config={this.config}
                                // onChange={this.updateContent}
                                // onChange={this.updateContent.bind(this)}
                            /> */}
						</Col>
						<Col span={6}>
							<Collapse defaultActiveKey={["1"]} ghost>
								<Panel header="Publish" footer="Test Footer" key="1">
									<p>
										Status: <b>Draft</b>
									</p>

									<Row gutter={16} className="mt-2">
										<Col span={8}>
											<p>Mass Date</p>
										</Col>
										<Col span={16}>
											<DatePicker style={{ width: "100%" }} onChange={this.handleChange} />
										</Col>
									</Row>

									<div className="acc-footer-panel">
										<Button className="acc-btn btn-default mr-1">Save Draft</Button>
										<Button className="acc-btn btn-warning-fill"> Publish</Button>
									</div>
								</Panel>
							</Collapse>
						</Col>
					</Row>
				</div>
			</Fragment>
		);
	}
}

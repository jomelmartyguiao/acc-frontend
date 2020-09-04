import React, { Component, Fragment } from "react";
import { Col, Row, Modal,Switch , Button, Input, Collapse, Select, Upload } from "antd";
import 'jodit';
import 'jodit/build/jodit.min.css';
// import JoditEditor from "jodit-react";
import TextArea from "antd/lib/input/TextArea";
import uploadcare from 'uploadcare-widget';
import { PlusOutlined } from "@ant-design/icons";

import { dataURLtoFile } from './utils';
// import Uploader from '../Shared/Uploader';

const { Panel } = Collapse;
const { Option } = Select;

function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
export default class NewPost extends Component {
	state = {
		title: '',
		description: '',
		previewVisible: false,
		previewImage: '',
		previewTitle: '',
		fileList: [],
	}

	handleChange = (e) => this.setState({ [e.target.name]: e.target.value })

	handleSubmit = () => {
		const { title, description } = this.state;
		localStorage.setItem('title', title)
		localStorage.setItem('region', true)
		localStorage.setItem('description', description)
	}

  handleCancel = () => this.setState({ previewVisible: false });

	handlePreview = async file => {
		if (!file.url && !file.preview) {
		file.preview = await getBase64(file.originFileObj);
		}

		this.setState({
		previewImage: file.url || file.preview,
		previewVisible: true,
		previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
		});
	};

	handleImage = async({ fileList }) => {
		if(fileList.length === 2){
			let filetoUpload = await getBase64(fileList[1].originFileObj);
			let final = dataURLtoFile(filetoUpload, 'image.jpeg');
			let upload = uploadcare.fileFrom('object', final, {
				publicKey: process.env.REACT_APP_UPLOADCARE
				});
			upload.done(fileInfo => {
				this.handleSave(fileInfo, 1)
			});
		}else{
			let filetoUpload = await getBase64(fileList[0].originFileObj);
			let final = dataURLtoFile(filetoUpload, 'image.jpeg');
			let upload = uploadcare.fileFrom('object', final, {
				publicKey: process.env.REACT_APP_UPLOADCARE
				});
			upload.done(fileInfo => {
				this.handleSave(fileInfo, 2)
			});
		}
		this.setState({ fileList });
	}

  handleSave = ({cdnUrl}, count) => {
    localStorage.setItem(`image${count}`, cdnUrl)
  }

	config = {
		height: 388,
		readonly: false, // all options from https://xdsoft.net/jodit/doc/
		uploader: {
			insertImageAsBase64URI: true
		},
		toolbarButtonSize: "small",
		defaultMode: "1",
		askBeforePasteHTML: false,
		askBeforePasteFromWord: false,
		defaultActionOnPaste: "insert_only_text",
		buttons: "bold,strikethrough,underline,italic,eraser,|,ul,ol,|,outdent,indent,|,font,fontsize,brush,paragraph,|,image,table,link,|,align,undo,redo,selectall,|,hr,symbol",
		toolbarAdaptive: false,
	}
	render() {
		const { previewVisible, previewImage, fileList, previewTitle } = this.state;
		const uploadButton = (
      <div>
          <PlusOutlined />
          <div style={{ marginTop: 8 }}>Upload</div>
      </div>);
		return (
			<Fragment>
				<div className="site-card-wrapper">
					<h1 className="module-title">Add New Post</h1>
					<Row gutter={16}>
						<Col span={18}>
								<Input placeholder="Enter title here" className="mt-2 mb-4" name='title'
									onChange={(e) => this.handleChange(e)} />
								{/* <JoditEditor 
										// editorRef={this.setRef}
										value={this.state.content}
										config={this.config}
										// onChange={this.updateContent}
										// onChange={this.updateContent.bind(this)}
								/> */}
								<TextArea placeholder="Enter description here" style={{ height: '40vh' }} name="description"
									onChange={(e) => this.handleChange(e)} />
								<Upload
									action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
									listType="picture-card"
									fileList={fileList}
									onPreview={this.handlePreview}
									onChange={this.handleImage}
									multiple={true}
									className="mt-3"
									>
									{uploadButton}
								</Upload>
								<Modal
									visible={previewVisible}
									title={previewTitle}
									footer={null}
									onCancel={this.handleCancel}
									>
								<img alt="Upload" style={{ width: '100%' }} src={previewImage} />
								</Modal>
						</Col>
						<Col span={6}>
							<Collapse defaultActiveKey={['1']} ghost>
										<Panel header="Publish" footer="Test Footer"  key="1">
										<p>Status: <b>Draft</b></p>
										<Row gutter={16}>
												<Col span={4}>
														<p>Page: </p>
												</Col>
												<Col span={20}>
													<Select className="" defaultValue="central" style={{ width: '100%' }} onChange={this.handle}>
														<Option value="central">Central</Option>
														<Option value="regionI">Region I</Option>
														<Option value="regionII">Region II</Option>
														<Option value="regionIII">Region III</Option>
													</Select>
												</Col>
										</Row>
											<Row gutter={16} className="mt-3 mb-3">
												<Col span={12}>
												<span>Media Position: </span>
												</Col>
												<Col span={12} className="text-center">
														<Switch checkedChildren="Top" unCheckedChildren="Bottom" defaultChecked className="position-switch"/>
												</Col>
										</Row>
										<div className="acc-footer-panel">
												<Button className="acc-btn btn-default mr-1">Save Draft</Button>
												<Button type="button" className="acc-btn btn-warning-fill" onClick={this.handleSubmit}>Publish</Button>
										</div>
										</Panel>
							</Collapse>
						</Col>
					</Row>
				</div>
			</Fragment>
		)
	}
}

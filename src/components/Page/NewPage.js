import React, { Component, Fragment } from "react";
import { Col, Row, Modal, Button, Input, Collapse, Upload  } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import 'jodit';
import 'jodit/build/jodit.min.css';
const { TextArea } = Input;
const { Panel } = Collapse;
function getBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
export default class NewPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: '',
            previewVisible: false,
            previewImage: '',
            previewTitle: '',
            fileList: [
              
            ],
        }
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

    handleChange = ({ fileList }) => this.setState({ fileList });

   
	// FOR JODIT WYSWG HTML EDITOR
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
        </div>
        );
        return (
           <Fragment>
                <div className="site-card-wrapper">
                    <h1 className="module-title">Add New Page</h1>
                    <Row gutter={16}>
                        <Col span={18}>
                            <Input placeholder="Enter title here" className="mt-2 mb-4"/>
                          
                            <TextArea 
                                autoSize={{ minRows: 10, maxRows: 12 }}
                                placeholder="Enter description"
                                >

                            </TextArea>

                            <Upload
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                listType="picture-card"
                                fileList={fileList}
                                onPreview={this.handlePreview}
                                onChange={this.handleChange}
                                multiple={true}
                                className="mt-3"
                                >
                                {fileList.length >= 1 ? null : uploadButton}
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
                               
                                
                               
                                
                                    
                                
                                <div className="acc-footer-panel">
                                    <Button className="acc-btn btn-warning-fill"> Publish</Button>
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

import React, { PureComponent } from 'react';
import uploadcare from 'uploadcare-widget';
import { PlusOutlined } from "@ant-design/icons";
import { Upload } from "antd";
// import uploadcareTabEffects from 'uploadcare-widget-tab-effects';

class Uploader extends PureComponent {
  static defaultProps = {
    onLoading: () => {},
    crop: 'free',
    effects: ['rotate', 'crop'],
    tabs: ['file', 'camera'],
    instruction: null,
    className: 'btn btn-primary',
    imagesOnly: true,
    imageType: 'image/jpg',
    style: {}
  };

  state = {
    isUploading: false,
    progress: 0,
  };

  handleUpload = (e) => {
    e.preventDefault();
    if (this.state.isUploading) {
      return;
    }

    uploadcare
      .openDialog(null, {
        publicKey: process.env.REACT_APP_UPLOADCARE,
        tabs: this.props.tabs,
        crop: 'free',
        imageOnly: true
      })
      .done((file) => {
        this.props.onLoading(true);
        file.progress(this.handleProgress).done(this.handleDone);
      });
  };

  handleDone = ({ cdnUrl }) => {
    this.props.handleSave(cdnUrl);
  };

  handleProgress = ({ state, progress }) => {
    if (state === 'uploading') {
      this.setState({
        isUploading: true,
        progress: Math.ceil(progress * 100),
      });
    }

    if (state === 'uploaded') {
      this.setState({
        isUploading: true,
        progress: 100,
      });
    }

    if (state === 'ready') {
      this.props.onLoading(false);
      this.setState({
        isUploading: false,
        progress: 0,
      });
    }
  };

  render() {
    const { fileList } = this.props;
    // const { progress, isUploading } = this.state;
    const uploadButton = (
      <div>
          <PlusOutlined />
          <div style={{ marginTop: 8 }}>Upload</div>
      </div>);
    return (
      // <Button onClick={this.handleUpload} data-input-accept-types="image/jpg">
      //   {isUploading ? (
      //     <div>
      //       <span> Uploading ({progress}%)...</span>
      //     </div>
      //     ) : (
      //     <div>{label}</div>
      // )}</Button>
      <Upload
        // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        // onPreview={handlePreview}
        // onChange={handleChange}
        onClick={this.handleUpload}
        multiple={true}
        className="mt-3">
        {uploadButton}
      </Upload>
    );
  }
}

export default Uploader;
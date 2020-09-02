import React, { PureComponent } from 'react';
import uploadcare from 'uploadcare-widget';
import { Button } from "antd";
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
    const { label } = this.props;
    const { progress, isUploading } = this.state;
    return (
      <Button onClick={this.handleUpload} data-input-accept-types="image/jpg">
        {isUploading ? (
          <div>
            <span> Uploading ({progress}%)...</span>
          </div>
          ) : (
          <div>{label}</div>
      )}</Button>
    );
  }
}

export default Uploader;
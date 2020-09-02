import React from 'react';
import Uploader from '../components/Shared/Uploader';

const UploaderContainer = () => {
  const handleSave = (image) => {
    console.log("IMAGE: ", image)
    localStorage.setItem('image', image)
  }

  return(
    <Uploader  handleSave={handleSave} label='Upload Image' />
  )
}
export default UploaderContainer;
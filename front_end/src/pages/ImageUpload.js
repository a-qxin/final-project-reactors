import React from 'react';
import Cropper from 'react-cropper';

const ImageUpload = () => {
  

  return (    
    <div id='listing-image'>
      <Cropper 
       
        src={'https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg'}
        aspectRatio={16 / 9} 
      /> 
    </div>
  );
};


export default ImageUpload;
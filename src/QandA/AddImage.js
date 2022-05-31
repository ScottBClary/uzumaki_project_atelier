import React from 'react';
class AddImage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='image-inputs'>
        <input className='image-input-url' placeholder={'add image url here'}></input><button className='image-add-button' onClick={this.props.uploadImage}>add image</button>
        <input className='image-input-url' placeholder={'add image url here'}></input><button className='image-add-button' onClick={this.props.uploadImage}>add image</button>
        <input className='image-input-url' placeholder={'add image url here'}></input><button className='image-add-button' onClick={this.props.uploadImage}>add image</button>
        <input className='image-input-url' placeholder={'add image url here'}></input><button className='image-add-button' onClick={this.props.uploadImage}>add image</button>
        <input className='image-input-url' placeholder={'add image url here'}></input><button className='image-add-button' onClick={this.props.uploadImage}>add image</button>
      </div>
    );
  }
}

export default AddImage;
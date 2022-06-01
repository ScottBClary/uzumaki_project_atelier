import React from 'react';
class AddImage extends React.Component {
  constructor(props) {
    super(props);
    // this.cbRef = null;
    // this.setCbRef = element => {
    //   this.cbRef = element;
    // };
    this.state = {
      currentPhotos: [],
      currentPhoto: {
        id: 0,
        url: ''
      },
      addingThumbnail: false
    };
    this.makeThumbnail = this.makeThumbnail.bind(this);
    // this.liftPhotoState = this.liftPhotoState.bind(this);
    // this.combo = this.combo.bind(this);
    this.addPhotoInfo = this.addPhotoInfo.bind(this);

  }
  addPhotoInfo() {
    this.setState({
      currentPhoto: {
        id: this.state.currentPhoto.id + 1,
        url: event.target.value
      }
    });
  }
  makeThumbnail() {
    this.setState({
      currentPhotos: this.state.currentPhotos.concat(this.state.currentPhoto),
      addingThumbnail: true
    });

    this.props.photos.push(this.state.currentPhoto);

    this.setState({
      currentPhoto: {
        id: this.state.currentPhoto.id,
        url: ''
      }
    });
  }
  render() {
    return (
      <div className='image-modal'>
        {this.state.addingThumbnail ? <div>thumbnail here</div> : null}
        <input key={this.state.currentPhoto.url} className='image-input-url' placeholder={'add image url here'} onInput={this.addPhotoInfo}></input><button className='image-add-button' onClick={this.makeThumbnail}>add image</button>
        <button>Done</button>
        {/* <input className='image-input-url' placeholder={'add image url here'}></input><button className='image-add-button' onClick={this.uploadImage()}>add image</button>
        <input className='image-input-url' placeholder={'add image url here'}></input><button className='image-add-button' onClick={this.uploadImage()}>add image</button>
        <input className='image-input-url' placeholder={'add image url here'}></input><button className='image-add-button' onClick={this.uploadImage()}>add image</button>
        <input className='image-input-url' placeholder={'add image url here'}></input><button className='image-add-button' onClick={this.uploadImage()}>add image</button> */}
      </div>
    );
  }
}

export default AddImage;
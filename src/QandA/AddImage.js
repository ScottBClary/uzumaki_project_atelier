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
      addingThumbnail1: false,
      addingThumbnail2: false,
      addingThumbnail3: false,
      addingThumbnail4: false,
      addingThumbnail5: false,
      thumbnailCount: 1

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
    event.preventDefault();
    var currentThumbnail = 'addingThumbnail' + this.state.thumbnailCount;
    this.setState({
      currentPhotos: this.state.currentPhotos.concat(this.state.currentPhoto),
      [currentThumbnail]: true,
      thumbnailCount: this.state.thumbnailCount + 1
    });

    this.props.photos.push(this.state.currentPhoto);

    this.setState({
      currentPhoto: {
        id: this.state.currentPhoto.id,
        url: ''
      },
    });

  }
  render() {
    return (
      <div className='image-modal'>
{/*
          {this.state.addingThumbnail1 ? <div className='thumbnail'>image here</div> : null}
          {this.state.addingThumbnail2 ? <div className='thumbnail'>image here</div> : null} */}
          {this.state.addingThumbnail3 ? <img src={{uri: event.target.value}} alt=''/> : null}
          {this.state.addingThumbnail4 ? <img src={{uri: this.state.currentPhoto.url}}/> : null}
          {this.state.addingThumbnail5 ? <div className='thumbnail'><img src={this.state.currentPhoto.url}/></div> : null}

        <input value={this.state.currentPhoto.url || ''} className='image-input-url' placeholder={'add image url here'} onInput={this.addPhotoInfo}></input>
        <button className='image-add-button' onClick={this.makeThumbnail}>add image</button>
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
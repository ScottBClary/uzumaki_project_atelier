import React from 'react';
import Thumbnails from './Thumbnails';
import AddAModal from './AddAModal.js'

class AddImageModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPhotos: [],
      currentPhoto: {
        id: 0,
        url: ''
      },
      enoughImages: 0

    };
    this.makeThumbnail = this.makeThumbnail.bind(this);
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

    var otherPhotos = this.state.currentPhotos.concat(this.state.currentPhoto);

    this.setState({
      currentPhotos: otherPhotos,
      enoughImages: this.state.enoughImages + 1
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
        <Thumbnails currentPhotos={this.state.currentPhotos} photoInvalid={this.props.photoInvalid}/>
        {this.state.enoughImages === 5 ? null : <input value={this.state.currentPhoto.url || ''} className='image-input-url' placeholder={'add image url here'} onInput={this.addPhotoInfo}></input>}
        {this.state.enoughImages === 5 ? null : <button className='image-add-button' onClick={this.makeThumbnail}>add image</button>}
        <button onClick={(e) => this.props.closeModal(e)}>Done</button>
      </div>
    );
  }
}

export default AddImageModal;
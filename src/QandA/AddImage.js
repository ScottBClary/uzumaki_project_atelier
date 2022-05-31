class AddImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [
        {
          id: 0,
          url: ''
        }
      ]
    };
    this.uploadImage = this.uploadImage.bind(this);
  }

  uploadImage() {
    this.setState((prevState) => {
      return {
        photos: [...prevState.photos, {
          id: prevState + 1,
          url: event.target.value
        }]
      };
    });
  }

  render() {
    let images = [];
    return (
      <div className='image-inputs'>
        <input className='image-input-url' placeholder={'add image url here'}></input><button className='image-add-button' onClick={this.uploadImage}>add image</button>
        <input className='image-input-url' placeholder={'add image url here'}></input><button className='image-add-button' onClick={this.uploadImage}>add image</button>
        <input className='image-input-url' placeholder={'add image url here'}></input><button className='image-add-button' onClick={this.uploadImage}>add image</button>
        <input className='image-input-url' placeholder={'add image url here'}></input><button className='image-add-button' onClick={this.uploadImage}>add image</button>
        <input className='image-input-url' placeholder={'add image url here'}></input><button className='image-add-button' onClick={this.uploadImage}>add image</button>
      </div>
    );
  }
}

export default AddImage;
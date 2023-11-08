import { Component } from 'react';

import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';

import { Loader } from '../Loader/Loader';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import { fetchImages } from 'components/Api';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
    error: false,
  };



  async componentDidMount() {
    this.searchImages()
    

  }
  

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      await this.searchImages();
    }
  }

  searchImages = async () => {
    const { query, page } = this.state;
    try {
      this.setState({ loading: true, error: false });
      const getImages = await fetchImages(query, page);
      this.setState({ images: getImages.data.hits });
    } catch (error) {
      this.setState({ error: true });
      console.error('something went wrong, please reload this page ', error);
    } finally {
      this.setState({ loading: false });
    }
  }





  
  handleLoadMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  handleSearch = (query) => {
    this.setState({ query, page: 1, images: [] });
  };

  handleImageClick = (imageURL) => {
    this.setState({ showModal: true, selectedImage: imageURL });
  };


  render() {
    const { loading, error, images } = this.state;


    return (
      <>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery images={images} />
        <Loader loading={loading} error={error} />
        <Button onClick={this.handleLoadMore} />
        <Modal />
      </>
    )
  }
}


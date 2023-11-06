import { Component } from 'react';
import axios from 'axios';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
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


  
  async componentDidMount(query) {
    
    try {
      this.setState({ loading: true, error: false });
      const handleImages = await fetchImages();
      this.setState({ images: handleImages })

    } catch (error) {
        this.setState({ error: true });
        console.error('something went wrong, please reload this page ', error);
      } finally {
         this.setState({ loading: false });
       }
    
   }
  
  componentDidUpdate(prevProps, prevState) { 
  }
  handleSearch = (query) => {
    
    console.log("Search query:", query);
  };
  
 
 
 render() {
    
    const { loading, error } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSearch} />
        <ImageGallery />
        <ImageGalleryItem/>
        <Loader loading={loading} error={error} />
        <Button />
        <Modal/>
      </>
    )
  }
}


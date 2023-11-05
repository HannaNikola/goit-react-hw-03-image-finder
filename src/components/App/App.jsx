import { Component } from 'react';

import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Loader } from '../Loader/Loader';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';
import { fetchQuizzes } from 'components/Api';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
    error: false,
  };

  hendleSearchSubmit = async (query) => {
    
    try { 
    
      this.setState({ loading: true , error: false});
      const fethcImages = await fetchQuizzes(query);
      this.setState({ images: fethcImages })
    
      
    }
    catch (error) {
      this.setState({ error: true });
      console.error('something went wrong, please reload this page ', error);
    } finally {
      this.setState({ loading: false });
    }
  }
 







  render() {
    
    const { loading, error } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSearchSubmit} />
        <ImageGallery />
        <ImageGalleryItem/>
        <Loader loading={loading} error={error} />
        <Button />
        <Modal/>
      </>
    )
  }
}


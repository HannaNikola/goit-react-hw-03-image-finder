import { Component } from 'react';
import axios from 'axios';
import { Searchbar } from '../Searchbar/Searchbar';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Loader } from '../Loader/Loader';
import { Button } from '../Button/Button';
import { Modal } from '../Modal/Modal';


export class App extends Component {
  state = {
    query: '',
    images: '',
    loading: false,
    error: false,
  };
  // const API_KEY = '39227320 - d50c4892bd50959f664d77ea8';

  render() {
    return (
      <>
        <Searchbar />
        <ImageGallery />
        <Loader />
        <Button />
        <Modal/>
      </>
    )
  }
}


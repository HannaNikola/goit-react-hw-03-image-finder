
import { GalleryIitem } from "./ImageGalleryItem.styled";
import { Component } from "react";
import Modal from 'react-modal';
    
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
};
Modal.setAppElement('#root');

export class ImageGalleryItem extends Component {

    state = {
        isModalOpen: false, 
    }
    componentDidMount() {
        window.addEventListener('keydown', this.hendalKeyDown )
    }

    componentWillUnmount() {
        window.addEventListener('keydown', this.hendalKeyDown)
    }
    openModal = () => {
        this.setState({ isModalOpen: true });
    };

    closeModal = () => {
        this.setState({isModalOpen: false})
    }
    hendalKeyDown = (event) => {
        if (event.code === 'Escape' && this.state.isModalOpen) {
            this.closeModal();
     }
 }

    render() {
        const { isModalOpen } = this.state
        const { image } = this.props
        
        return (
            <GalleryIitem className="GalleryItem">
                <img src={image.webformatURL} alt="" onClick={this.openModal} />
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Large Image Modal"
                >
                    <img src={image.webformatURL} alt="description" />
                    
                </Modal>
            </GalleryIitem>
        );
    }

}




// export const ImageGalleryItem = ({ image }) => {
//     return (
//         <GalleryIitem className="GalleryItem">
//             <img src={image.webformatURL} alt="" />
//             <Modal
//                 isOpen={true}
//                 // onRequestClose={closeModal}
//                 style={customStyles}
//                 contentLabel="Example Modal"
//             >
//                 <div>I am a modal</div>
                
//             </Modal>
//         </GalleryIitem>
//     )
// }


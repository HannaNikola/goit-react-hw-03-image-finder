import { Component } from "react";
import { GalleryIitem } from "./ImageGalleryItem.styled";



// export class ImageGalleryItem extends Component{
//     state = {
//         isModalOpen: false,
//     }
//     render() {
//         return (
//             <GalleryIitem className="GalleryItem">
//                 <img src={image.webformatURL} alt="" />
//             </GalleryIitem>
//         )
//     }
// }
    
    
    
export const ImageGalleryItem = ({ image }) => {
    return (
        <GalleryIitem className="GalleryItem">
            <img src={image.webformatURL} alt="" />
        </GalleryIitem>
    )
}

import { GalleryIitem } from "./ImageGalleryItem.styled";

    
    
export const ImageGalleryItem = ({ image }) => {
    return (
        <GalleryIitem className="GalleryItem">
            <img src={image.webformatURL} alt="" />
        </GalleryIitem>
    )
}
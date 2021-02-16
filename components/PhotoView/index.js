import React,{useState} from 'react'
import PropTypes from 'prop-types'
import 'react-bnb-gallery/dist/style.css'
import ReactBnbGallery from 'react-bnb-gallery';

const PhotoView = ({ photos, onClose }) => {

    const [open, setOpen] = useState(true)

    function closePhotoView() {
        setOpen(!open);
        onClose(true)
    }

    return (
        <ReactBnbGallery
            show={open}
            photos={photos}
            onClose={() => closePhotoView()}
        />
    )
}

PhotoView.propTypes = {
    photos: PropTypes.array.isRequired,
    onClose: PropTypes.func.isRequired
}

export default PhotoView


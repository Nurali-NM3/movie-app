import React, {useState} from 'react';
import ModalVideo from 'react-modal-video'
import './Video.css'
const Video = () => {
    const [isOpen, setOpen] = useState(true)
    return (
        <React.Fragment>
            <ModalVideo channel='youtube' autoplay={0} autoplay={true} mute={0} loop={0} isOpen={isOpen} videoId="KlyknsTJk0w"  />
        </React.Fragment>

    )
};

export default Video;
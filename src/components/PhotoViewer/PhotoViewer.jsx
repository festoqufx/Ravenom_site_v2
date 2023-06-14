import React, { useEffect, useState, useCallback } from "react";
import './photoviewer.css';
import './photos.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";



function PhotoViewer() {
    useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 200,
          easing: 'ease-in-sine',
          delay: 10,
         });
      }, []);

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };
  return (
    <section data-aos="fade-down-right" id="Gallery">
    <h2 style={{ textAlign: 'center'}}>Gallery</h2>
    <p>&nbsp;</p>

    <div className="container">
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </div>


    </section>
  )
}

export default PhotoViewer




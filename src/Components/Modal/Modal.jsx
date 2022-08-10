import React from 'react'
import Portal from '../Portal/Portal'
import './Modal.css'

const Modal = ({isOpen, setIsopen, image, title, releaseDate, voteAverage, popularity, overview }) => {
    if(!isOpen){
        return null
    }
  return (

    <Portal>
        <div className='modal'>
          <div className='modal-content'>
            <button onClick={() => setIsopen(false)} className='modal-button'>&#x2715;</button>
          <img className='modal-image' 
                src={image} 
                alt={title + 'poster'}/>
            <div className='modal-details'>
                <div className='title-container'>
                  <h3 className='modal-title'>{title}</h3>
                </div>
                <div className='modal-sub'>
                  <p className='sub-P'><small>Release Date: {releaseDate}</small></p>
                  <p className='sub-P'><small>Rating: {voteAverage}</small></p>
                  <p className='sub-P'><small>Popularity: {popularity}</small></p>
                  <p className='modal-desc'>{overview}</p>
                </div>
            </div>
          </div>
        </div>
    </Portal>
  )
}

export default Modal
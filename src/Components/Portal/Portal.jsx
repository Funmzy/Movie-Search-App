// import React from 'react'
import {createPortal} from 'react-dom'

const Portal =({children, wrapperId='wrapper'}) =>{
  return createPortal(children, document.getElementById(wrapperId))
}

export default Portal
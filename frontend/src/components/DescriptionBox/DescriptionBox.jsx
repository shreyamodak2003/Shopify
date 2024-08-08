import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (123)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform that faciliates the buying and selling of products or services over the internet. it serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers and conduct transactions without the need for a physical present. E-commerce websites have gain immense popularity due to their convenience, accessibility and their global reach they offer. </p>
        <p>E-commerce websites typically display products or services along with detailed descriptons, images, prices and any available variations (eg., sizes, colours). Each product usually has its own dedicated page with relevant information. </p>
        
      </div>
    </div>
  )
}

export default DescriptionBox

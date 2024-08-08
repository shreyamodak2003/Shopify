// import React from 'react'
// import './Breadcrum.css'
// import arrow_icon from '../Assets/breadcrum_arrow.png'

// const Breadcrum = (props) => {
//     const {product} = props;
//   return (
//     <div className='breadcrum'>
//       HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
//     </div>
//   )
// }

// export default Breadcrum

import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const { product } = props;

    if (!product || !product.category || !product.name) {
        console.error('Product prop is missing or incomplete', product);
        return <div className='breadcrum'>Loading...</div>;
    }

    return (
        <div className='breadcrum'>
            HOME <img src={arrow_icon} alt="arrow icon" /> SHOP <img src={arrow_icon} alt="arrow icon" /> {product?.category} <img src={arrow_icon} alt="arrow icon" /> {product?.name}
        </div>
    )
}

export default Breadcrum;

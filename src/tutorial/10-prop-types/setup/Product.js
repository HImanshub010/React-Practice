import React from 'react';
import PropTypes from 'prop-types'
import defaultImage from './../../../assets/default-image.jpeg'

const Product = ({image, name, price}) => {
  const url = image && image.url
  return <article className='product'>
      <img src={url || defaultImage} alt={image}/>
      <h4>{name || 'default name'}</h4>
      <h3>{price || 3.99}</h3>
    </article>;
};


Product.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  img: PropTypes.object.isRequired,
}

// Product.defaultProps = {
//   name: 'default Props',
//   price: 3.99,
//   image: defaultImage
// }

export default Product;

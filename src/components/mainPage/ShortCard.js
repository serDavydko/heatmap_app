import React from 'react';
import { IMG_FOLDER } from '../../APIs/consts';

const ShortCard = ({ post }) => (
  <>
    <img
      className="Card__img"
      src={`${IMG_FOLDER}${post.img}`}
      alt={post.title}
    />
    <h3 className="Card__title">{post.title}</h3>
    <div className="Rate_container">Hello</div>
  </>
);

export default ShortCard;

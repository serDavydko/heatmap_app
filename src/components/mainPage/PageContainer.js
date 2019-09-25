import React from 'react';
import { Link } from 'react-router-dom';

import ShortCard from './ShortCard';

const PageContainer = (props) => {

  return (
    <div className="content">
    <ul className="content__container">
      { props.posts.map(post => (
        <Link className="Card__link" to={`${props.match.path}${post.id}`}>
          <li className="ShortCard">
            <ShortCard post={post} />
          </li>
        </Link>
      ))}
    </ul>
    </div>
  );
};

export default PageContainer;

import React, { useState, useEffect } from 'react';
import { getDetails } from '../../APIs/apiCallFunctions';

import FullCard from './FullCard';

const DetailContainer = (props) => {
  const [details, setDetails] = useState([]);
  console.log(props.match.params.id);
  const resulting = props.posts.find(item =>String(item.id)===String(props.match.params.id));
  useEffect(() => {

    (async() => {
        
      const postsFromServer = await getDetails(props.match.params.id);
      setDetails(postsFromServer);
    })();
  }, []);



  console.log(details);
  console.log(resulting);
  return (
    <div className="Full-card">
      <FullCard props={props}  details={details}/>
    </div>
  );
};

export default DetailContainer;

import React from 'react';
import error from '../styles/images/error.jpg';

function Error() {
  return (
    <div
      className="error-pic"
      style={{ backgroundImage: `url(${error})` }}
    >
      <h1> 404 </h1>
      <h2> Something went wrong</h2>
    </div>
  );
}

export default Error;

import React from 'react';

function Business({ data }){
  return (
    <div className="business">
      <div className="businessImg">
        <img src={data.imageSrc} alt={data.name} />
      </div>
      <h2>{data.name}</h2>
      <p>{data.address}</p>
      <p>{data.city}, {data.state} {data.zipCode}</p>
      <p>{data.category}</p>
      <p>Rating: {data.rating}</p>
      <p>{data.reviewCount} reviews</p>
    </div>
  );
}

export default Business;
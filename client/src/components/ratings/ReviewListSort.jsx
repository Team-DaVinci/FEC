import React, { useState, useContext } from 'react';

const ReviewListSort = ({ numReviews, getSortedReviews }) => {

  const onChange = () => {
    const sortBy = document.getElementById("sort-reviews").value;
    getSortedReviews(sortBy, numReviews);
  }

  return (
    <div>
      <b>
        <span>{`${numReviews} reviews, sort by `}</span>
      </b>
      <select onChange={ () => onChange() } id="sort-reviews" defaultValue={'DEFAULT'}>
        <option value='relevant'>relevance</option>
        <option value='newest'>newest</option>
        <option value='helpful'>helpfulness</option>
      </select>
    </div>
  );
}

export default ReviewListSort;

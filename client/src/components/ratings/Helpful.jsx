import React, { useState, useContext } from 'react';
import axios from 'axios';

const Helpful = ({ yesCount, reviewId }) => {

  const [clicked, setClicked] = useState(false);
  const [yesCounter, setYesCounter] = useState(yesCount);
  const [noCounter, setNoCounter] = useState(0);

  const updateYesCounter = (e) => {
    if (!clicked) {
      axios.put('/review-helpful', null, {
        headers: {
          'review-id': reviewId
        }
      })
      .then( (res) => {
        setYesCounter(yesCounter + 1);
        setClicked(true);
        e.target.style.fontWeight = 'bold';
      })
      .catch( (err) => {
        console.log('Error updating helpfulness');
      })
    }
  }

  const updateNoCounter = (e) => {
    if (!clicked) {
      setNoCounter(noCounter + 1);
      setClicked(true);
      e.target.style.fontWeight = 'bold';
    }
  }

  return (
    <div>
      <p style={{ "display": "inline" }}>Was this review helpful? </p>
      <a href='javascript:;' className='helpful-count' onClick={ (e) => updateYesCounter(e) }>Yes</a>
      <p style={{ "display": "inline" }}> ({ yesCounter }) | </p>
      <a href='javascript:;' className='helpful-count' onClick={ (e) => updateNoCounter(e) }>No</a>
      <p style={{ "display": "inline" }}> ({ noCounter })</p>
    </div>
  );
}

export default Helpful;
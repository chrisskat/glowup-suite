import { useState } from "react";
import { Link } from 'react-router-dom';


export default function ReviewItem(props) {
  return (
      <div className="item">
        <h1>{props.service}</h1>
        <p>{props.comment}</p>
        <p>{props.rating}</p>

      </div>
  );
}
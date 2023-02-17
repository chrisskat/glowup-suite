


export default function ReviewItem(reviews) {
  return (
      <div className="item">
        <h1>{reviews.service}</h1>
        <p>{reviews.comment}</p>
        <p>{reviews.rating}</p>

      </div>
  );
}
import { Link } from "react-router-dom";

export default function ServiceCard(props) {
  return (
    <>
      <Link to={`/services/${props.service.title}`} className="service-link">
        <div
          style={{
            background: `url(${props.service.posterPath}) no-repeat center center`,
            WebkitBackgroundSize: "cover"
          }}
          className="item-card"
        >
          <div className="title">
            <h1>{props.service.title}</h1>
          </div>
        </div>
      </Link>
    </>
  );
}

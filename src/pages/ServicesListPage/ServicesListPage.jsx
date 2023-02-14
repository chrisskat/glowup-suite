import ServiceCard from "../../components/ServiceCard/ServiceCard";
import "./ServicesListPage.css";

export default function ServicesListPage(props) {
  return (
    <div>
      <h1>GLOW UP SUITE</h1>
      <h2>Services</h2>
      <div className="container">
        {props.services.map((service) => {
          return <ServiceCard key={service.title} service={service} />;
        })}
      </div>
    </div>
  );
}
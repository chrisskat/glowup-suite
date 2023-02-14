import { useParams } from "react-router-dom";
import "./ServiceDetailPage.css";

export default function ServiceDetailPage({ services }) {
  let { serviceName } = useParams();

  let service = services.find((service) => service.title === serviceName);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="flex">
      <div>
        <h1>{service.title}</h1>
        <ul>
          <div className="ul-title">
            {service.list}
            {service.price}
          </div>
          <li>{service.description}</li>
          <li>{service.additional}</li>
          <li>{service.additionalA}</li>
        </ul>
        <ul>
          <div className="ul-title">
            {service.list2}
            {service.price2}
          </div>
          <li>{service.description2}</li>
          <li>{service.additional2}</li>
          <li>{service.additional2B}</li>
          <li>{service.additional2C}</li>
          <li>{service.additional2D}</li>
          <li>{service.additional2E}</li>
          <li>{service.additional2F}</li>
          <li>{service.additional2G}</li>
          <li>{service.additional2H}</li>
          <li>{service.additional2I}</li>
        </ul>
        <ul>
          <div className="ul-title">
            {service.list3}
            {service.price3}
          </div>
          <li>{service.description3}</li>
          <li>{service.description3A}</li>
          <li>{service.additional3}</li>
        </ul>
        <ul>
          <div className="ul-title">
            {service.list4}
            {service.price4}
          </div>
          <li>{service.description4}</li>
          <li>{service.description4A}</li>
          <li>{service.description4B}</li>
          <li>{service.description4C}</li>
          <li>{service.description4D}</li>
          <li>{service.description4E}</li>
          <li>{service.description4F}</li>
          <li>{service.description4G}</li>
          <li>{service.description4H}</li>
          <li>{service.description4I}</li>
          <li>{service.additional4}</li>
        </ul>
        <ul>
          <div className="ul-title">
            {service.list5}
            {service.price5}
          </div>
          <li>{service.description5}</li>
          <li>{service.additional5}</li>
        </ul>
        <ul>
          <div className="ul-title">
            {service.list6}
            {service.price6}
          </div>
          <li>{service.description6}</li>
          <li>{service.description6A}</li>
          <li>{service.description6B}</li>
          <li>{service.description6C}</li>
          <li>{service.description6D}</li>
          <li>{service.description6E}</li>
          <li>{service.description6F}</li>
          <li>{service.additional6}</li>
          <li>{service.additional6b}</li>
        </ul>
        <ul>
          <div className="ul-title">
            {service.list7}
            {service.price7}
          </div>
          <li>{service.description7}</li>
          <li>{service.additional7}</li>
        </ul>
        <ul>
          <div className="ul-title">
            {service.list8}
            {service.price8}
          </div>
          <li>{service.description8}</li>
          <li>{service.additional8}</li>
        </ul>
        <ul>
          <div className="ul-title">
            {service.list9}
            {service.price9}
          </div>
          <li>{service.description9}</li>
          <li>{service.additional9}</li>
        </ul>
      </div>
      <img src={`${service.posterPath}`} alt="" />
    </div>
  );
}
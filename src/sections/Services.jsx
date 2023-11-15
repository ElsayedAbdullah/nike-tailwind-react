import ServiceCard from "../components/ServiceCard.jsx";
import { services } from "../constants/index.js";

const Services = () => {
  return (
    <div className="max-container flex flex-col sm:flex-row flex-wrap gap-9">
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </div>
  );
};

export default Services;

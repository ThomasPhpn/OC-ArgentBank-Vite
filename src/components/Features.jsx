import FeatureItem from "./FeatureItem";
import featuresData from "./featuresData.json";

const Features = () => {
  return (
    <section className="flex flex-col md:flex-row">
      {featuresData.map((feature, index) => (
        <div className="flex-1" key={index}>
          <FeatureItem
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        </div>
      ))}
    </section>
  );
};

export default Features;

// eslint-disable-next-line react/prop-types
const FeatureItem = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center p-10">
      <img
        src={icon}
        alt="Feature Icon"
        className="w-[160px] border-8 border-customGreen rounded-full p-4"
      />
      <h3 className="text-xl font-bold mt-4">{title}</h3>
      <p className="text-gray-700 text-center mt-3">{description}</p>
    </div>
  );
};

export default FeatureItem;

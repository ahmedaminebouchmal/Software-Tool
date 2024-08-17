import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="relative mt-20 bg-shining">
      <div className="text-center">
        <span className="inline-block bg-neutral-900 text-primary-color rounded-full h-6 text-sm font-medium px-2 py-1 uppercase relative overflow-hidden">
          <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-black opacity-50 animate-slide">
            &nbsp;
          </span>
          Funktionen
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide text-primary-color">
          <span className="bg-gradient-text">
            Einfaches Erstellen Ihrer Softwareprojekte
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap justify-center mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
            <div className="flex p-6 bg-neutral-900 border border-neutral-800 shadow-custom rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="text-primary-color mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full shadow-md shadow-primary-color/40">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl text-neutral-200">{feature.text}</h5>
                <p className="text-md text-neutral-400">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;

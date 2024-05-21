import { Helmet } from "react-helmet";

const About = () => {
  return (
    <div className="min-h-screen text-white">
      <Helmet>
        <title>About</title>
      </Helmet>
      <div className="lg:flex lg:justify-evenly items-center lg:py-16 px-4 lg:px-0">
        <div className="lg:w-1/2">
          <p className="hidden lg:block mt-10 text-4xl lg:text-6xl font-bold leading-normal lg:leading-snug mx-4 lg:mx-0">
            Our Vision is <br />
            <span className="bg-gradient-to-r from-cyan-300 to-indigo-500 text-transparent bg-clip-text">
              Automated AI
            </span>{" "}
            Healthcare <br /> Solution
          </p>
        </div>
        <div className="mt-8 lg:mt-0">
          <img
            src="ai-health.svg"
            alt="MediTech Image"
            className="w-full max-w-2xl mx-auto lg:mx-0"
          />
        </div>
        <p className="lg:hidden mt-10 text-3xl leading-normal text-center font-bold mx-4">
          Our Vision is{" "}
          <span className="bg-gradient-to-r from-cyan-300 to-indigo-500 text-transparent bg-clip-text">
            Automated AI
          </span>{" "}
          Healthcare Solution
        </p>
      </div>
    </div>
  );
};

export default About;

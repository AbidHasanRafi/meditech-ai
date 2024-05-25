import { Helmet } from "react-helmet";
import DiabetesPrediction from "./DiabetesPrediction";

const Analyzer = () => {
  return (
    <div>
      <Helmet>
        <title>Analyzer</title>
      </Helmet>
      <DiabetesPrediction />
    </div>
  );
};

export default Analyzer;

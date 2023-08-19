import parse from "html-react-parser";
import PropTypes from "prop-types";

export default function Freebie({ freebie, description }) {
  return (
    <div className="pt-2 lg:max-w-[600px]">
      <h2 className="md:hidden font-bold text-center">{freebie}</h2>
      <div className="bg-gray-200 p-2 md:p-4 lg:p-8 rounded-xl md:rounded-[32px] h-[120px] md:h-[200px] lg:h-[275px] flex items-center justify-center md:justify-start">
        <p className="font-bold text-[0.85rem] md:text-xl lg:text-3xl ">
          {parse(description)}
        </p>
      </div>
    </div>
  );
}

Freebie.propTypes = {
  freebie: PropTypes.string,
  description: PropTypes.string,
};

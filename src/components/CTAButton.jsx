import PropTypes from "prop-types";

export default function CTAButton({ text, btnId }) {
  return (
    <div className="flex justify-start items-center bg-white w-3/5 rounded-xl h-12 gap-x-5">
      <div className="w-8 h-8 ml-16 bg-slate-400 rounded-full flex items-center justify-center">
        {btnId}
      </div>
      <div className="">{text}</div>
    </div>
  );
}

CTAButton.propTypes = {
  text: PropTypes.string,
  btnId: PropTypes.string,
};

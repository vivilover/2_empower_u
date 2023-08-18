import CTAButton from './CTAButton.jsx';
import PlaceHolderImg from '../assets/logo_orange.png';

export default function CallToAction() {
  return (
    <div className="grid grid-cols-2 h-4/10 bg-sky-200">
      <div className="col-span-1 flex flex-col items-center justify-center gap-y-6">
        <CTAButton
          text="I want 1:1 coaching sessions"
          btnId="A"
        />
        <CTAButton
          text="I want subscribe to Newsletter"
          btnId="B"
        />
        <CTAButton
          text="I want to support you"
          btnId="C"
        />
      </div>
      <div className="col-span-1 max-h-full">
        <img
          src={PlaceHolderImg}
          alt="Placeholder Image of Pastor DeLoach"
          className="max-h-96 ml-20" />
      </div>
    </div>
  )
}
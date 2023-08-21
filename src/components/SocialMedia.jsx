import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faSquareTwitter, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPodcast } from '@fortawesome/free-solid-svg-icons';
import PodBeanIcon from '../assets/podbean_icon.png';

export default function SocialMedia() {
  const fbIcon = <FontAwesomeIcon icon={faSquareFacebook} className="text-3xl" />;
  const twitterIcon = <FontAwesomeIcon icon={faSquareTwitter} className="text-3xl" />;
  const instaIcon = <FontAwesomeIcon icon={faSquareInstagram} className="text-3xl" />;
  const podcastIcon = <FontAwesomeIcon icon={faPodcast} className="text-3xl" />;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="font-semibold text-2xl text-center w-4/12 border-b-2 border-slate-300 py-3">Join our 1.2K followers now</div>
      <div className="flex justify-center gap-x-1.5 w-4/12 pt-2">
        <div>{fbIcon}</div>
        <div>{twitterIcon}</div>
        <div>{instaIcon}</div>
        <div>
          <img
            src={PodBeanIcon}
            alt="Podbean App Logo"
            className="logo w-8"
          />
        </div>
        <div>{podcastIcon}</div>
      </div>
    </div>
  );
}
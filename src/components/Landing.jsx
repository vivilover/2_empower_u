import CallToAction from "./CallToAction";
import Header from "./Header";
import Freebies from "./Freebies";

export default function Landing() {
  return (
    <div className="w-screen h-screen overlfow-auto">
      <Header />
      <CallToAction />
      <Freebies />
    </div>
  );
}

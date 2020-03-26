import * as React from "react";
import { Link } from "react-router-dom";
import Slider from "infinite-react-carousel";
import Button from "./Button";
import WizardVideo from "./WizardVideo";
import "../css/OnboardingPage.css";
import wizard1 from "../assets/videos/wizard-01.mp4";
import wizard2 from "../assets/videos/wizard-02.mp4";
import wizard3 from "../assets/videos/wizard-03.mp4";

export default function OnboardingPage() {
  return (
    <div className="OnboardingPage">
      <h2 className="OnboardPage-title">Welcome to Valid Chess Moves!</h2>
      <h4 className="OnboardPage-subtitle">
        Before we get started, watch the following videos to learn more about
        the application.
      </h4>
      <div className="OnboardingPage-carouselContainer">
        <Slider arrows={false} dots slidesPerRow={1}>
          <WizardVideo
            autoPlay={true}
            videoSrc={wizard1}
            legend="1 - Select the knight initial position"
          />
          <WizardVideo
            videoSrc={wizard2}
            legend="2 - Calculate all the valid moves for the chosen position"
          />
          <WizardVideo
            videoSrc={wizard3}
            legend="3 - Select a new position to restart"
          />
        </Slider>
      </div>

      <Link to="/chess-board">
        <Button> Get started! </Button>
      </Link>
    </div>
  );
}

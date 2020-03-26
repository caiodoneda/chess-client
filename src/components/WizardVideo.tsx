import * as React from "react";
import "../css/WizardVideo.css";

interface WizardVideoProps {
  legend: string;
  videoSrc: string;
  videoType: string;
  autoPlay: boolean;
  muted: boolean;
  controls: boolean;
}

WizardVideo.defaultProps = {
  videoType: "video/mp4",
  autoPlay: false,
  muted: true,
  controls: true
};

export default function WizardVideo(props: WizardVideoProps) {
  return (
    <div className="WizardVideo">
      <p className="WizardVideo-legend">{props.legend}</p>
      <video
        controls={props.controls}
        autoPlay={props.autoPlay}
        muted={props.muted}
        className="WizardVideo-video"
      >
        <source src={props.videoSrc} type={props.videoType} />
      </video>
    </div>
  );
}

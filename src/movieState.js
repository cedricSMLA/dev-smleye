// Import Images
import clemence_pierre_1 from "./img/Mariages/clemence_pierre/A7402291.jpg";
import goodtimes from "./img/goodtimes-small.png";
import theracer from "./img/theracer-small.png";
import goodtimes2 from "./img/good-times2.jpg";
import theracer2 from "./img/the-racer2.jpg";

export const MovieState = () => {
  return [
    {
      title: "Clémence & Pierre",
      mainImg: clemence_pierre_1,
      secondaryImg:
        "https://www.dropbox.com/scl/fi/n478tyzo9uh2make49mqm/teaser_1920_1080-Copier-01.mp4?rlkey=9npvniijwf7p59yfokld2ue66&st=a6ra9gci&dl=1", // link to video ID
      isVideo: true, // Indicates that this is a video
      url: "/portfolio/clemence_pierre",
    },
    {
      title: "Good Times",
      mainImg: goodtimes,
      url: "/portfolio/good-times",
      secondaryImg: goodtimes2,
    },
    {
      title: "Good Times",
      mainImg: goodtimes,
      url: "/portfolio/cdo",
      secondaryImg: goodtimes2,
    },
    {
      title: "Merrick",
      mainImg:
        "https://www.dropbox.com/scl/fi/ii0547h52uh5v2qwk9nyy/A7405724-modifi.jpg?rlkey=0qn1j8p9l3bs3n1k5pct554lo&st=j57phvnu&dl=1",
      url: "/portfolio/merrick",
      secondaryImg: theracer2,
    },
    {
      title: "The Racer",
      mainImg: theracer,
      url: "/portfolio/the-racer",
      secondaryImg: theracer2,
    },
  ];
};

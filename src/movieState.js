//Import Images
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
        "https://www.dropbox.com/scl/fi/n478tyzo9uh2make49mqm/teaser_1920_1080-Copier-01.mp4?rlkey=9npvniijwf7p59yfokld2ue66&st=a6ra9gci&dl=1", // YouTube video ID
      isVideo: true, // Indicates that this is a video
      url: "/portfolio/clemence_pierre",
      awards: [
        {
          title: "Un mariage inoubliable",
          description:
            "“Le début d'une belle histoire d'amour éternelle.”",
        },
        {
          title: "Un jour magique",
          description:
            "“Un mariage célébré avec grâce et élégance.”",
        },
        
        {
          title: "Un moment de pure magie",
          description:
            "“Chaque moment était empreint d'amour et de bonheur.”",
        },
      ],
    },
    {
      title: "Good Times",
      mainImg: goodtimes,
      url: "/portfolio/good-times",
      secondaryImg: goodtimes2,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "Good Times",
      mainImg: goodtimes,
      url: "/portfolio/cdo",
      secondaryImg: goodtimes2,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
    {
      title: "The Racer",
      mainImg: theracer,
      url: "/portfolio/the-racer",
      secondaryImg: theracer2,
      awards: [
        {
          title: "Truly A masterpiece",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "Fresh look on a brutal sport.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
        {
          title: "It’s okay lmao.",
          description:
            "“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”",
        },
      ],
    },
  ];
};

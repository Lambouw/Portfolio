// Import Styles
import "../styles/css/description.css";

const ArtistPortfolio = () => {
  return (
    <div className="description">
      <div className="description--paragraph">
        This project highlights my first freelancing work: creating a{" "}
        <span className="description--paragraph--highlight">
          portfolio website
        </span>{" "}
        for an artist and sculptor. The primary goal of the site was to provide
        a visually engaging platform to showcase the artist's diverse body of
        work, including sculptures, paintings and mixed media. The design
        reflects the artist's unique style while ensuring a seamless and
        intuitive user experience for potential clients, galleries and art
        enthusiasts.
      </div>
      <div className="height-s"></div>
      <div className="description--paragraph">
        This project allowed me to combine technical skills with creative
        design, resulting in a polished and professional portfolio that
        effectively represents the artist's vision.
      </div>
    </div>
  );
};

export default ArtistPortfolio;

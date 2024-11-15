// Import Styles
import "../styles/css/about.css";

function About() {
  return (
    <div id="about" className="about">
      <h1 className="about--heading">About</h1>
      <div className="height-s"></div>
      <div className="about--text">
        <p>
          Hi, I'm <span className="about--text--name">Malte Lindemann</span>, a
          self taught software engineer. My first real taste of programming came
          during university through an introductory computer science course, and
          that was the spark. Since then, I've always been curious about
          software development, wanting to learn more and more.
        </p>
        <div className="height-s"></div>
        <p>
          When the first lockdown hit, I decided to dive in headfirst. I spent
          hours teaching myself web development using online resources and
          documentation, and that’s when things really clicked. What started as
          a hobby quickly became a passion.
        </p>
        <div className="height-s"></div>
        <p>
          From there, I landed my first jobs in software development, and I realized: 
          this is exactly what I want to do. I love creating solutions with code, 
          tackling challenges, and always finding something new to learn along the way.
        </p>
      </div>
    </div>
  );
}

export default About;

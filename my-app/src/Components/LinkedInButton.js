import LinkedInImage from "../Media/Logos/LinkedInIcon.png";

export default function LinkedInButton() {
  let linkedinpage = "https://www.linkedin.com/in/alvinjz2/";
  return (
    <div>
      <a href={linkedinpage}>
        <img style={{ width: "10%" }} src={LinkedInImage} alt="LinkedIn Icon" />
      </a>
    </div>
  );
}

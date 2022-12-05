import LinkedInImage from "../Media/Logos/LinkedInIcon.png";

export default function LinkedInButton() {
  let linkedinpage = "https://www.linkedin.com/company/flex-labs";
  return (
    <div>
      <a href={linkedinpage} rel="noopener noreferrer" target="_blank">
        <img style={{ width: "10%" }} src={LinkedInImage} alt="LinkedIn Icon" />
      </a>
    </div>
  );
}

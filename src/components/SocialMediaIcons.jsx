import LinkedIn from "../assets/linkedin.png";
import Twitter from "../assets/twitter.png";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/pichmarina-el-0b07bb2a5"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src={LinkedIn} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://x.com/pichmarina27600"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="twitter-link" src={Twitter} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/el.pichmarina.9?mibextid=LQQJ4d"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="facebook-link" src={Facebook} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/accounts/edit/?hl=en"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="instagram-link" src={Instagram} />
      </a>
    </div>
  );
};
export default SocialMediaIcons;

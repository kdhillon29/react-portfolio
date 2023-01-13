import SocialMediaIcons from "../components/SocialMediaIcons";

//footer comments added
const Footer = () => {
  return (
    <footer className="mt-2 mb-0  bg-red pt-2">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            K Dhillon
          </p>
          <p className="font-playfair text-md text-yellow">
            ©2022 KD. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
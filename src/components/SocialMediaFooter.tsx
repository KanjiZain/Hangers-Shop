import {FaFacebookF, FaInstagram} from 'react-icons/fa6';
import logo from '../assets/BG/BG_LOGO.png';
import {Link} from 'react-router-dom';

const SocialMediaFooter = () => {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <div className="flex flex-col sm:flex-row justify-between py-5 px-6 sm:px-20 mt-24 mx-3 sm:mx-20">
        {/* Logo Section */}
        <div className="flex justify-center sm:justify-start mb-6 sm:mb-0">
          <Link to="/">
            <img
              src={logo}
              alt="Nisar Hangers Logo"
              className="max-w-[16rem]"
            />
          </Link>
        </div>

        {/* Contact Us Section */}
        <div className="text-center sm:text-left mb-6 sm:mb-0">
          <h3 className="text-xl font-semibold text-black">Contact Us</h3>
          <p className="text-base font-light text-black">
            Email:{' '}
            <a href="mailto:nisarhanger@gmail.com" className="underline">
              nisarhanger@gmail.com
            </a>
          </p>
          <p className="text-base font-light text-black">
            Phone:{' '}
            <a href="tel:92162888624" className="underline">
              +92162888624
            </a>
          </p>
        </div>

        {/* Follow Us Section */}
        <div className="text-center sm:text-left mb-6 sm:mb-0">
          <h3 className="text-xl font-semibold text-black">Follow Us</h3>
          <p className="text-base font-light text-black">
            Stay connected with us:
          </p>
          <div className="flex justify-center sm:justify-start gap-4 mt-2">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer">
              <FaFacebookF className="w-5 h-5" color="black" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer">
              <FaInstagram className="w-5 h-5" color="black" />
            </a>
          </div>
        </div>

        {/* Address Section */}
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-semibold text-black">Address</h3>
          <p className="text-base font-light text-black">
            <a
              href="https://maps.app.goo.gl/yzUEuBrZZVd1VY5t9"
              target="_blank"
              rel="noopener noreferrer"
              className="underline">
              Near Nazimabad No.4, Karachi, Pakistan
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaFooter;

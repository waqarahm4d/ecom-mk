import {BiLogoFacebook, BiLogoTwitter, BiLogoLinkedin} from "react-icons/bi";
import Link from 'next/link';

function Socialicons() {
  return (
    <div className="social_icons flex space-x-4">
        <div className="social_icon rounded-md bg-gray-100 p-2 ">
          <Link href='/'>
            <BiLogoTwitter  size={30}/>
          </Link>
        </div>
        <div className="social_icon rounded-md bg-gray-100 p-2 ">
          <Link href='/'>
            <BiLogoFacebook size={30} />
          </Link>
        </div>
        <div className="social_icon rounded-md bg-gray-100 p-2 ">
          <Link href='/'>
            <BiLogoLinkedin size={30} />
          </Link>
        </div>
    </div>
  );
}

export default Socialicons;

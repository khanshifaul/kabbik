export default function Footer() {
  return (
    <div className="my-4 bg-DarkTeal">
      <div className="container mx-auto">
        <div className="w-full  text-white">
          <div className="text-center py-2">
            <div className="w-full border-b-white">
              <nav>
                <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-0 mx-4 md:mx-36 py-4 items-center font-Archivo_Narrow divide-x-0 md:divide-x border-b-[1px]">
                  <li>
                    <a>Privacy Policy</a>
                  </li>
                  <li>
                    <a>Terms of service</a>
                  </li>
                  <li>
                    <a>Accessibility</a>
                  </li>
                  <li>
                    <a>Contact Us</a>
                  </li>
                </ul>
              </nav>
              <div className="flex gap-5 justify-center items-center p-6">
                <a href="">
                  <img
                    src="/assets/playstore.png"
                    alt="playstore"
                    className="object-contain"
                    width={100}
                  />
                </a>
                <a href="">
                  <img
                    src="/assets/applestore.png"
                    alt="applestore"
                    className="object-contain"
                    width={100}
                  />
                </a>
              </div>
              <div>
                <h6 className="uppercase">Follow Us</h6>
              </div>
              <div className="flex gap-5 justify-center items-center py-6">
                <a href="">
                  <img src="/assets/facebook.png" alt="facebook" />
                </a>
                <a href="">
                  <img src="/assets/instagram.png" alt="instagram" />
                </a>
                <a href="">
                  <img src="/assets/twitter.png" alt="twitter" />
                </a>
                <a href="">
                  <img src="/assets/linkedin.png" alt="linkedin" />
                </a>
              </div>
            </div>

            <p className="space-x-1">
              <span> &copy; {new Date().getFullYear()}</span>
              <span>
                Designed &amp; Developed by
              </span>
              <a
                className="text-red-500 font-bold font-DancingScript"
                href="http://khanshifaul.vercel.app"
              >
                KhanShifaul
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

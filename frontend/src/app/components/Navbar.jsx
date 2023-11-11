import { Inter } from 'next/font/google';

import Link from 'next/link';

function Navbar() {
  return (
    <section className="bg-black py-10"> {/* Increased padding for better spacing */}
      <div className="max-w-screen-xl mx-auto px-4"> {/* Center content with max-width */}
        <div className="flex items-center justify-between">
          <div className="flex items-center"> {/* Center the logo and text */}

          <Link href="/">
     
  
            <img
              className="rounded-full"
              src="https://thumbs.dreamstime.com/b/d-golden-treasure-chest-white-background-image-33297813.jpg"
              width="40"
              height="40"
            />
              </Link>
            <h1 className="text-white ml-2 text-2xl font-bold">Trash Or Treasure</h1>
          </div>
          <p className="text-sm text-gray-400">
             &nbsp; Gunner Developers
          </p>
        </div>
      </div>
    </section>
  );
}

export default Navbar;




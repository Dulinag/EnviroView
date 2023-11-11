import { Inter } from 'next/font/google';

import Link from 'next/link';

function ProfilePage() {
  return (
<> 

<body className="bg-orange-700">
  <nav className='flex'>
    <div className='p-8'>Home</div>
    <div className="p-8">Profile</div>
    <div className='p-8'>Login</div>
  </nav>

  <section>
    <div className="max-w-lg mx-auto my-10 bg-red-500 rounded-lg shadow-md p-5 py-1 text-white">
      <h2 className="text-center text-3xl font-extrabold mt-3">User Name</h2>
      <p className="text-center text-gray-300 mt-1">Joined today</p>

      <div className="flex justify-center mt-5">
        <a href="#" className="text-blue-200 hover:text-blue-300 mx-3">Gmail</a>
        <a href="#" className="text-blue-200 hover:text-blue-300 mx-3">LinkedIn</a>
        <a href="#" className="text-blue-200 hover:text-blue-300 mx-3">GitHub</a>
      </div>

      <div className="mt-5 p-4 border border-white rounded bg-white">
        <h3 className="text-xl font-semibold font-serif text-black">About Me</h3>
        <p className="text-gray-600 mt-2">John is a visionary software engineer with over a decade of experience in crafting cutting-edge web and mobile applications. His expertise spans the realms of JavaScript, React, and Node.js.</p>
      </div>

      <div className="my-6 flex items-center space-x-3"></div>
    </div>
  </section>

  <section>
    <div className="">
      <h2 className="text-left p-5 text-3xl font-extrabold mt-3 text-white">Posts</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5 p-5">
        {/* Placeholder cards */}
        {Array.from({ length: 8 }, (_, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg border border-gray-300 cursor-pointer hover:shadow-md"
            onClick={() => handleClickPlaceholderCard(index)}
          >
            {/* Content inside the placeholder card */}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Post Title {index + 1}</h3>
            <p className="text-gray-600">Post description or content...</p>
          </div>
        ))}
      </div>
    </div>
  </section>
</body>


</>
  );
}

export default ProfilePage;




import Reat from 'react';

import Image from 'next/image';
import { FaCheck } from "react-icons/fa";

const Skill = () => {
  return (
    <div id="skill">
     <section className="text-gray-600 body-font bg-[#fae3c9]">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
        Skills
      </h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
        My Skills
      </h1>
    </div>
    <div className="flex flex-wrap -m-4 -mt-[5rem]">

      {/* skills */}
      <div className="p-4 w-[100%] md:w-1/4 ">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-[#fae3c9] flex-shrink-0">
            <FaCheck className='text-xl font-bold'/>

            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              HTML
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-indigo-200 rounded-2xl '>
              <div className='absolute bg-indigo-500 h-1 rounded-2xl w-[100%]'></div>
            </div>
            <p className='text-indigo-500 font-bold text-right'>100%</p>
          </div>
        </div>
      </div>


       <div className="p-4 w-[100%] md:w-1/4">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-[#fae3c9] flex-shrink-0">
            <FaCheck className='text-xl font-bold'/>

            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              CSS
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-indigo-200 rounded-2xl '>
              <div className='absolute bg-indigo-500 h-1 rounded-2xl w-[90%]'></div>
            </div>
            <p className='text-indigo-500 font-bold text-right'>90%</p>
          </div>
        </div>
      </div>

      <div className="p-4 w-[100%] md:w-1/4">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-[#fae3c9] flex-shrink-0">
            <FaCheck className='text-xl font-bold'/>

            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Bootstrap
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-indigo-200 rounded-2xl '>
              <div className='absolute bg-indigo-500 h-1 rounded-2xl w-[80%]'></div>
            </div>
            <p className='text-indigo-500 font-bold text-right'>80%</p>
          </div>
        </div>
      </div>


      <div className="p-4 w-[100%] md:w-1/4">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-[#fae3c9] flex-shrink-0">
            <FaCheck className='text-xl font-bold'/>

            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Tailwind CSS
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-indigo-200 rounded-2xl '>
              <div className='absolute bg-indigo-500 h-1 rounded-2xl w-[80%]'></div>
            </div>
            <p className='text-indigo-500 font-bold text-right'>80%</p>
          </div>
        </div>
      </div>


      <div className="p-4 w-[100%] md:w-1/4">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-[#fae3c9] flex-shrink-0">
            <FaCheck className='text-xl font-bold'/>

            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              JavaScript
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-indigo-200 rounded-2xl '>
              <div className='absolute bg-indigo-500 h-1 rounded-2xl w-[50%]'></div>
            </div>
            <p className='text-indigo-500 font-bold text-right'>50%</p>
          </div>
        </div>
      </div>


      <div className="p-4 w-[100%] md:w-1/4">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-[#fae3c9] flex-shrink-0">
            <FaCheck className='text-xl font-bold'/>

            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              C
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-indigo-200 rounded-2xl '>
              <div className='absolute bg-indigo-500 h-1 rounded-2xl w-[99%]'></div>
            </div>
            <p className='text-indigo-500 font-bold text-right'>99%</p>
          </div>
        </div>
      </div>


      <div className="p-4 w-[100%] md:w-1/4">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-[#fae3c9] flex-shrink-0">
            <FaCheck className='text-xl font-bold'/>

            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              C++
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-indigo-200 rounded-2xl '>
              <div className='absolute bg-indigo-500 h-1 rounded-2xl w-[95%]'></div>
            </div>
            <p className='text-indigo-500 font-bold text-right'>95%</p>
          </div>
        </div>
      </div>


      <div className="p-4 w-[100%] md:w-1/4">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-[#fae3c9] flex-shrink-0">
            <FaCheck className='text-xl font-bold'/>

            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Java
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-indigo-200 rounded-2xl '>
              <div className='absolute bg-indigo-500 h-1 rounded-2xl w-[80%]'></div>
            </div>
            <p className='text-indigo-500 font-bold text-right'>80%</p>
          </div>
        </div>
      </div>


      <div className="p-4 w-[100%] md:w-1/4">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-[#fae3c9] flex-shrink-0">
            <FaCheck className='text-xl font-bold'/>

            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              React Js
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-indigo-200 rounded-2xl '>
              <div className='absolute bg-indigo-500 h-1 rounded-2xl w-[60%]'></div>
            </div>
            <p className='text-indigo-500 font-bold text-right'>60%</p>
          </div>
        </div>
      </div>



      <div className="p-4 w-[100%] md:w-1/4">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-[#fae3c9] flex-shrink-0">
            <FaCheck className='text-xl font-bold'/>

            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Next Js
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-indigo-200 rounded-2xl '>
              <div className='absolute bg-indigo-500 h-1 rounded-2xl w-[50%]'></div>
            </div>
            <p className='text-indigo-500 font-bold text-right'>50%</p>
          </div>
        </div>
      </div>


      <div className="p-4 w-[100%] md:w-1/4">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-[#fae3c9] flex-shrink-0">
            <FaCheck className='text-xl font-bold'/>

            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Python
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-indigo-200 rounded-2xl '>
              <div className='absolute bg-indigo-500 h-1 rounded-2xl w-[60%]'></div>
            </div>
            <p className='text-indigo-500 font-bold text-right'>60%</p>
          </div>
        </div>
      </div>

      <div className="p-4 w-[100%] md:w-1/4">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-[#fae3c9] flex-shrink-0">
            <FaCheck className='text-xl font-bold'/>

            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              Fluter
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-indigo-200 rounded-2xl '>
              <div className='absolute bg-indigo-500 h-1 rounded-2xl w-[60%]'></div>
            </div>
            <p className='text-indigo-500 font-bold text-right'>60%</p>
          </div>
        </div>
      </div>



      <div className="p-4 w-[100%] md:w-1/4">
        <div className="flex rounded-lg h-full  p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-[#fae3c9] flex-shrink-0">
            <FaCheck className='text-xl font-bold'/>

            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
              SQL
            </h2>
          </div>
          <div className="flex-grow">
            <div className='relative h-1 w-full bg-indigo-200 rounded-2xl '>
              <div className='absolute bg-indigo-500 h-1 rounded-2xl w-[90%]'></div>
            </div>
            <p className='text-indigo-500 font-bold text-right'>90%</p>
          </div>
        </div>
      </div>




     
    </div>
  </div>
</section>

    </div>
  );
};
export default Skill;
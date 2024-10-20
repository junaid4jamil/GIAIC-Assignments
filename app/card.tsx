import React from 'react';
import Image from 'next/image';
import webDevelopment from '../public/png/web-development.png';
import gLogo from '../public/png/g-sindh-logo.png'

interface CardProps {
  name: string;
  rollNo: string;
  timing: string;
}
const Card:React.FC<CardProps> = ({ name, rollNo, timing}) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="border-black rounded-lg border-2 w-1/2 h-96 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-no-repeat bg-center blur-sm"
            style={{
              backgroundImage: "url('/png/kamran-tessori.png')",
              backgroundSize: 'contain',
              zIndex: 0,
            }}
          ></div>

          {/* Main Content */}
          <div className="relative z-10 w-full grid grid-cols-[60%,40%] content-center">
            <div className="h-80 z-20 p-6">
              <Image width={70} height={70} alt="image" src={gLogo} />
              <h3 className="text-sky-500 mt-2">
                Name: <span className="text-black font-bold">{name}</span>
              </h3>

              <h3 className='text-sky-500'>
                Roll No:<span className="text-black font-bold">{rollNo}</span>
              </h3>
              <h3 className='text-sky-500'>
                Distance learning: <span className="text-black font-bold">No</span>
              </h3>
              <h3 className='text-sky-500'>
                City:<span className="text-black font-bold">Karachi</span>
              </h3>
              <h3 className='text-sky-500'>
                Center:<span className="text-black font-bold">Governor House Karachi</span>
              </h3>
              <h3 className='text-sky-500'>
                Campus:<span className="text-black font-bold">Main</span>
              </h3>
              <h3 className='text-sky-500'>
                Date/Time:<span className="text-black font-bold">{timing} </span>
              </h3>
              <h3 className='text-sky-500'>Batch 1</h3>
            </div>

            <div className="h-80 flex flex-col justify-center items-center z-20">
              <Image width={200} height={200} alt="image" src={webDevelopment} />
              <h6 className='font-serif text-sky-500 mt-10'>Governor Sindh Kamran Tessori</h6>
              <h6 className='font-serif text-sky-500'>IT Initiative</h6>
              <hr className="border-t border-black w-60 my-2" />
              <h3 className='text-sky-500 font-bold'>Authorized Signature</h3>
            </div>

          </div>

          <div className="bg-neutral-200 h-8 w-36 flex justify-center items-center relative z-10 mt-8">
          <h3 className='text-gray-600 font-bold'>Q2</h3>
          </div>
        </div>
      </div>
    </>
  );

};

export default Card;
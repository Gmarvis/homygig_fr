import Link from 'next/link';
import React from 'react';

const SuccessPage = () => {
  return (
    <div className="mt-12 mx-4 px-4 rounded-md border-l-4 border-green-500 bg-green-50 md:max-w-2xl md:mx-auto md:px-8">
      <div className="flex justify-between py-3">
        <div className="flex">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 rounded-full text-green-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="self-center ml-3 flex flex-col gap-2">
            <span className="text-green-600 font-semibold">Success</span>
            <p className="text-green-600 mt-1">
              Congratulations your service has been added successfully.
            </p>
            <Link
              className="border px-4 py-2 my-2 text-center text-white rounded-lg bg-green-600"
              href={'/dashboard/my-services'}
            >
              View services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;

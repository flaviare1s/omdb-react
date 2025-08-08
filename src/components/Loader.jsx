import React from 'react';

export const Loader = () => {
  return (
    <div className="flex justify-center items-center h-full my-8">
      <div className="w-12 h-12 border-4 border-t-4 border-t-yellow-400 border-gray-200 rounded-full animate-spin"></div>
    </div>
  );
};

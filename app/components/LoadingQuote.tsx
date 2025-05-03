'use client';

export default function LoadingQuote() {
  return (
    <div className="flex flex-col items-center justify-center p-8 mx-auto my-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-lg shadow-lg max-w-2xl animate-pulse transition-colors duration-200">
      <div className="flex flex-col w-full mb-6 text-center">
        <div className="flex flex-col">
          <div className="mb-2 text-5xl text-gray-300 dark:text-gray-600 self-start">"</div>
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mx-auto mb-3"></div>
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-full mx-auto mb-3"></div>
          <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mx-auto mb-3"></div>
          <div className="text-5xl text-gray-300 dark:text-gray-600 self-end">"</div>
        </div>
        <div className="mt-4 h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/3 ml-auto"></div>
      </div>
      <div className="h-10 w-32 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
    </div>
  );
} 
import React from 'react'

function NotFoundPage(): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center h-screen-nav text-center bg-background">
      <h1 className="text-5xl font-bold text-secondary">Page Not Found</h1>
      <p className="text-lg text-gray-600 mt-4">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <a
        href="/"
        className="mt-6 px-4 py-2 text-background bg-secondary hover:bg-secondary/80 rounded"
      >
        Return to Home
      </a>
    </div>
  );
};

export default NotFoundPage;
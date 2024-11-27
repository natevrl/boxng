import React from "react";

function NotFoundPage(): JSX.Element {
  return (
    <div className="h-screen-nav flex flex-col items-center justify-center bg-background text-center">
      <h1 className="text-5xl font-bold text-secondary">Page Not Found</h1>
      <p className="mt-4 text-lg text-gray-600">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <a
        href="/"
        className="mt-6 rounded bg-secondary px-4 py-2 text-background hover:bg-secondary/80"
      >
        Return to Home
      </a>
    </div>
  );
}

export default NotFoundPage;

import React from 'react';

export const Home: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Welcome to StreamShop
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          The future of live commerce - where sellers stream and buyers guess prices to win amazing discounts!
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/streams"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Browse Streams
          </a>
          <a
            href="/seller/dashboard"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Start Selling <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div className="mt-16">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-x-8">
          <div className="text-center">
            <div className="mx-auto h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
              <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="mt-6 text-lg font-semibold text-gray-900">Live Streaming</h3>
            <p className="mt-2 text-gray-600">
              Sellers showcase products through engaging YouTube live streams
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
              <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="mt-6 text-lg font-semibold text-gray-900">Price Guessing</h3>
            <p className="mt-2 text-gray-600">
              Viewers guess product prices for a chance to win discounts
            </p>
          </div>

          <div className="text-center">
            <div className="mx-auto h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center">
              <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <h3 className="mt-6 text-lg font-semibold text-gray-900">Win Discounts</h3>
            <p className="mt-2 text-gray-600">
              Get exclusive discount codes based on how close your guess is
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
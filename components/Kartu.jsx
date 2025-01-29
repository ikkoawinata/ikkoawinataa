
import React from 'react';

const Kartu = ({ post }) => {
  const staticTags = ['Marketing', 'Trending', 'Featured'];

  return (
    <article className="relative flex max-w-full flex-col items-start justify-between border-2 border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800 shadow-md dark:shadow-lg">
      <div className="flex items-center gap-x-2 text-xs">
        <time dateTime={post.datetime} className="text-gray-500 dark:text-gray-400">
          {post.date}
        </time>
        <a
          href={post.category.href}
          className="relative z-10 rounded-full bg-gray-50 dark:bg-gray-900 px-2 font-medium text-gray-600 dark:text-gray-300 transition-colors duration-300"
        >
          {post.category.title}
        </a>
      </div>
      <div className="group relative">
        <h3 className="mt-2 text-sm font-semibold leading-5 text-gray-900 dark:text-gray-100">
          <a href={post.href}>
            <span className="absolute inset-0" />
            {post.title}
          </a>
        </h3>
        <p className="mt-3 line-clamp-2 text-xs leading-5 text-gray-600 dark:text-gray-400">
          {post.description}
        </p>
      </div>
      <div className="mt-3 flex flex-wrap gap-1">
        {/* Tag dinamis dari data */}
        {Array.isArray(post.marketingTags) && post.marketingTags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-[10px] font-medium px-2 py-0.5 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};

export default Kartu;
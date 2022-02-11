import React from 'react';

export default function Alerts({ type, text }) {
  return (
    <div>
      {type === 'danger' ? (
        <div
          class='text-red-700 bg-red-100 dark:bg-red-200 dark:text-red-800 mb-4 rounded-lg p-4 text-sm'
          role='alert'
        >
          <span class='font-medium'>Danger alert!</span> Change a few things up
          and try submitting again.
        </div>
      ) : type === 'warning' ? (
        <div
          class='text-yellow-700 bg-yellow-100 dark:bg-yellow-200 dark:text-yellow-800 mb-4 rounded-lg p-4 text-sm'
          role='alert'
        >
          <span class='font-medium'>Warning alert!</span> Change a few things up
          and try submitting again.
        </div>
      ) : (
        <div
          class='text-green-700 bg-green-100 dark:bg-green-200 dark:text-green-800 mb-4 rounded-lg p-4 text-sm'
          role='alert'
        >
          <span class='font-medium'>Success alert!</span> Change a few things up
          and try submitting again.
        </div>
      )}
    </div>
  );
}

declare module 'next/head';
declare module 'next/link';
declare module 'next/router';
declare module 'react-icons/fa';
declare module '@headlessui/react';

// Fix for CSS modules
declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}

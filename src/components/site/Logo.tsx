import React from 'react';

export const Logo = () => {
  return (
    <div className="flex items-center gap-2 font-semibold text-lg text-white">
      <img src="/logo.png" alt="GrowSecure Logo" className="w-8 h-8 object-contain" />
      <span>GrowSecure</span>
    </div>
  );
};

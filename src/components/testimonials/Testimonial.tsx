import React from 'react';

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  image: string;
}

function Testimonial({ name, role, content, image }: TestimonialProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="font-semibold text-gray-900">{name}</h3>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}

export default Testimonial;
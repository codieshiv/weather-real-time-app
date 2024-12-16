import React from 'react';
import Testimonial from './Testimonial';
import { testimonialData } from '../../data/testimonials';

function TestimonialSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        {testimonialData.map((testimonial) => (
          <Testimonial key={testimonial.name} {...testimonial} />
        ))}
      </div>
    </div>
  );
}

export default TestimonialSection;
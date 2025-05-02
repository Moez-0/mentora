
import React from 'react'
import { useState } from 'react';


const TestimonialsSection = () => {
    const testimonials = [
      {
        id: 1,
        quote: "Mentora completely transformed my career. The courses are well-structured and the instructors are incredibly knowledgeable.",
        name: "Chams Mhamdi",
        role: "Backend Developer at MTPE",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
      },
      {
        id: 2,
        quote: "The live sessions are game-changers. Being able to interact with instructors in real-time made all the difference in my learning.",
        name: "Zrafi Abd-Slam",
        role: "Junior Developer at MTPE",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
      },
      {
        id: 3,
        quote: "I went from complete beginner to landing my first developer job in just 6 months thanks to Mentora's comprehensive curriculum.",
        name: "Moez Souidi",
        role: "Junior Developer at MTPE",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
      }
    ]
  
    return (
      <div className="bg-white py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              What our students say
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
              Don't just take our word for it - hear from our community
            </p>
          </div>
  
          <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 p-8 rounded-lg">
                <div className="relative">
                  <svg
                    className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                  <p className="relative text-gray-600">{testimonial.quote}</p>
                </div>
                <div className="mt-8 flex items-center">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div className="ml-4">
                    <p className="text-base font-medium text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }


export default TestimonialsSection
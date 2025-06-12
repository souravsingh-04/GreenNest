import React from "react";
import TestimonialCard from "./TestimonialCard";

  function TestimonialSection() {
            const testimonials = [
                { quote: "GreenNest transformed my home with their beautiful plants!", author: "– Jane D." },
                { quote: "Fast delivery and healthy plants, highly recommend!", author: "– Mark S." },
                { quote: "Eco-friendly packaging and great customer service!", author: "– Sarah L." }
            ];
            return (
                <section className="testimonial-section">
                    <div className="container">
                        <h2>What Our Customers Say</h2>
                        <div className="testimonial-grid">
                            {testimonials.map((testimonial, index) => (
                                <TestimonialCard
                                    key={index}
                                    quote={testimonial.quote}
                                    author={testimonial.author}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            );
        }
        export default TestimonialSection;
import React from "react";

 
 function TestimonialCard({ quote, author }) {
            return (
                <div className="testimonial-card">
                    <p>{quote}</p>
                    <p className="author">{author}</p>
                </div>
            );
        }

        export default TestimonialCard;
import React from "react";
 
 function PlantCard({ image, title, tags, buttonText }) {
            return (
                <div className="card-container">
                    <div className="card" style={{ backgroundImage: `url(${image})` }}></div>
                    <div className="card-info">
                        <h3>{title}</h3>
                        <ul>
                            {tags.map((tag, index) => (
                                <li key={index}><small>{tag}</small></li>
                            ))}
                        </ul>
                        <button className="btn btn-primary">{buttonText}</button>
                    </div>
                </div>
            );
        }

        export default PlantCard;
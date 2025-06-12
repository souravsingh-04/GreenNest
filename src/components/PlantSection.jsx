import React from "react";
import PlantCard from "./PlantCard";
 
 
 
 function PlantSection({ id, title, icon, plants }) {
            return (
                <section className="plant-section" id={id}>
                    <div className="container">
                        <h2>
                            <img src={icon} alt={title} className="plant-icon" /> {title}
                        </h2>
                        <div className="plant-grid">
                            {plants.map((plant, index) => (
                                <PlantCard
                                    key={index}
                                    image={plant.image}
                                    title={plant.title}
                                    tags={plant.tags}
                                    buttonText={plant.buttonText}
                                />
                            ))}
                        </div>
                    </div>
                </section>
            );
        }

        export default PlantSection;

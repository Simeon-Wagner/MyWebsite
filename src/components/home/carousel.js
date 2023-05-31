import React, { useState } from "react";
import { CarouselItem } from "./carouselItem";
import './carousel.css'
export const Carousel = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    {
      title: "Genetic Algorithm",
      description:
        "The Traveling salesman problem belongs to the NP hard problems. This means that finding the optimal solution in polynomial time is not possible. In order to achieve good results heuristic methods are used. In this project I tried to find a good solution for the problem using an evolutionary algorithm. The implementation was done in C++ as well as in Java.",
      image: require("../../pictures/projects/genetic_algorithm.png"),
      link: require("../../App")
    },
    {
      title: "Neural Network",
      description:
        "Neural networks are extremely fascinating. In my neural network project we leave the comfortable machine learning frameworks like PyTorch behind and take the challenge to program a neural network in Java and C. Only matrices, nothing else!",
      image: require("../../pictures/projects/neural_network.png"),
      link: require("../../App")
    },
  ];

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div className="carousel">
      <div
        className="inner"
        style={{ transform: `translate(-${activeIndex * 100}%)`
     }}
      >
        {items.map((item) => {
          return <CarouselItem item={item} width={"100%"} />;
        })}
      </div>

      <div className="carousel-buttons">
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span class="material-symbols-outlined">arrow_back_ios</span>{" "}
        </button>
        <div className="indicators">
          {items.map((item, index) => {
            return (
              <button
                className="indicator-buttons"
                onClick={() => {
                  updateIndex(index);
                }}
              >
                <span
                  className={`material-symbols-outlined ${
                    index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                  }`}
                >
                  radio_button_checked
                </span>
              </button>
            );
          })}
        </div>
        <button
          className="button-arrow"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span class="material-symbols-outlined">arrow_forward_ios</span>
        </button>
      </div>
    </div>
  );
};
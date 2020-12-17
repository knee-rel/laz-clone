import React from 'react'

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="carousel-inner">
        <input
          className="carousel-open"
          type="radio"
          id="carousel-1"
          name="carousel"
          aria-hidden="true"
          hidden=""
          checked="checked"
        />
        <div className="carousel-item">
          <img src="../assets/modal-1.png" />
        </div>
        <input
          className="carousel-open"
          type="radio"
          id="carousel-1"
          name="carousel"
          aria-hidden="true"
          hidden=""
          checked="checked"
        />
        <div className="carousel-item">
          <img src="../assets/modal-1.png" />
        </div>
        <label for="carousel-3" class="carousel-control prev control-1">
          ‹
        </label>
        <label for="carousel-2" class="carousel-control next control-1">
          ›
        </label>
        <label for="carousel-1" class="carousel-control prev control-2">
          ‹
        </label>
        <label for="carousel-3" class="carousel-control next control-2">
          ›
        </label>
        <label for="carousel-2" class="carousel-control prev control-3">
          ‹
        </label>
        <label for="carousel-1" class="carousel-control next control-3">
          ›
        </label>
        <ol class="carousel-indicators">
          <li>
            <label for="carousel-1" class="carousel-bullet">
              •
            </label>
          </li>
          <li>
            <label for="carousel-2" class="carousel-bullet">
              •
            </label>
          </li>
          <li>
            <label for="carousel-3" class="carousel-bullet">
              •
            </label>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Carousel

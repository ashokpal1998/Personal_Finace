// const HeroSection = () => {
//     return(
//         <div class="container col-xxl-8 px-4 py-5 custom-background">
//     <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
//       <div class="col-10 col-sm-8 col-lg-6">
//         <img src="images2.jpg" lass="d-block mx-lg-auto img-fluid" alt="thame images" width="700" height="500" loading="lazy"></img>
        
//       </div>
//       <div class="col-lg-6" >
//         <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Track your monthly spending and more </h1>
//         <p class="lead">Review your Transaction, track your spending by category and receive monthly insights that help you better understand your monry</p>
//         <div class="d-grid gap-2 d-md-flex justify-content-md-start">
//           <button type="button" class="btn btn-primary btn-lg px-4 me-md-2" fdprocessedid="dw1ghn">more Learn</button>
          
//         </div>
//       </div>
//     </div>
//   </div>

//     )
// }
// export default HeroSection;
import React, { useState } from 'react';

const HeroSection = () => {
  // State to track whether the paragraph should be visible or not
  const [isVisible, setIsVisible] = useState(false);

  // Function to handle button click
  const handleButtonClick = () => {
    setIsVisible(!isVisible); // Toggle visibility
  };

  return (
    <div className="container col-xxl-8 px-4 py-5 custom-background">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img src="images2.jpg" className="d-block mx-lg-auto img-fluid" alt="thame images" width="700" height="500" loading="lazy" />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Track your monthly spending and more
          </h1>
          {/* The paragraph will only be shown when isVisible is true */}
          {isVisible && (
            <p className="lead">
              Review your Transaction, track your spending by category and receive monthly insights that help you better understand your money
            </p>
          )}
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            {/* Button will toggle the paragraph visibility */}
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-md-2"
              onClick={handleButtonClick}
            >
              {isVisible ? 'Hide Info' : 'Learn More'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;


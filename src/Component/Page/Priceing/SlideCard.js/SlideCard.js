import React from 'react';
import './Cssl.css';

const SlideCard = () => {
    
    return (
        <div>
            <div id="sliderw">
  <input type="radio" name="sliderw" id="s1"/>
  <input type="radio" name="sliderw" id="s2"/>
  <input type="radio" name="sliderw" id="s3" checked/>
  <input type="radio" name="sliderw" id="s4"/>
  <input type="radio" name="sliderw" id="s5"/>
  <label for="s1" id="slide1"> slider 1</label>
  <label for="s2" id="slide2"> slider 2</label>
  <label for="s3" id="slide3"> slider 3</label>
  <label for="s4" id="slide4"> slider 4</label>
  <label for="s5" id="slide5"> slider 5</label>
</div>
        </div>
    );
};

export default SlideCard;
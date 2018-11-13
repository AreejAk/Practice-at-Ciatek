import React, { Component } from 'react';

import Login from './Loginclass'


class Show extends Component {
  render() {
    return (
      <div className="show">

<div class="accordion" id="accordionExample">
  <div class="card">
    <div class="card-header" id="headingOne">
      <h5 class="mb-0">
        <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          
        hideSHOW
        </button>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
        <div class="Loginclass">
            Hello app    
            <Login></Login>
         </div>
    </div>
  </div>
</div>
      
        
      </div>
    );
  }
}

export default Show;

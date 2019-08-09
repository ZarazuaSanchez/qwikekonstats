import React, {Component} from "react";

class SelectYears extends Component {
  render() {

    const years1 = [];
    const years2 = [];

    var d = new Date();

    for ( var i=d.getFullYear() - 1; i>=1960; i-- ) {
      years1.push(<option>{i}</option>)
    }

    years2.push(<option value='' disabled selected>Select end year</option>);
    for ( i=d.getFullYear() - 1; i>=1960; i-- ) {
      years2.push(<option>{i}</option>)
    }

    return(
      <div class="yearsGroup">
        <div className="form-row">
          <label for="startYear">Start Year&nbsp;</label>
          <select name="startYear" className="select-year">
            { years1 }
          </select>
        </div>
        <p></p>
        <div className="form-row">
          <label for="endYear">End Year&nbsp;</label>
          <select name="endYear" className="select-year">
            { years2 }
          </select>
        </div>
      </div>
    );
  }
}

export default SelectYears;

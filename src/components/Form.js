import React from "react";
import SelectIndicator from "./SelectIndicator";
import SelectYears from "./SelectYears";
import {Button} from "reactstrap";

class Form extends React.Component {
  countries() {
    var cjson = require('./countries.json');
    var carray = cjson[1];
    var countries = {};

    for( var c of carray ){
      countries[c.id] = c.name;
    }

    const opItems = [];

    for ( c of carray ) {
      opItems.push(<option value={c.id}>{c.name}</option>);
    }

    opItems.push(<option value="US">United States of America</option>)

    return opItems;
  }

  years1() {

    const years1 = [];

    var d = new Date();

    for ( var i=d.getFullYear() - 1; i>=1960; i-- ) {
      years1.push(<option>{i}</option>)
    }

    return years1;
  }

  years2() {

    var d = new Date();

    const years2 = [];

    years2.push(<option value='' disabled selected>Select end year</option>);
    for ( var i=d.getFullYear() - 1; i>=1960; i-- ) {
      years2.push(<option>{i}</option>)
    }

    return years2;

  }

  render(){
    return (
      <form onSubmit={this.props.getStats}>
        <div className="form-row">
          <label for="country">Country&nbsp;</label>
        </div>
        <div className="form-row">
          <select name="country" class="select-country">
            { this.countries() }
          </select>
        </div>
        <div className="form-row">
          <label>Indicator&nbsp;</label>
        </div>
        <div className="form-row">
          <SelectIndicator />
        </div>
        <div className="form-row">
          <label for="startYear">Start Year&nbsp;</label>
        </div>
        <div className="form-row">
          <select name="startYear" className="select-year yearsGroup">
            { this.years1() }
          </select>
        </div>
        <div className="form-row">
          <label for="endYear">End Year&nbsp;</label>
        </div>
        <div className="form-row">
          <select name="endYear" className="select-year yearsGroup">
            { this.years2() }
          </select>
        </div>
        <Button color="primary">Get Stats</Button>
      </form>
    );
  }
}

export default Form;

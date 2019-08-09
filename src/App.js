import React, { Component } from 'react';
import './App.css';
import Form from "./components/Form";
import StatsTable from "./components/StatsTable";
import Title from "./components/Title";

const TOKEN = "7811b62367f018";

class App extends Component {
  constructor(props) {
    super(props);
    this.getStats();
  }

  state = {
    countrycode: undefined,
    countryname: undefined,
    indicatorcode: undefined,
    indicatorname: undefined,
    startYear: undefined,
    endYear: undefined,
    stats: undefined,
    error: undefined
  };

  getStats = async (e) => {

    var country = "AR";
    var indicator = undefined;
    var y1 = undefined;
    var y2 = undefined;

    if (e) {
      e.preventDefault();
      country = e.target.elements.country.value;
      indicator = e.target.elements.indicator.value;
      y1 = e.target.elements.startYear.value;
      y2 = e.target.elements.endYear.value;
    } else {

      var $ = require('jquery');
      await $.getJSON(`https://ipinfo.io?token=${TOKEN}`, function(response) {
        console.log("In success function");
        country = response.country;
        indicator = 'SP.POP.TOTL';
        y1 = 2008;
        y2 = 2018;

      });
    }
    console.log("Line 54")
    console.log(`country = ${country}`);
    console.log(`indicator = ${indicator}`);
    console.log(`y1 = ${y1}`);
    console.log(`y2 = ${y2}`);

    let res = undefined;

    if (y2) {
      res = await fetch(`http://api.worldbank.org/v2/country/${country}/indicator/${indicator}?date=${y1}:${y2}&format=json`);
    } else {
      res =  await fetch(`http://api.worldbank.org/v2/country/${country}/indicator/${indicator}?date=${y1}&format=json`);
    }

    const cjson = await res.json();
    const rawdata = cjson[1];
    console.log(`rawdata = ${rawdata}`);
    console.log(rawdata)

    if(rawdata){
      var stats = {};

      for( var elem of rawdata ){
        stats[elem.date] = elem.value;
      }
    } else {
      this.setState({
        error: `No Data Available for ${country}!`,
      })
    }

    if( country && indicator && stats ){
      const indicatorname = rawdata[0].indicator.value;
      const countryname = rawdata[0].country.value;
      this.setState({
        country: countryname,
        indicator: indicatorname,
        stats: stats,
        error: ""
      });
    }
    return;

  }
  render() {
    return (
      <div className="wrapper">
        <div className="main">
          <div className="container">
            <div className="row">
              <div className="col-xs-5 title-form-container">
                <div className="title-form-group">
                  <Title />
                  <Form getStats={this.getStats} />
                </div>
              </div>
              <div className="col-xs-7 table-container">
                { this.state.error && <div> {this.state.error} </div>}
                { this.state.stats && <StatsTable country={this.state.country} indicator={this.state.indicator} stats={this.state.stats} /> }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

export default App;

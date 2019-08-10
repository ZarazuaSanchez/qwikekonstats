import React, {Component} from "react";
import {Table} from "reactstrap";

class StatsTable extends Component {
  makeTable() {
    console.log("in makeTable() function");
    const stats = this.props.stats;
    var table = [];

    let kids = undefined;
    kids = <td colSpan="2"  className="country-title">{this.props.country}</td>;
    table.push(<tr>{kids}</tr>);

    let children = [];
    children.push(<td>Year</td>);
    children.push(<td>{this.props.indicator}</td>);
    table.push(<tr>{children}</tr>);

    var nf = new Intl.NumberFormat();

    var nrows = 2;
    var desiredNRows = 15;
    for( var y of Object.keys(stats).reverse()){
      let children = [];
      children.push(<td>{y}</td>);
      children.push(<td>{nf.format(stats[y])}</td>);
      table.push(<tr>{children}</tr>);
      nrows++;
    }

    if( desiredNRows - nrows < 13){
      for(var i = nrows; i <= desiredNRows; i++){
        let children = [];
        children.push(<td>&nbsp;</td>);
        children.push(<td>&nbsp;</td>);
        table.push(<tr>{children}</tr>);
      }
    }

    return table;
  }

  render(){
    return (
      <table>{this.makeTable()}</table>

    );
  }
};

export default StatsTable;

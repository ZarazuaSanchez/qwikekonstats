import React, {Component} from "react";

class SelectIndicator extends Component {
  render() {
    return (
      <select name="indicator" class="select-indicator">
        <option value="NY.GDP.MKTP.CD">GDP (current US$)</option>
        <option value="MS.MIL.XPND.ZS">Military expenditure (% of general government expenditure)</option>
        <option value="FP.CPI.TOTL.ZG">Inflation</option>
        <option value="SP.DYN.LE00.IN">Life expectancy at birth, total (years)</option>
        <option value="1.0.HCount.1.90usd">Poverty Headcount ($1.90 a day)</option>
        <option value="SP.POP.TOTL">Population, total</option>
        <option value="SP.POP.GROW">Population, growth (annual %)</option>
        <option value="SH.HIV.INCD.ZS">Prevalence of HIV, total (% of population ages 15-49)</option>
      </select>
    );

  }
}

export default SelectIndicator;

import React, { Component } from 'react'
import BusinessOption from './BusinessOption'
import "./Home.css";

/**
 * Displayed as the main part of Home page with links to each business
 */
class Home extends Component {
  render() {
    return (
      <div>
        <table id="business-table">
          <tr>
            <td>
              <BusinessOption businessId="1"/>
            </td>
            <td>
              <BusinessOption />
            </td>
            <td>
              <BusinessOption />
            </td>
          </tr>
          <tr>
            <td>
              <BusinessOption />
            </td>
            <td>
              <BusinessOption />
            </td>
            <td>
              <BusinessOption />
            </td>
          </tr>
          <tr>
            <td>
              <BusinessOption />
            </td>
            <td>
              <BusinessOption />
            </td>
            <td>
              <BusinessOption />
            </td>
          </tr>
          <tr>
            <td>
              <BusinessOption />
            </td>
            <td>
              <BusinessOption />
            </td>
            <td>
              <BusinessOption />
            </td>
          </tr>
        </table>
      </div>
    )
  }
}

export default Home;

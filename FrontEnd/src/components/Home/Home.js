import React, { Component } from 'react'
import BusinessOption from './BusinessOption'

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

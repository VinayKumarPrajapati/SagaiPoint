import React, { Component } from "react";
import { Select } from "antd";

const { Option } = Select;

const city = [];

city.push(<Option key="city1">Ahmedabad</Option>);
city.push(<Option key="city2">Surat</Option>);
city.push(<Option key="city3">Vadodara</Option>);
city.push(<Option key="city4">Rajkot</Option>);
city.push(<Option key="city5">Bhavnagar</Option>);
city.push(<Option key="city6">Jamnagar</Option>);
city.push(<Option key="city7">Junagadh</Option>);
city.push(<Option key="city8">Gandhinagar</Option>);
city.push(<Option key="city9">Gandhidham</Option>);
city.push(<Option key="city10">Anand</Option>);

const house = [];

house.push(<Option key="house1">1 BHK House </Option>);
house.push(<Option key="house2">2 BHK House </Option>);
house.push(<Option key="house3">3 BHK House </Option>);
house.push(<Option key="house4">4 BHK House </Option>);
house.push(<Option key="house5">5 BHK House </Option>);
house.push(<Option key="house6">1 BHK Flat </Option>);
house.push(<Option key="house7">2 BHK Flat </Option>);
house.push(<Option key="house8">3 BHK Flat </Option>);
house.push(<Option key="house9">4 BHK Flat </Option>);
house.push(<Option key="house10">5 BHK Flat </Option>);

const vehicle = [];

vehicle.push(<Option key="vehicle1">2 wheeler Bike </Option>);
vehicle.push(<Option key="vehicle3">4 wheeler Vehicle </Option>);
vehicle.push(<Option key="vehicle2">2 wheeler Activa </Option>);

const income = [];

income.push(<Option key="income1"> less than 3 LPA </Option>);
income.push(<Option key="income3"> 3 LPA to 5 LPA </Option>);
income.push(<Option key="income2"> 5 LPA to 10 LPA</Option>);
income.push(<Option key="income4"> 10 LPA to 15 LPA</Option>);
income.push(<Option key="income5"> 15 LPA to 20 LPA</Option>);
income.push(<Option key="income6"> 20 LPA +</Option>);

function handleChange(value) {
  console.log(`selected ${value}`);
}

class Search extends Component {
  render() {
    return (
      <>
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <h4 className="mb-4 white-text text-center">
              Please add your requirements
            </h4>
          </div>
        </div>
        <div className="card card-body bg-light mb-3">
          <h3 className="text-center text-info">Basic Info Add</h3>
        </div>

        <Select
          mode="tags"
          style={{ width: "100%" }}
          placeholder="Add City"
          onChange={handleChange}
        >
          {city}
        </Select>
        <br />
        <br />
        <Select
          mode="tags"
          style={{ width: "100%" }}
          placeholder="Add House/ Flat Related Info"
          onChange={handleChange}
        >
          {house}
        </Select>
        <br />
        <br />
        <Select
          mode="tags"
          style={{ width: "100%" }}
          placeholder="Add Vehicle Related Info"
          onChange={handleChange}
        >
          {vehicle}
        </Select>
        <br />
        <br />
        <Select
          mode="tags"
          style={{ width: "100%" }}
          placeholder="Add Income Related Info"
          onChange={handleChange}
        >
          {income}
        </Select>
        <hr />
        <hr />
        <div className="card card-body bg-light mb-3">
          <h3 className="text-center text-info">Education Related Info Add</h3>
        </div>

        <Select
          mode="tags"
          style={{ width: "100%" }}
          placeholder="Last Degree"
          onChange={handleChange}
        >
          {}
        </Select>
        <br />
        <br />
        <Select
          mode="tags"
          style={{ width: "100%" }}
          placeholder="Field of Study"
          onChange={handleChange}
        >
          {}
        </Select>
      </>
    );
  }
}

export default Search;

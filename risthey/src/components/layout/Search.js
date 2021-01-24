import React, { Component } from "react";
import { Select } from "antd";
import "./search.css";
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
house.push(<Option key="house11">5 BHK House+ </Option>);
house.push(<Option key="house6">1 BHK Flat </Option>);
house.push(<Option key="house7">2 BHK Flat </Option>);
house.push(<Option key="house8">3 BHK Flat </Option>);
house.push(<Option key="house9">4 BHK Flat </Option>);
house.push(<Option key="house10">5 BHK Flat </Option>);
house.push(<Option key="house12">5 BHK Flat+ </Option>);

const vehicle = [];

vehicle.push(<Option key="vehicle1">2 wheeler Bike </Option>);
vehicle.push(<Option key="vehicle3">4 wheeler Vehicle </Option>);
vehicle.push(<Option key="vehicle2">2 wheeler Scooty </Option>);

const income = [];

income.push(<Option key="income1"> less than 3 LPA </Option>);
income.push(<Option key="income3"> 3 LPA to 5 LPA </Option>);
income.push(<Option key="income2"> 5 LPA to 10 LPA</Option>);
income.push(<Option key="income4"> 10 LPA to 15 LPA</Option>);
income.push(<Option key="income5"> 15 LPA to 20 LPA</Option>);
income.push(<Option key="income6"> 20 LPA +</Option>);

const age = [];

age.push(<Option key="age1">18-20</Option>);
age.push(<Option key="age2">20-23</Option>);
age.push(<Option key="age3">23-26</Option>);
age.push(<Option key="age4">26-29</Option>);
age.push(<Option key="age5">29-34</Option>);
age.push(<Option key="age6">34-38</Option>);
age.push(<Option key="age7">38-42</Option>);
age.push(<Option key="age8">42+</Option>);

const education = [];

education.push(<Option key="lastEdu1"> Bachelor of Arts</Option>);
education.push(<Option key="lastEdu2"> Bachelor of Science</Option>);
education.push(<Option key="lastEdu3">Bachelor of Commerce </Option>);
education.push(<Option key="lastEdu4">Bachelor of Engg./Tech </Option>);
education.push(<Option key="lastEdu5"> BMS/BBA/BBS</Option>);
education.push(<Option key="lastEdu6">Bachelor of Law </Option>);
education.push(<Option key="lastEdu7">Bachelor of Medicine (MBBS)</Option>);
education.push(
  <Option key="lastEdu16">Bachelor OF COMPUTER APPLICATIONS (B.C.A)</Option>
);
education.push(<Option key="lastEdu8">Integrated Mgmt. Programme</Option>);
education.push(<Option key="lastEdu9">MASTER OF TECHNOLOGY (M.TECH)</Option>);
education.push(<Option key="lastEdu10">DOCTORATE OF MEDICINE (MD)</Option>);
education.push(<Option key="lastEdu11">MASTER OF SCIENCE (M.SC)</Option>);
education.push(<Option key="lastEdu12">MASTER OF ARTS (MA)</Option>);
education.push(<Option key="lastEdu13">MASTER OF LAWS (L.L.M.)</Option>);
education.push(<Option key="lastEdu14">MASTER OF COMMERCE (M.COM)</Option>);
education.push(
  <Option key="lastEdu15">MASTER OF COMPUTER APPLICATIONS (M.C.A)</Option>
);
education.push(<Option key="lastEdu17">POST GRADUATE DIPLOMA</Option>);
education.push(<Option key="lastEdu17">Other</Option>);

const fieldOfStudy = [];
fieldOfStudy.push(<Option key="Management">Management </Option>);
fieldOfStudy.push(<Option key="Engineering">Engineering </Option>);
fieldOfStudy.push(<Option key="BMCA">Computer Application-BCA/MCA</Option>);
fieldOfStudy.push(<Option key="BJMC">Mass-communication/Journalism </Option>);
fieldOfStudy.push(<Option key="Medical">Medical </Option>);
fieldOfStudy.push(<Option key="Finance">Finance </Option>);
fieldOfStudy.push(<Option key="Arts ">Arts</Option>);
fieldOfStudy.push(<Option key="Teaching">Education / Teaching</Option>);
fieldOfStudy.push(<Option key="Pharmacy ">Pharmacy </Option>);
fieldOfStudy.push(<Option key="Tourism">Tourism </Option>);
fieldOfStudy.push(<Option key="Nursing">Nursing</Option>);
fieldOfStudy.push(<Option key="Other">other</Option>);

function handleChange(value) {
  console.log(`selected ${value}`);
}

class Search extends Component {
  render() {
    return (
      <>
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <h4 className="mb-4 white-text text-center">
              Please add your Basic requirements (कृपया अपनी मूलभूत आवश्यकताओं
              को जोड़ें)
            </h4>
          </div>
        </div>
        <Select
          mode="tags"
          style={{ width: "100%" }}
          placeholder="Add City (शहर जोड़ें)"
          onChange={handleChange}
        >
          {city}
        </Select>
        <br />
        <br />
        <Select
          mode="tags"
          style={{ width: "100%" }}
          placeholder="Add House/ Flat Related Info (हाउस / फ्लैट संबंधित जानकारी जोड़ें)"
          onChange={handleChange}
        >
          {house}
        </Select>
        <br />
        <br />
        <Select
          mode="tags"
          style={{ width: "100%" }}
          placeholder="Add Vehicle Related Info (वाहन संबंधित जानकारी जोड़ें)"
          onChange={handleChange}
        >
          {vehicle}
        </Select>
        <br />
        <br />
        <Select
          mode="tags"
          style={{ width: "100%" }}
          placeholder="Add Income Related Info (आय से संबंधित जानकारी जोड़ें)"
          onChange={handleChange}
        >
          {income}
        </Select>
        <br />
        <br />
        <Select
          mode="tags"
          style={{ width: "100%" }}
          placeholder="Add Age Related Info (उम्र से संबंधित जानकारी जोड़ें)"
          onChange={handleChange}
        >
          {age}
        </Select>
        <br />
        <br />
        <div className="card blue darken-1">
          <div className="card-content white-text">
            <h4 className="mb-4 white-text text-center">
              Please add your Education related requirements (कृपया अपनी शिक्षा
              संबंधी आवश्यकताओं को जोड़ें)
            </h4>
          </div>
        </div>
        <Select
          mode="tags"
          style={{ width: "100%" }}
          placeholder="Add degrees you want to have in your match (आप अपने मैच में जो डिग्री चाहते हैं, उसे जोड़ें)"
          onChange={handleChange}
        >
          {education}
        </Select>
        <br />
        <br />
        <Select
          mode="tags"
          style={{ width: "100%" }}
          placeholder="Field of Study (अध्ययन क्षेत्र)"
          onChange={handleChange}
        >
          {fieldOfStudy}
        </Select>
      </>
    );
  }
}

export default Search;

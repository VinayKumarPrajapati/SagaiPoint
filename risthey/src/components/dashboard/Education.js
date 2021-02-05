import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteEducation } from "../../actions/profileActions";
import { Table } from "antd";

class Education extends Component {
  onDeleteClick(id) {
    this.props.deleteEducation(id);
  }

  render() {
    this.props.education.map(function (edu, count = 0) {
      edu.to = new Date(edu.to).toLocaleDateString();
      edu.from = new Date(edu.from).toLocaleDateString();
      return [count++, edu];
    });
    const columns = [
      {
        title: "स्कूल (School))",
        dataIndex: "school",
        key: "school",
        sorter: true,
        width: "30%",
      },
      {
        title: "डिग्री (Degree)",
        dataIndex: "degree",
        key: "degree",
        sorter: true,
        width: "30%",
      },
      {
        title: "वर्षों (Years)",
        dataIndex: "years",
        key: "years",
        sorter: true,
        width: "30%",
      },
      {
        title: "वर्षों (edu.from)",
        dataIndex: "from",
        key: "from",
        sorter: true,
        width: "10%",
      },
      {
        title: "वर्षों (edu.to)",
        dataIndex: "to",
        key: "to",
        width: "10%",
        sorter: true,
      },
      {
        title: "Delete (मिटाना)",
        dataIndex: "tags",
        key: "tags",
        render: (text, record) => (
          <button
            onClick={this.onDeleteClick.bind(this, this.props.education._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        ),
      },
    ];

    return (
      <>
        <div className="bg"></div>
        <div className="bg bg2"></div>
        <div className="bg bg3"></div>
        <div className="card blue darken-1">
          <div className="card-content white-text valign center">
            <h4 className="white-text">शिक्षा से संबंधित जानकारी</h4>
          </div>
        </div>
        <Table dataSource={this.props.education} columns={columns}></Table>
      </>
    );
  }
}

Education.propTypes = {
  deleteEducation: PropTypes.func.isRequired,
};

export default connect(null, { deleteEducation })(Education);

import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteFamily } from "../../actions/profileActions";
import { Table } from "antd";

class Family extends Component {
  onDeleteClick(id) {
    this.props.deleteFamily(id);
  }

  render() {
    const columns = [
      {
        title: "पिता का नाम (Father's Name)",
        dataIndex: "fatherName",
        key: "fatherName",
        sorter: true,
        width: "30%",
      },

      {
        title: "माता का नाम (Mother's Name)",
        dataIndex: "MotherName",
        key: "MotherName",
        sorter: true,
        width: "30%",
      },
      {
        title: "कुल भाई बहन (Total Siblings)",
        dataIndex: "siblings",
        key: "siblings",
        sorter: true,
        width: "30%",
      },
      {
        title: "अन्य जानकारी (Other Details)",
        dataIndex: "otherDetails",
        key: "otherDetails",
        sorter: true,
        width: "30%",
      },
      {
        title: "Delete (मिटाना)",
        dataIndex: "tags",
        key: "tags",
        render: (text, record) => (
          <button
            onClick={this.onDeleteClick.bind(this, this.props.family._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        ),
      },
    ];

    return (
      <>
        <div className="card blue darken-1">
          <div className="card-content white-text valign center">
            <h4 className="white-text">परिवार संबंधी जानकारी</h4>
          </div>
        </div>
        <Table
          dataSource={this.props.education}
          columns={columns}
          onChange={this.handleTableChange}
        ></Table>
      </>
    );
  }
}

Family.propTypes = {
  deleteFamily: PropTypes.func.isRequired,
};

export default connect(null, { deleteFamily })(Family);

import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteFamilyMember } from "../../actions/profileActions";
import { Table } from "antd";

class FamilyMember extends Component {
  onDeleteClick(id) {
    this.props.deleteFamilyMember(id);
  }

  render() {
    const columns = [
      {
        title: "नाम (Name)",
        dataIndex: "name",
        key: "name",
        sorter: true,
        width: "30%",
      },
      {
        title: "Delete (मिटाना)",
        dataIndex: "tags",
        key: "tags",
        render: (text, record) => (
          <button
            onClick={this.onDeleteClick.bind(this, this.props.famMember._id)}
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
          <div className="card-content white-text">
            <h4 className="mb-4 white-text">आपके परिवार के सदस्य की जानकारी</h4>
          </div>
        </div>
        <Table dataSource={this.props.famMember} columns={columns}></Table>
      </>
    );
  }
}

FamilyMember.propTypes = {
  deleteFamilyMember: PropTypes.func.isRequired,
};

export default connect(null, { deleteFamilyMember })(FamilyMember);

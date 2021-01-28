import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteExperience } from "../../actions/profileActions";
import { Table } from "antd";
import reqwest from "reqwest";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const getRandomuserParams = (params) => ({
  results: params.pagination.pageSize,
  page: params.pagination.current,
  ...params,
});
class Experience extends Component {
  onDeleteClick(id) {
    this.notify();
    this.props.deleteExperience(id);
  }
  notify = () => toast("Experience Details has been successfully deleted");

  state = {
    data: [],
    pagination: {
      current: 1,
      pageSize: 10,
    },
    loading: false,
  };
  componentDidMount() {
    const { pagination } = this.state;
    this.fetch({ pagination });
  }
  handleTableChange = (pagination, filters, sorter) => {
    this.fetch({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination,
      ...filters,
    });
  };
  fetch = (params = {}) => {
    this.setState({ loading: true });
    reqwest({
      url: "",
      method: "get",
      type: "json",
      data: getRandomuserParams(params),
    }).then((data) => {
      console.log(data);
      this.setState({
        loading: false,
        data: data.results,
        pagination: {
          ...params.pagination,
          total: 200,
        },
      });
    });
  };
  render() {
    this.props.experience.map(function (exp, count = 0) {
      exp.to = new Date(exp.to).toLocaleDateString();
      exp.from = new Date(exp.from).toLocaleDateString();
      return [count++, exp];
    });

    const columns = [
      {
        title: "कंपनी (Company)",
        dataIndex: "company",
        key: "company",
        sorter: true,
        width: "30%",
        filters: [
          { text: "job", value: "job" },
          { text: "business", value: "bussiness" },
        ],
      },
      {
        title: "शीर्षक (Title)",
        dataIndex: "title",
        key: "title",
        sorter: true,
        width: "20%",
      },
      {
        title: "वर्षों (exp.from)",
        dataIndex: "from",
        key: "from",
        sorter: true,
        width: "10%",
      },
      {
        title: "वर्षों (exp.to)",
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
            onClick={this.onDeleteClick.bind(this, this.props.experience._id)}
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
            <h4 className="white-text ">नौकरी / व्यवसाय संबंधित जानकारी</h4>
          </div>
        </div>
        <ToastContainer />

        <Table
          dataSource={this.props.experience}
          columns={columns}
          onChange={this.handleTableChange}
        ></Table>
      </>
    );
  }
}

Experience.propTypes = {
  deleteExperience: PropTypes.func.isRequired,
};

export default connect(null, { deleteExperience })(Experience);

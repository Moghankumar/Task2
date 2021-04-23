import React, { Component } from "react";
import search from "../Images/Header/search.png";
import notification from "../Images/Header/Notification.png";
import photo from "../Images/Header/photo.png";
import Table from "./Table";

export class Resultshow extends Component {
  render() {
    return (
      <div className="container ">
        {this.props.count == 2 ? (
          <div>
            <div className="leftlogos ">
              <p className="contentname">Tickets</p>
              <div
                style={{
                  justifyContent: "space-between",
                  display: "flex",
                  marginTop: "10px",
                }}
              >
                <img
                  src={search}
                  alt="Search"
                  style={{ width: "16px", height: "16px" }}
                />
                <img
                  src={notification}
                  alt="Notification"
                  style={{ width: "16px", height: "16px", marginLeft: "18px" }}
                />
                <span
                  style={{
                    border: "1px solid #DFE0EB",
                    marginTop: "-5.5px",
                    marginLeft: "18px",
                    height: "32px",
                  }}
                ></span>
                <p className="username">Ranjith Venula </p>
                <img
                  src={photo}
                  alt="Profile Picture"
                  style={{
                    width: "40px",
                    height: "40px",
                    marginLeft: "15px",
                    marginTop: "-10px",
                  }}
                />
              </div>
            </div>
            <div>
              <Table />
              <br />
              <br />
            </div>
          </div>
        ) : (
          <div className="noresult">
            <h5>No Data</h5>
          </div>
        )}
      </div>
    );
  }
}

export default Resultshow;

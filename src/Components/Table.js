import React, { Component } from "react";
import sort from "../Images/Table/sort.png";
import filter from "../Images/Table/Vector.png";
import avatar1 from "../Images/Table/Avatar.png";
import details from "../Images/Table/Details.png";
import avatar2 from "../Images/Table/Avatar2.png";
import avatar3 from "../Images/Table/Avatar3.png";
import avatar4 from "../Images/Table/Avatar4.png";
import avatar5 from "../Images/Table/Avatar5.png";
import avatar6 from "../Images/Table/Avatar6.png";
import avatar7 from "../Images/Table/Avatar7.png";
import downarrow from "../Images/Table/DownArrow.png";
import previous from "../Images/Table/left.png";
import next from "../Images/Table/right.png";
export class Table extends Component {
  render() {
    return (
      <div className="cardtable">
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "20px",
            }}
          >
            <p className="tabletitle">All tickets</p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <img
                  src={sort}
                  alt="Sorting"
                  style={{ width: "16px", height: "16px" }}
                />
                <p className="tablesf">Sort</p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginLeft: "20px",
                }}
              >
                <img
                  src={filter}
                  alt="Filter"
                  style={{ width: "16px", height: "16px" }}
                />
                <p className="tablesf">Filter</p>
              </div>
            </div>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col" style={{ paddingLeft: "20px" }}>
                  Ticket details
                </th>
                <th scope="col">Customer name</th>
                <th scope="col">Date</th>
                <th scope="col">Priority</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ paddingLeft: "20px" }}>
                  <div className="coluser">
                    <img src={avatar1} alt="Avatar" className="avataricon" />
                    <div className="contentdes">
                      <p className="contestdesp1">Contact Email not Linked</p>
                      <p className="contestdesp2">Updated 1 day ago</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="contentl2">
                    <p className="contestdesp1">Tom Cruise</p>
                    <p className="contestdesp2">on 24.05.2019</p>
                  </div>
                </td>
                <td>
                  <div className="contentl2">
                    <p className="contestdesp1">May 26, 2019</p>
                    <p className="contestdesp2">6:30 PM</p>
                  </div>
                </td>
                <td>
                  <div className="contentl2">
                    <button className="btn btn-danger prioritybtn">High</button>
                  </div>
                </td>
                <td>
                  <img
                    src={details}
                    alt="Details"
                    style={{
                      width: "4px",
                      height: "16px",
                      marginTop: "25px",
                    }}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "20px" }}>
                  <div className="coluser">
                    <img src={avatar2} alt="Avatar" className="avataricon" />
                    <div className="contentdes">
                      <p className="contestdesp1">
                        Adding Images to Featured Posts
                      </p>
                      <p className="contestdesp2">Updated 1 day ago</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="contentl2">
                    <p className="contestdesp1">Matt Damon</p>
                    <p className="contestdesp2">on 24.05.2019</p>
                  </div>
                </td>
                <td>
                  <div className="contentl2">
                    <p className="contestdesp1">May 26, 2019</p>
                    <p className="contestdesp2">8:00 AM</p>
                  </div>
                </td>
                <td>
                  <div className="contentl2">
                    <button className="btn btn-warning prioritybtn">Low</button>
                  </div>
                </td>
                <td>
                  <img
                    src={details}
                    alt="Details"
                    style={{ width: "4px", height: "16px", marginTop: "25px" }}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "20px" }}>
                  <div className="coluser">
                    <img src={avatar3} alt="Avatar" className="avataricon" />
                    <div className="contentdes">
                      <p className="contestdesp1">
                        When will I be charged this month?
                      </p>
                      <p className="contestdesp2">Updated 1 day ago</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="contentl2">
                    <p className="contestdesp1">Robert Downey</p>
                    <p className="contestdesp2">on 24.05.2019</p>
                  </div>
                </td>
                <td>
                  <div className="contentl2">
                    <p className="contestdesp1">May 26, 2019</p>
                    <p className="contestdesp2">7:30 PM</p>
                  </div>
                </td>
                <td>
                  <div className="contentl2">
                    <button className="btn btn-danger prioritybtn">High</button>
                  </div>
                </td>
                <td>
                  <img
                    src={details}
                    alt="Details"
                    style={{ width: "4px", height: "16px", marginTop: "25px" }}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "20px" }}>
                  <div className="coluser">
                    <img src={avatar4} alt="Avatar" className="avataricon" />
                    <div className="contentdes">
                      <p className="contestdesp1">Payment not going through</p>
                      <p className="contestdesp2">Updated 2 days ago</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="contentl2">
                    <p className="contestdesp1">Christian Bale</p>
                    <p className="contestdesp2">on 24.05.2019</p>
                  </div>
                </td>
                <td>
                  <div className="contentl2">
                    <p className="contestdesp1">May 25, 2019</p>
                    <p className="contestdesp2">5:00 PM</p>
                  </div>
                </td>
                <td>
                  <div className="contentl2">
                    <button className="btn btn-success prioritybtn">
                      Normal
                    </button>
                  </div>
                </td>
                <td>
                  <img
                    src={details}
                    alt="Details"
                    style={{ width: "4px", height: "16px", marginTop: "25px" }}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "20px" }}>
                  <div className="coluser">
                    <img src={avatar5} alt="Avatar" className="avataricon" />
                    <div className="contentdes">
                      <p className="contestdesp1">Downtime since last week</p>
                      <p className="contestdesp2">Updated 3 days ago</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="contentl2">
                    <p className="contestdesp1">Chris Evans</p>
                    <p className="contestdesp2">on 23.05.2019</p>
                  </div>
                </td>
                <td>
                  <div className="contentl2">
                    <p className="contestdesp1">May 25, 2019</p>
                    <p className="contestdesp2">2:00 PM</p>
                  </div>
                </td>
                <td>
                  <div className="contentl2">
                    <button className="btn btn-success prioritybtn">
                      Normal
                    </button>
                  </div>
                </td>
                <td>
                  <img
                    src={details}
                    alt="Details"
                    style={{ width: "4px", height: "16px", marginTop: "25px" }}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ paddingLeft: "20px" }}>
                  <div className="coluser">
                    <img src={avatar6} alt="Avatar" className="avataricon" />
                    <div className="contentdes">
                      <p className="contestdesp1">Referral Bonus</p>
                      <p className="contestdesp2">Updated 4 day ago</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="contentl2">
                    <p className="contestdesp1">Sam Smith</p>
                    <p className="contestdesp2">on 22.05.2019</p>
                  </div>
                </td>
                <td>
                  <div className="contentl2">
                    <p className="contestdesp1">May 25, 2019</p>
                    <p className="contestdesp2">11:30 AM</p>
                  </div>
                </td>
                <td>
                  <div className="contentl2">
                    <button className="btn btn-warning prioritybtn">Low</button>
                  </div>
                </td>
                <td>
                  <img
                    src={details}
                    alt="Details"
                    style={{ width: "4px", height: "16px", marginTop: "25px" }}
                  />
                </td>
              </tr>{" "}
              <tr>
                <td style={{ paddingLeft: "20px" }}>
                  <div className="coluser">
                    <img src={avatar7} alt="Avatar" className="avataricon" />
                    <div className="contentdes">
                      <p className="contestdesp1">
                        How do I change my password?
                      </p>
                      <p className="contestdesp2">Updated 6 days ago</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="contentl2">
                    <p className="contestdesp1">Steve Rogers</p>
                    <p className="contestdesp2">on 21.05.2019</p>
                  </div>
                </td>
                <td>
                  <div className="contentl2">
                    <p className="contestdesp1">May 24, 2019</p>
                    <p className="contestdesp2">1:00 PM</p>
                  </div>
                </td>
                <td>
                  <div className="contentl2">
                    <button className="btn btn-success prioritybtn">
                      Normal
                    </button>
                  </div>
                </td>
                <td>
                  <img
                    src={details}
                    alt="Details"
                    style={{ width: "4px", height: "16px", marginTop: "25px" }}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "20px",
          }}
        >
          <span></span>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <div>
              <p>
                Rows per page: 8 <img src={downarrow} alt="Pages" />
              </p>
            </div>
            <div style={{ marginLeft: "35px", display: "flex" }}>
              <p>1-8 of 1240</p>
              <img
                src={previous}
                alt="Previous"
                style={{
                  width: "6px",
                  height: "12px",
                  marginLeft: "20px",
                  marginTop: "6px",
                }}
              />
              <img
                src={next}
                alt="Next"
                style={{
                  width: "6px",
                  height: "12px",
                  marginLeft: "20px",
                  marginTop: "6px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Table;

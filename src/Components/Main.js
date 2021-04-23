import React, { Component } from "react";
import logo from "../Images/logo.png";
import overview from "../Images/Overview.png";
import tickets from "../Images/Tickets.png";
import ideas from "../Images/Ideas.png";
import contact from "../Images/Contacts.png";
import agents from "../Images/Agents.png";
import setting from "../Images/Setting.png";
import subscription from "../Images/Subscription.png";
import articles from "../Images/Articles.png";
import Resultshow from "./Resultshow";

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 2,
    };
  }
  render() {
    return (
      <div className="row">
        <div className="col-lg-2 rightcolumn">
          <div>
            <div className="container rightlogo">
              <img
                src={logo}
                alt="logo"
                style={{ width: "32px", height: "32px" }}
              />
              <p>Home</p>
            </div>
            <div style={{ marginTop: "50px" }}>
              <div
                className={`${
                  this.state.count === 1 ? "optionselected" : " rightoptions"
                }`}
                onClick={() => {
                  this.setState({ count: 1 });
                }}
              >
                <div className="container rightoptionselect">
                  <img
                    src={overview}
                    alt="Overview"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <p>Overview</p>
                </div>
              </div>
              <div
                className={`${
                  this.state.count === 2 ? "optionselected" : " rightoptions"
                }`}
                onClick={() => {
                  this.setState({ count: 2 });
                }}
              >
                <div className="container rightoptionselect">
                  <img
                    src={tickets}
                    alt="Tickets"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <p>Tickets</p>
                </div>
              </div>
              <div
                className={`${
                  this.state.count === 3 ? "optionselected" : " rightoptions"
                }`}
                onClick={() => {
                  this.setState({ count: 3 });
                }}
              >
                <div className="container rightoptionselect">
                  <img
                    src={ideas}
                    alt="Ideas"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <p>Ideas</p>
                </div>
              </div>
              <div
                className={`${
                  this.state.count === 4 ? "optionselected" : " rightoptions"
                }`}
                onClick={() => {
                  this.setState({ count: 4 });
                }}
              >
                <div className="container rightoptionselect">
                  <img
                    src={contact}
                    alt="Contacts"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <p>Contacts</p>
                </div>
              </div>
              <div
                className={`${
                  this.state.count === 5 ? "optionselected" : " rightoptions"
                }`}
                onClick={() => {
                  this.setState({ count: 5 });
                }}
              >
                <div className="container rightoptionselect">
                  <img
                    src={agents}
                    alt="Agents"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <p>Agents</p>
                </div>
              </div>
              <div
                className={`${
                  this.state.count === 6 ? "optionselected" : " rightoptions"
                }`}
                onClick={() => {
                  this.setState({ count: 6 });
                }}
              >
                <div className="container rightoptionselect">
                  <img
                    src={articles}
                    alt="Articles"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <p>Articles</p>
                </div>
              </div>
              <div
                className="rightoptions"
                style={{ borderBottom: "1px solid #a4a6b3" }}
              ></div>
              <div
                className={`${
                  this.state.count === 7 ? "optionselected" : " rightoptions"
                }`}
                onClick={() => {
                  this.setState({ count: 7 });
                }}
              >
                <div className="container rightoptionselect">
                  <img
                    src={setting}
                    alt="Setting"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <p>Setting</p>
                </div>
              </div>
              <div
                className={`${
                  this.state.count === 8 ? "optionselected" : " rightoptions"
                }`}
                onClick={() => {
                  this.setState({ count: 8 });
                }}
              >
                <div className="container rightoptionselect">
                  <img
                    src={subscription}
                    alt="Subscription"
                    style={{ width: "20px", height: "20px" }}
                  />
                  <p>Subscription</p>
                </div>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-10" style={{ background: "#E5E5E5" }}>
          <Resultshow count={this.state.count} />
        </div>
      </div>
    );
  }
}

export default Main;

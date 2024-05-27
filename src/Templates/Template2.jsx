import React from "react";
import "./Template1.css";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { connect } from "react-redux";
import fieldCd from "../Redux/constants/typeCodes";

function Resume2(props) {
  // Destructuring props
  const contactdata = props.contact;
  const educationdata = props.education;
  const experienceData = props.experience;
  const skillsData = props.skills;

  // Function to get contact data based on key
  const getcontactData = (key) => {
    if (contactdata && contactdata[key]) {
      return contactdata[key];
    }
    return "";
  };

  // Function to get education data based on key
  const geteducationData = (key) => {
    if (educationdata && educationdata[key]) {
      return educationdata[key];
    }
    return "";
  };

  // Finding the maximum key in experienceData object
  const experienceKeys = Object.keys(experienceData);
  const maxKey = Math.max(...experienceKeys);

  return (
    <>
      {/* main section */}
      <div
        style={{
          width: "84vh",
          height: "120vh",
          border: "1px solid gray",
          paddingLeft: 10,
          backgroundColor: "rgb(230, 230, 230)",
        }}
      >
        {/* left section */}
        <div
          style={{
            float: "left",
            width: "32%",
            height: '95%'


          }}
        >
          <br />

          {/* personal info section */}
          <div style={{
            flex: 1,
            backgroundColor: "rgb(0, 0, 0)",
            height: "50%",
          }}>
            <h1
              style={{
                height: "4vh",
                width: "full",
                color: "white",
                marginBottom: "2vh",
                marginLeft: '1vh',
                padding: '1px'
              }}
            >
              PERSONAL INFO
              <hr style={{ border: '2px solid yellowgreen', width: '10%' }} />
            </h1>


            <div className="ml-4">
              <p className="w-full text-white mb-2">
                {getcontactData(fieldCd.FirstName)}{" "}
                {getcontactData(fieldCd.LastName)}{" "}
              </p>
              {experienceData[maxKey] && (
                <p style={{ fontSize: "100%", letterSpacing: "2px", color: 'white', marginBottom: '4px' }}>
                  {experienceData[maxKey].jobTitle}
                </p>
              )}

              <p className="w-full text-white mb-2">
                <HomeWorkIcon /> {getcontactData(fieldCd.Address)},{" "}
                {getcontactData(fieldCd.City)}-{getcontactData(fieldCd.State)}.{" "}
                {"(" + getcontactData(fieldCd.Postal) + ")"}
              </p>
              <p className="w-full text-white mb-2">
                <EmailIcon /> {getcontactData(fieldCd.Email)}
              </p>
              <p className="w-full text-white mb-2">
                <CallIcon /> +91-{getcontactData(fieldCd.Mobile)}
              </p>
            </div>

          </div>



          {/* keyskills section */}
          <div
            style={{
              flex: 1,
              backgroundColor: "rgb(210, 210, 210)",
              height: "50%",
            }}>
            <h2
              style={{
                height: "4vh",
                width: "full",
                color: "black",
                marginBottom: "8px",
                marginLeft: '1vh',
                paddingTop: '4px',
                padding: '1px'
              }}
            >
              KEY SKILLS
              <hr style={{ border: '2px solid yellowgreen', width: '10%' }} />
            </h2>

            {/* Rendering key skills */}
            {Object.keys(skillsData).map((key) => (
              <p key={key} className="ml-4 ">
                {" "}
                {skillsData[key].skill}
              </p>
            ))}
          </div>

        </div>

        <div
          style={{
            float: "right",
            width: "64%",
            height: "auto",
            padding: "5% 5%",
          }}
        >
          <div style={{ marginTop: "-2vh" }}>
            <h2
              style={{
                fontSize: "250%",
                fontWeight: "bold",
                letterSpacing: "5px",
                color: "black",
              }}
            >
              {getcontactData(fieldCd.FirstName)}
            </h2>
            <h2
              style={{
                fontSize: "250%",
                fontWeight: 'bold',
                letterSpacing: "5px",
                color: "black",
              }}
            >
              {getcontactData(fieldCd.LastName)}
            </h2>
          </div>

          {/* Rendering job title from experienceData */}
          {experienceData[maxKey] && (
            <p style={{ fontSize: "100%", letterSpacing: "5px", backgroundColor: 'yellowgreen' }}>
              {experienceData[maxKey].jobTitle}

            </p>

          )}

          <br />
          <hr />
          <br />

          <div
            style={{
              width: "full",
              height: "4vh",
              color: "black",


            }}
          >
            OBJECTIVE
            <hr style={{ border: '2px solid yellowgreen', width: '10%' }} />
          </div>

          <p
            className="OBJECTIVE"
            style={{
              height: "auto",
              width: "full",
              paddingTop: "5px",
              paddingBottom: "5px",
              color: "black",
            }}
          >
            {getcontactData(fieldCd.Objective)}
          </p>

          <div
            style={{
              height: "4vh",
              width: "full",
              color: "black",
              marginTop: '3vh'
            }}
          >
            <h1 >
              WORK EXPERIENCE
            </h1>
            <hr style={{ border: '2px solid yellowgreen', width: '10%' }} />
          </div>

          {/* Rendering work experience */}
          {Object.keys(experienceData).map((key) => (
            <div key={key}>
              <h1 style={{ fontWeight: "bold", paddingTop: "1px" }}>
                {experienceData[key].jobTitle}
              </h1>
              <p>{experienceData[key].organizationName}</p>
              <p style={{ color: "blue", paddingBottom: "5px" }}>
                <span style={{ color: "black" }}>From</span>{" "}
                {experienceData[key].startYear}{" "}
                <span style={{ color: "black" }}>To</span>{" "}
                {experienceData[key].endYear}
              </p>
              <hr />
            </div>
          ))}

          <div
            style={{
              height: "4vh",
              width: "full",
              color: "black",
              fontWeight: "bold",
              marginTop: "3vh"

            }}
          >
            <h1 style={{ color: "black" }}>EDUCATION</h1>
            <hr style={{ border: '2px solid yellowgreen', width: '10%' }} />
          </div>
          <h1
            className="type"
            style={{
              height: "auto",
              width: "full",
              fontWeight: "bold",
              paddingTop: "5px",
              color: "black",
            }}
          >
            {geteducationData(fieldCd.Type)} :-
          </h1>
          <p
            className="university"
            style={{ height: "auto", width: "full", color: "black" }}
          >
            {geteducationData(fieldCd.University)}
          </p>
          <p
            className="degree"
            style={{ height: "auto", width: "full", color: "black" }}
          >
            {geteducationData(fieldCd.Degree)}
          </p>
          <p
            className="degree"
            style={{ height: "auto", width: "full", color: "black" }}
          >
            <span style={{ color: "blue" }}>
              {geteducationData(fieldCd.Startyear)}
            </span>{" "}
            to{" "}
            <span style={{ color: "blue" }}>
              {geteducationData(fieldCd.Endyear)}
            </span>
            .
          </p>
        </div>
      </div>
    </>
  );
}

// Map the Redux state to component props
const mapStateToProps = (state) => {
  return {
    // Assigning contactReducer state to 'contact' prop
    contact: state.contactReducer,
    // Assigning educationReducer state to 'education' prop
    education: state.educationReducer,
    // Assigning experienceReducer state to 'experience' prop
    experience: state.experienceReducer,
    // Assigning keyskillsReducer state to 'skills' prop
    skills: state.keyskillsReducer
  };
};


export default connect(mapStateToProps)(Resume2);
import React from "react";
import "./Template1.css";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import { connect } from "react-redux";
import fieldCd from "../Redux/constants/typeCodes";

function Resume1(props) {
  // Retrieve data from props
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

  // Retrieve keys from experienceData object
  const experienceKeys = Object.keys(experienceData);
  // Find the maximum key value
  const maxKey = Math.max(...experienceKeys);

  return (
    <>
      <div
        className="container"
        style={{
          width: "100vh",
          height: "100vh",
          border: "1px solid gray",
        }}
      >
        <div
          style={{
            padding: "5% 5%",
            float: "left",
            width: "36%",
            height: "100vh",
            backgroundColor: "rgb(0, 0, 0)",
          }}
        >
          <h1
            style={{
              height: "4vh",
              width: "90%",
              color: "white",

              marginBottom: "2px",
              textAlign: "center",
              marginTop: "10vh",
            }}
          >
            PERSONAL INFO
          </h1>
          <hr />


          {/* Display contact information */}
          <p
            className="NAME"
            style={{ width: "90%", color: "white", marginBottom: "2vh" }}
          >
            {getcontactData(fieldCd.FirstName)}{" "}
            {getcontactData(fieldCd.LastName)}
          </p>
         
          <p
            className="ADDRESS"
            style={{ width: "90%", color: "white", marginBottom: "2vh" }}
          >
            <HomeWorkIcon />
            {getcontactData(fieldCd.Address)}, {getcontactData(fieldCd.City)}-
            {getcontactData(fieldCd.State)}.{" "}
            {"(" + getcontactData(fieldCd.Postal) + ")"}
          </p>
          <p
            className="EMAIL"
            style={{
              width: "90%",
              color: "white",
              marginBottom: "2vh",
              display: "flex",
            }}
          >
            <EmailIcon />
            {getcontactData(fieldCd.Email)}
          </p>
          <p
            className="MOBILE"
            style={{ width: "90%", color: "white", marginBottom: "2vh" }}
          >
            <CallIcon /> {getcontactData(fieldCd.Mobile)}
          </p>

          <h2
            style={{
              height: "4vh",
              width: "90%",
              color: "white",
              backgroundColor: "black",
              marginBottom: "2px",
              textAlign: "center",
              marginTop: '10vh'
            }}
          >
            KEY SKILLS
          </h2>
          <hr />


          {/* Display keyskills data */}
          {Object.keys(skillsData).map((key) => (
            <p key={key} className="text-md text-white mt-2">
              {" "}
              {skillsData[key].skill}
            </p>
          ))}
        </div>

        <div

          style={{
            marginTop: '5%',
            float: "right",
            width: "64%",
            height: "auto",

          }}
        >
          <div className="bg-amber-300">
            <h1
              style={{
                fontSize: "250%",
                fontWeight: "bold",
                letterSpacing: "5px",
                marginTop: "-5vh",
                paddingLeft: '15px'

              }}
            >
              {getcontactData(fieldCd.FirstName)}
            </h1>
            <h2
              style={{
                fontSize: "250%",
                fontWeight: "bold",
                letterSpacing: "10px",
                marginTop: "-2vh",
                marginBottom: "2vh",
                paddingLeft: '15px'
              }}
            >
              {getcontactData(fieldCd.LastName)}
            </h2>


            {/* Display the job title from experienceData[maxKey] */}
            {experienceData[maxKey] && (
              <p style={{ fontSize: "100%", letterSpacing: "2px", paddingLeft: '15px' }}>
                {experienceData[maxKey].jobTitle}
              </p>
            )}
          </div>

          <br />
          <br />

          <div
            style={{
              width: "100%",
              height: "4vh",
              color: "black",

              textAlign: "center",
            }}
          >
            OBJECTIVE
          </div>
          <hr style={{ border: '1px solid black', margin: '5px 0' }} />

          {/* Display objective */}
          <p
            className="OBJECTIVE"
            style={{
              height: "auto",
              width: "90%",
              padding: "10px",
              paddingBottom: "5px",
              color: "black",
            }}
          >
            {getcontactData(fieldCd.Objective)}
          </p>

          <div
            style={{
              height: "4vh",
              width: "100%",
              color: "white",

            }}
          >
            <h1 style={{ textAlign: "center", color: "black" }}>
              WORK EXPERIENCE
            </h1>
            <hr style={{ border: '1px solid black', margin: '5px 0' }} />
          </div>

          {/* Display work experience */}
          {Object.keys(experienceData).map((key) => (
            <div className='mt-2 p-3' key={key}>
              <h1 style={{ fontWeight: "bold", paddingTop: "5px" }}>
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
              width: "100%",
              color: "white",

            }}
          >
            <h1 style={{ textAlign: "center", color: "black" }}>EDUCATION</h1>
            <hr style={{ border: '1px solid black', margin: '5px 0' }} />
          </div>


          {/* Display education details */}
          <h1
            className="type"
            style={{
              height: "auto",
              width: "90%",
              fontWeight: "bold",
              fontSize: "115%",
              paddingTop: "5px",
              paddingLeft: '10px',
              color: "black",
            }}
          >
            {geteducationData(fieldCd.Type)}:-
          </h1>
          <p
            className="university"
            style={{ height: "auto", width: "90%", color: "black", paddingLeft: '10px', fontWeight: "bold" }}
          >
            {geteducationData(fieldCd.University)}
          </p>
          <p
            className="degree"
            style={{ height: "auto", width: "90%", color: "black", paddingLeft: '10px' }}
          >
            {geteducationData(fieldCd.Degree)}.
          </p>
          <p
            className="duration"
            style={{ height: "auto", width: "90%", color: "black", paddingLeft: '10px' }}
          >
            <span style={{ color: "blue" }}>
              {geteducationData(fieldCd.Startyear)}
            </span>{" "}
            to{" "}
            <span style={{ color: "blue" }}>
              {geteducationData(fieldCd.Endyear)}
            </span>
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
    skills: state.keyskillsReducer,
  };
};

export default connect(mapStateToProps)(Resume1);


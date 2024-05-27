import React, { useState } from 'react';
import { Button, } from '@mui/material';
import { toast } from 'react-toastify';
import './Detailsfilling.css';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import KeyboardDoubleArrowRightSharpIcon from '@mui/icons-material/KeyboardDoubleArrowRightSharp';
import { Education, KeySkills, PersonalInfo, WorkExperience } from '../components';

function Detailfilling(props) {
  // Navigation Keywork
  const navigate = useNavigate();

  //Handles State of activeComponent
  const [activeComponent, setActiveComponent] = useState('personal');

  // toast message state
  const [open, setOpen] = useState(false);

  // Handle click on sidebar menu items
  const handleSidebarClick = (componentName) => {
    let shouldNavigate = true;

    // Validation logic for navigation between components
    switch (activeComponent) {
      case 'personal':
        if (componentName === 'work' && props.contact === null) {
          setOpen(true);
          shouldNavigate = false;
        }
        break;
      case 'work':
        if (componentName === 'education' && props.experience === null) {
          setOpen(true);
          shouldNavigate = false;
        }
        break;
      case 'education':
        if (componentName === 'keyskill' && props.education === null) {
          setOpen(true);
          shouldNavigate = false;
        }
        break;
      case 'keyskill':
        if (componentName === 'preview' && props.Keyskills === null) {
          setOpen(true);
          shouldNavigate = false;
        }
        break;
      default:
        break;
    }

    // Perform navigation if allowed
    if (shouldNavigate) {
      if (
        (activeComponent === 'personal' && componentName === 'work') ||
        (activeComponent === 'work' && componentName === 'education') ||
        (activeComponent === 'education' && componentName === 'keyskill')
      ) {
        setActiveComponent(componentName);
      } else if (
        (activeComponent === 'work' && componentName === 'personal') ||
        (activeComponent === 'education' && componentName === 'work') ||
        (activeComponent === 'keyskill' && componentName === 'education')
      ) {
        setActiveComponent(componentName);
      }
    }
  };

  // Handle click on Next button
  const handleNext = () => {
    switch (activeComponent) {
      case 'personal':
        if (props.contact !== null) {
          setActiveComponent('work');
        } else {
          setOpen(true);
        }
        break;
      case 'work':
        if (props.experience !== null) {
          setActiveComponent('education');
        } else {
          setOpen(true);
        }
        break;
      case 'education':
        if (props.education !== null) {
          setActiveComponent('keyskill');
        } else {
          setOpen(true);
        }
        break;
      case 'keyskill':
        if (props.Keyskills !== null) {
          navigate('/preview');
        } else {
          setOpen(true);
        }
        break;
      default:
        break;
    }
  };

  // Handle click on Back button
  const handleBack = () => {
    switch (activeComponent) {
      case 'personal':
        navigate('/Template');
        break;
      case 'work':
        setActiveComponent('personal');
        break;
      case 'education':
        setActiveComponent('work');
        break;
      case 'keyskill':
        setActiveComponent('education');
        break;
      default:
        break;
    }
  };

  // toast error notification
  if (open) {
    toast.error("Please Submit The Details!");
    setOpen(false);
  }

  return (
    <>



      {/* Main content */}
      <div className="flex flex-wrap p-3 w-full">
        <div style={{ marginLeft: '7vw', width: '30vh' }}>

          {/* Sidebar for page Navigation */}
          <div className="side">
            <ul style={{ marginTop: '5vw', backgroundColor: 'white' }}>
              <li
                className={`cursor-pointer border-black ${activeComponent === 'personal' ? ' text-blue-600 underline' : ' text-gray-500'
                  }`}
                onClick={() => handleSidebarClick('personal')}
              >
                Personal Info
              </li>
              <li
                className={`cursor-pointer ${activeComponent === 'work' ? ' text-blue-600 underline' : ' text-gray-500'
                  }`}
                onClick={() => handleSidebarClick('work')}
              >
                Work Experience
              </li>
              <li
                className={`cursor-pointer ${activeComponent === 'education' ? '  text-blue-600 underline' : ' text-gray-500'
                  }`}
                onClick={() => handleSidebarClick('education')}
              >
                Education
              </li>

              <li
                className={`cursor-pointer ${activeComponent === 'keyskill' ? ' text-blue-600 underline' : ' text-gray-500'
                  }`}
                onClick={() => handleSidebarClick('keyskill')}
              >
                Key Skill
              </li>
            </ul>
          </div>
        </div>
        <div>
          {/* Render component based on activeComponent */}
          {activeComponent === 'personal' && <PersonalInfo />}
          {activeComponent === 'work' && <WorkExperience />}
          {activeComponent === 'education' && <Education />}
          {activeComponent === 'keyskill' && <KeySkills />}
        </div>
        <div className="w-full flex flex-wrap justify-center mt-8 mb-8">
          <div className="w-full lg:w-[55vw] lg:ml-[10vw] md:w-[70vw] md:ml-[15vw] sm:w-[100vw] justifty-center items-center">

            {/* Back Button */}
            <Button
              style={{ backgroundColor: 'dodgerblue', color: '#fff', width: '10vw', marginLeft: '13vw' }}
              onClick={handleBack}
            >
              Back
            </Button>

            {/* Next Button */}
            <Button
              style={{ backgroundColor: 'dodgerblue', color: '#fff', width: '10vw', marginLeft: '20vw' }}
              onClick={handleNext}
            >
              {activeComponent === 'keyskill' ? (
                <>
                  Preview <KeyboardDoubleArrowRightSharpIcon />
                </>
              ) : (
                'Next'
              )}
            </Button>
          </div>
        </div>
      </div>

    </>
  );
}

// Mapping state from Redux to component props
const mapStateToProps = (state) => {
  return {
    contact: state.contactReducer,
    education: state.educationReducer,
    experience: state.experienceReducer,
    Keyskills: state.keyskillsReducer,
  };
};

// Mapping actions from Redux to component props
const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Detailfilling);
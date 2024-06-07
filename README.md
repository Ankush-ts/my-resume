# AlmaBetter Frontend Capstone Project

## Resume Builder Project

This project is a resume builder application.
A React application that empowers you to build resumes like never before.

Just select a template, fill in the details and your resume is ready to preview and download.

## Installation
Clone this repository in your local machine and install the needed dependencies

Type npm start in terminal to start the application after installing the dependencies using npm install <package_name>

# Libraries used
- React
- React-router-dom
- React-hook-form
- Redux
- jspdf
- Material UI and Icons
- Tailwing-css

 ## Application Folder Structure

```bash
├── public/
│	├── index.html
│    	├──images/
│		    ├── Template1.jpg
│		    ├── Template2.jpg
│		    ├── Template3.jpg	
├──src/
│	├──assets/
│	    ├──img
│	        ├──About.png
│	        ├──nodata.jpg
│	        ├──Right.jpg
│	    ├──index.js
│	├──Components/
│   	├── Education.js
│   	├── index.jsx
│		├──Keyskills.jsx
│		├──MyResume.jsx
│		├──PersonalInfo.jsx
│		├──WorkExperience.jsx
│	├──Data/
│		├──data.js
│	├──pages/
│		├──About US/
│			├──AboutUs.jsx
│		├──Home/
│			├──TemplateCard.jsx
│			├──Templates.jsx
│		├──Preview/
│			├──Preview.jsx
│		├──Detailsfilling.css
│		├──Detailsfilling.jsx
│		├──Header.jsx
│		├──index.js
│	├──Redux/
│		├──actions/
│			├──actions.js
│			├──saveresume.js
│			├──setcontact.js
│			├──seteducation.js
│			├──setexperience.js
│			├──setkeyskills.js
│			├──settemplate.js
│		├──constants/
│			├──typeCodes.js
│		├──reducers/
│			├──initialState.js
│			├──rootReducer.js
│			├──saveresume.js
│			├──setcontact.js
│			├──seteducation.js
│			├──setexperience.js
│			├──setkeyskills.js
│			├──settemplate.js
│		├──store
│			├──store.js
│	├──Templates/
│		├──Template1.css
│		├──Template1.jsx
│		├──Template2.jsx
│		├──Template3.css
│		├──Template3.jsx  
│	├──App.jsx 
│	├──App.css
│	├──App.test.js
│	├──index.css
│	├──index.js
│	├──setupTests.js
├──package-lock.json
├──package.json
└──tailwind.config.js
```

## 🔗 Link for the Project
[![DeploymentLink](https://img.shields.io/badge/DeploymentLink-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://my-resume-alpha-ashen.vercel.app/)






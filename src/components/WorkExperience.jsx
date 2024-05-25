import React, { useState, useEffect } from 'react';
import { Box, Card, TextField, Typography, Button} from '@mui/material';
import { connect } from 'react-redux';
import { setexperience, updateexperience } from '../Redux/actions/setexperience';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const WorkExperience = (props) => {
  // 'react-hook-form' for Validation
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue } = useForm();

  // State for storing work experience details
  const [experience, setExperience] = useState([
    {
      jobTitle: '',
      organizationName: '',
      startYear: '',
      endYear: '',
    },
  ]);

  // Fetch work experience details from props on component mount
  useEffect(() => {
    if (props.experience) {
      setExperience(Object.values(props.experience));
    }
  }, [props.experience]);

  // Set form values when experience state changes
  useEffect(() => {
    experience.forEach((item, key) => {
      setValue(`experience[${key}].jobTitle`, item.jobTitle);
      setValue(`experience[${key}].organizationName`, item.organizationName);
      setValue(`experience[${key}].startYear`, item.startYear);
      setValue(`experience[${key}].endYear`, item.endYear);
    });
  }, [setValue, experience]);

  // Add a new work experience entry
  const addNewClick = () => {
    const tempForm = [...experience];
    const tempEntry = {
      jobTitle: '',
      organizationName: '',
      startYear: '',
      endYear: '',
    };
    tempForm.push(tempEntry);
    setExperience(tempForm);
  };

  // Delete a work experience card
  const deleteCard = (key) => {
    const tempForm = [...experience];
    tempForm.splice(key, 1);
    setExperience(tempForm);
  };

  // Handle input change in work experience details
  const handleChange = (event, title, key) => {
    const tempForm = [...experience];
    tempForm[key] = { ...tempForm[key], [title]: event.target.value };
    setExperience(tempForm);
  };

  // Snackbar state for displaying success message
  const [open, setOpen] = useState(false);


  if (open) {
    toast.success("Personal Details Submitted!");
    setOpen(false);
  }

  // Form submission
  const onSubmit = handleSubmit((data) => {
    if (props.experience !== null) {
      // Update
      props.updateexperience(data.experience);
    } else {
      // Set
      props.setexperience(data.experience);
    }
    setOpen(true);
  });

  return (
    <>
      {/* Main content */}
      <div className="w-full lg:w-[55vw] lg:ml-[10vw] md:w-[70vw] md:ml-[15vw] sm:w-[100vw] justifty-center items-center mt-10">
        <Box>
          <Typography className="mt-4 font-bold text-2xl text-center md:text-1xl flex justify-start" variant="h5">
            Work Experience
          </Typography>

          {/* Card component */}
          {experience.map((item, key) => (

            <div key={key}>

              {/* Main content */}
              <Card style={{ borderRadius: '5px', backgroundColor: 'rgb(255, 255, 255)', padding: '2vw 5vw' }}>
                <Typography style={{ color: 'black', marginBottom: '1vw', marginTop: '2vh' }} variant="h6">
                  {` Experience - ${key + 1}`}
                </Typography>

                {/* Input fields */}
                <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-col-2 lg:grid-cols-2 gap-4 mx-auto">
                  <TextField
                    id={`jobTitle-${key}`}
                    label="Job Title"
                    variant="outlined"
                    {...register(`experience[${key}].jobTitle`, { required: true })}
                    value={item.jobTitle}
                    error={errors?.experience && errors.experience[key]?.jobTitle}
                    helperText={errors?.experience && errors.experience[key]?.jobTitle && 'Job Title is required'}
                    onChange={(e) => handleChange(e, 'jobTitle', key)}
                  />

                  <TextField
                    id={`organizationName-${key}`}
                    label="Organization Name"
                    variant="outlined"
                    {...register(`experience[${key}].organizationName`, { required: true })}
                    value={item.organizationName}
                    error={errors?.experience && errors.experience[key]?.organizationName}
                    helperText={errors?.experience && errors.experience[key]?.organizationName && 'Organization Name is required'}
                    onChange={(e) => handleChange(e, 'organizationName', key)}
                  />
                </Box>

                <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-col-2 lg:grid-cols-2 gap-4 mx-auto max-w-5xl mt-8">
                  <TextField
                    id={`startYear-${key}`}
                    label="Start Year"
                    variant="outlined"
                    {...register(`experience[${key}].startYear`, { required: true })}
                    value={item.startYear}
                    error={errors?.experience && errors.experience[key]?.startYear}
                    helperText={errors?.experience && errors.experience[key]?.startYear && 'Start Year is required'}
                    onChange={(e) => handleChange(e, 'startYear', key)}
                  />

                  <TextField
                    id={`endYear-${key}`}
                    label="End Year"
                    variant="outlined"
                    {...register(`experience[${key}].endYear`, { required: true })}
                    value={item.endYear}
                    error={errors?.experience && errors.experience[key]?.endYear}
                    helperText={errors?.experience && errors.experience[key]?.endYear && 'End Year is required'}
                    onChange={(e) => handleChange(e, 'endYear', key)}
                  />
                </Box>
                {/* Add new Experience button */}
                {key === experience.length - 1 && (
                  <Typography onClick={() => addNewClick()} style={{ margin: '10px', color: 'blue', cursor: 'pointer' }}>
                    Add New
                  </Typography>
                )}
                {/* Delete Experience button */}
                {experience.length !== 1 && (
                  <Typography onClick={() => deleteCard(key)} style={{ margin: '10px', color: 'blue', cursor: 'pointer' }}>
                    Delete
                  </Typography>
                )}

                {/* Details Submit button */}
                {key === experience.length - 1 && (
                  <div style={{ marginTop: '2vh' }}>
                    <Button style={{ backgroundColor: 'green', color: '#fff', marginLeft: '80%', width: '20%' }} type="submit" onClick={onSubmit}>
                      {props.experience ? 'Update' : 'Submit'}
                    </Button>
                  </div>
                )}
              </Card>
            </div>
          ))}
        </Box>
      </div>

    </>
  );
};
// Mapping state from Redux to component props
const mapStateToProps = (state) => {
  return {
    experience: state.experienceReducer,
  };
};
// Mapping actions from Redux to component props
const mapDispatchToProps = (dispatch) => {
  return {
    setexperience: (experience) => dispatch(setexperience(experience)),
    updateexperience: (experience) => dispatch(updateexperience(experience)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkExperience);
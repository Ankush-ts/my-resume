import React, { useState, useEffect } from 'react';
import { Box, Card, TextField, Typography, Button} from '@mui/material';
import { connect } from 'react-redux';
import { setkeyskills, updatekeyskills } from '../Redux/actions/setkeyskills';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Keyskills(props) {
  
  // navigation keyword
  const navigate = useNavigate();

  // 'react-hook-form' for Validation
  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const [skills, setSkills] = useState([{ skill: '' }, { skill: '' }, { skill: '' }]);
  const [open, setOpen] = useState(false);

  // Load skills from props on initial render
  useEffect(() => {
    if (props.skills) {
      setSkills(Object.values(props.skills));
    }
  }, [props.skills]);

  // Set form values when skills change
  useEffect(() => {
    skills.forEach((item, key) => {
      setValue(`skills[${key}].skill`, item.skill);
    });
  }, [setValue, skills]);

  // Add new skill field
  const addNewClick = () => {
    const tempForm = [...skills];
    const tempEntry = { skill: '' };
    tempForm.push(tempEntry);
    setSkills(tempForm);
  };

  // Delete skill field
  const deleteCard = (key) => {
    const tempForm = [...skills];
    tempForm.splice(key, 1);
    setSkills(tempForm);
  };

  // Handle skill field change
  const handleChange = (event, title, key) => {
    const tempForm = [...skills];
    tempForm[key] = { ...tempForm[key], [title]: event.target.value };
    setSkills(tempForm);
  };

  //toast message
  if (open) {
    toast.success("Personal Details Submitted!");
    setOpen(false);
  }

  // Handle form submission
  const onSubmit = handleSubmit((data) => {
    if (props.skills !== null) {
      // Update
      props.updatekeyskills(data.skills);
    } else {
      // Set
      props.setkeyskills(data.skills);
    }
    setOpen(true);
  });

  return (
    <>
      {/* Main content */}
      <div className="w-full lg:w-[55vw] lg:ml-[10vw] md:w-[80%] md:ml-[10%] sm:w-[100%] justify-center items-center mt-10">
      <Typography className="mt-4 font-bold text-2xl text-center md:text-1xl flex justify-start" variant="h5">
          Key Skills
        </Typography>

        {/* Card component */}
        <Card style={{ borderRadius: '5px', backgroundColor: 'rgb(255, 255, 255)', padding: '5vw 5vw' }}>
          {/* Input fields */}
          <Box className="grid grid-cols-1 sm:grid-cols-1 md:grid-col-2 lg:grid-cols-2 gap-4 mx-auto max-w-5xl mt-8">
            {skills.map((item, key) => (
              <TextField
                key={key}
                label={`Skill ${key + 1}`}
                {...register(`skills[${key}].skill`, { required: true })}
                value={item.skill}
                error={errors?.skills && errors.skills[key]?.skill}
                helperText={errors?.skills && errors.skills[key]?.skill && 'Skill is required'}
                onChange={(e) => handleChange(e, 'skill', key)}
              />
            ))}
          </Box>

          {/* Add new skill Tab Button */}
          {skills.length <= 10 && (
            <Typography onClick={addNewClick} style={{ margin: '10px', color: 'blue', cursor: 'pointer' }}>
              Add New
            </Typography>
          )}
          {/* Delete skill Tab Button */}
          {skills.length !== 1 && (
            <Typography onClick={deleteCard} style={{ margin: '10px', color: 'blue', cursor: 'pointer' }}>
              Delete
            </Typography>
          )}

              {/* Details Submit button */}
          <Button
            style={{ marginLeft: "80%", backgroundColor: 'green', color: '#fff', width: '20%' }}
            type="submit"
            onClick={onSubmit}
          >
            {props.skills ? 'update' : 'submit'}
          </Button>
        </Card>
      </div>
    </>
  );
}
// Mapping state from Redux to component props
const mapStateToProps = (state) => {
  return {
    skills: state.keyskillsReducer,
  };
};
// Mapping actions from Redux to component props
const mapDispatchToProps = (dispatch) => {
  return {
    setkeyskills: (skills) => dispatch(setkeyskills(skills)),
    updatekeyskills: (skills) => dispatch(updatekeyskills(skills)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Keyskills);
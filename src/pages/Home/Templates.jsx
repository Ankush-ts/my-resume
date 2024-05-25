import React, { useState } from 'react';
import { connect } from 'react-redux';
import TemplateCard from './TemplateCard';
import temp from '../../Data/data';

import { settemplate, updatetemplate } from '../../Redux/actions/settemplate';


function Templates(props) {

  // State to hold the templates
  const [template, setTemplate] = useState(temp);

  return (
    <>
      
      <h1 className="flex items-center justify-start mt-8 font-semibold text-xl text-center md:text-4xl px-20 mx-10">
        Templates
      </h1>
      <p className="flex items-center justify-start mt-4 font-bold text-xl text-center md:text-2xl px-20 mx-10">
        Select a Template to Get Started
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto max-w-7xl mt-8 px-8">
        {/* Iterate over each template and render a TemplateCard component */}
        {template.map((templates) => (
          <TemplateCard
            key={templates.id}
            data={templates.data}
            thumbnail={templates.thumbnail}
          />
        ))}
      </div>
    </>
  );
}

// Map the Redux state to component props
const mapStateToProps = (state) => {
  return {
    resume: state.templateReducer
  };
};

// Map the Redux dispatch actions to component props
const mapDispatchToProps = (dispatch) => {
  return {
    settemplate: (template) => dispatch(settemplate(template)),
    updatetemplate: (template) => dispatch(updatetemplate(template))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Templates);
'use strict';

import React from 'react';
import {connect} from 'react-redux';

const STAGES = [
  'Introduction',
  'Personal Information',
  'Education',
  'Documents',
  'Confirmation'
]

export default function ApplyStage (props) {
  const {stage, completed} = props;
  console.log(stage, completed);
  const baseCls = "left btn btn-primary p1 flex-auto m1";
  return (
    <div className="flex center">
      {STAGES.map((stageName, index) => {
        let cls = baseCls;
        cls = !completed.includes(index) ? cls + ' bg-gray' : cls;
        cls = index === stage ? baseCls + ' bg-olive' : baseCls;
        return (
          <button key={index} type="button" className={cls}>
            {`(${index + 1}) ${stageName}`}
          </button>
        );
      })}
    </div>
  )
}

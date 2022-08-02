import React from 'react';
import images from '../../constants/images';

const SubHeading = ({title}) => (
  <div>
     <p className='text-color_white mb-2'>{title}</p>
      <img className='text-color_golden' src={images.spoon_right} alt="" />
  </div>
);

export default SubHeading;

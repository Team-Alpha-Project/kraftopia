import React from 'react'
import { useParams } from 'react-router-dom';

const SingleDistrict = () => {
  const { districtName } = useParams();

  // Fetch data or display information about the selected district here

  return (
    <div>
      <h1>{districtName} Page</h1>
      {/* Display district-specific content here */}
    </div>
  );
}

export default SingleDistrict

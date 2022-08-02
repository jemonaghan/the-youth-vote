import React from 'react'

function Validate({ formData, setFormData }) {
  return (
    <div className="body sign-up-container">
      <h2>Please Check All the Details Are Correct</h2>
      <div>
        <p>School Name: {formData.schoolName}</p>
      </div>
      <div>
        School Address: {formData.postcode}
      </div>
      <div>
        Poll Cards: {formData.pollCardNum}
      </div>
    </div>

  )
}

export default Validate
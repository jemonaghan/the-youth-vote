import React from 'react'

function PollCards({ formData, setFormData }) {
  return (
    <div className="body sign-up-container">
      <h2>How Many Poll Cards Does Your School Need?</h2>
    <input  
        type="text"
        placeholder="Please enter how many Poll Cards you would like"
        value={formData.pollCardNum}
        onChange={(event) =>
            setFormData({ ...formData, pollCardNum: event.target.value })
      }
    />
  </div>
  )
}

export default PollCards
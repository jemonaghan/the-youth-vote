import React from 'react'

function SchoolEnter({formData, setFormData}) {
    return (
        <div className="body sign-up-container">
            <h2>Please Enter Your School Name or Postcode</h2>
            <input
                type="text"
                placeholder="Please enter you school postcode"
                value={formData.postcode}
                onChange={(event) =>
                    setFormData({ ...formData, postcode: event.target.value })
                    }
            />
        </div>
    )
}

export default SchoolEnter
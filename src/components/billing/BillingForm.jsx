import { useState } from 'react'
import Button from '../common/Button'

const initialValues = {
  company: 'abhigyan',
  email: 'abhigyan.pandey@getreelax.com',
  gst: '',
  pan: '',
  house: '',
  street: '',
  state: '',
  city: '',
  country: 'India',
  pin: '',
}

export default function BillingForm() {
  const [values, setValues] = useState(initialValues)

  function updateField(key, value) {
    setValues((current) => ({ ...current, [key]: value }))
  }

  function resetForm() {
    setValues(initialValues)
  }

  return (
    <section className="panel billing-panel">
      <a href="#" className="back-link">
        {'\u2190'} Back to plans
      </a>
      <h1>Review your details</h1>
      <p className="panel-subtitle">Billing Information</p>

      <form className="details-form" onSubmit={(event) => event.preventDefault()}>
        <div className="form-row">
          <label>
            Company Name
            <input
              value={values.company}
              onChange={(event) => updateField('company', event.target.value)}
            />
          </label>
          <label>
            Email
            <input
              type="email"
              value={values.email}
              onChange={(event) => updateField('email', event.target.value)}
            />
          </label>
        </div>

        <div className="form-row">
          <label>
            GST Number <span className="optional">(Optional)</span>
            <input
              value={values.gst}
              placeholder="GST Number"
              onChange={(event) => updateField('gst', event.target.value)}
            />
          </label>
          <label>
            PAN Number <span className="optional">(Optional)</span>
            <input
              value={values.pan}
              placeholder="PAN Number"
              onChange={(event) => updateField('pan', event.target.value)}
            />
          </label>
        </div>

        <div className="form-row">
          <label>
            Premise/House no.
            <input
              value={values.house}
              placeholder="Premise/House no."
              onChange={(event) => updateField('house', event.target.value)}
            />
          </label>
          <label>
            Street
            <input
              value={values.street}
              placeholder="Street"
              onChange={(event) => updateField('street', event.target.value)}
            />
          </label>
        </div>

        <div className="form-row">
          <label>
            State
            <select
              value={values.state}
              onChange={(event) => updateField('state', event.target.value)}
            >
              <option value="">Select state</option>
              <option value="up">Uttar Pradesh</option>
              <option value="mh">Maharashtra</option>
            </select>
          </label>
          <label>
            City
            <select
              value={values.city}
              onChange={(event) => updateField('city', event.target.value)}
            >
              <option value="">Select city</option>
              <option value="lucknow">Lucknow</option>
              <option value="mumbai">Mumbai</option>
            </select>
          </label>
        </div>

        <div className="form-row">
          <label>
            Country
            <input value={values.country} disabled />
          </label>
          <label>
            Pin Code
            <input
              value={values.pin}
              placeholder="Pincode"
              onChange={(event) => updateField('pin', event.target.value)}
            />
          </label>
        </div>

        <div className="form-actions">
          <Button variant="text" onClick={resetForm}>
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            Save Details
          </Button>
        </div>
      </form>
    </section>
  )
}

import { useState, useRef, useEffect } from "react"

function AddRecord(props) {
  const [validForm, setValidForm] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    year: 1969
  })

  const handleChange = evt => {
		setFormData({ ...formData, [evt.target.name]: evt.target.value })
	}

  const formElement = useRef()

  useEffect(() => {
		formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
	}, [formData])

  const handleSubmit = evt => {
		evt.preventDefault()
    props.handleAddRecord(formData)
	}

	return (
		<>
			<h1>Add Record</h1>
			<form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
				<div className="form-group mb-3">
					<label htmlFor="title-input" className="form-label">
						Record Title (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="title-input"
						name="title"
            value={formData.title}
            onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="artist-input" className="form-label">
						Artist (required)
					</label>
					<input 
						type="text"
						className="form-control"
						id="artist-input"
						name="artist"
            value={formData.artist}
            onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-4">
					<label htmlFor="year-input" className="form-label">
						Release Year
					</label>
					<input 
						type="number"
						className="form-control"
						id="year-input"
						name="year"
            value={formData.year}
            onChange={handleChange}
					/>
				</div>
				<div className="d-grid">
					<button
						type="submit"
						className="btn btn-primary btn-fluid"
            disabled={!validForm}
					>
						Add Record
					</button>
				</div>
			</form>
		</>
	)
}

export default AddRecord
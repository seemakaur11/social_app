import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile';
import Alert from '../layout/Alert';

const AddExperience = ({ addExperience }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        company: '',
        title: '',
        location: '',
        from: '',
        to: '',
        current: false,
        description: '',
    });
    const [toDateDisabled, toggleDisabled] = useState(false)

    const {
        company,
        title,
        location,
        from,
        to,
        current,
        description,
    } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        addExperience(formData);
        navigate('/dashboard');
    }

    return (
        <Fragment>
            <div style={{ marginTop: "100px", marginLeft: "50px" }}>
                <Alert />
                <h1 className='large text-primary'>Add An Experience</h1>
                <p className='lead'>
                    <i className='fas fa-code-branch' /> Add any
                    developer/programming positions that you have had in the past
                </p>
                <small>* = required field</small>
                <form className='form' onSubmit={e => onSubmit(e)}>
                    <div className='form-group'>
                        <input type='text' placeholder='* Job Title' name='title' required onChange={onChange} value={title} />

                    </div>
                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder='* Company'
                            name='company'
                            onChange={onChange}
                            value={company}
                            required
                        />
                    </div>
                    <div className='form-group'>
                        <input
                            type='text'
                            placeholder='Location'
                            name='location'
                            onChange={onChange}
                            value={location}

                        />
                    </div>
                    <div className='form-group'>
                        <h4>From Date</h4>
                        <input type='date' name='from' onChange={onChange} value={from} />

                    </div>
                    <div className='form-group'>
                        <p>
                            <input type='checkbox' name='current' checked={current} value={current}
                                onChange={() => {
                                    setFormData({ ...formData, current: !current });
                                    toggleDisabled(!toDateDisabled);
                                }} /> {' '}
                            Current Job
                        </p>
                    </div>
                    <div className='form-group'>
                        <h4>To Date</h4>
                        <input type='date' name='to' onChange={onChange} value={to} disabled={toDateDisabled ? 'Disabled' : ''} />
                    </div>
                    <div className='form-group'>
                        <textarea
                            name='description'
                            cols='30'
                            rows='5'
                            placeholder='Job Description'
                            value={description}
                            onChange={onChange}
                        />
                    </div>
                    <input type='submit' className='btn btn-primary my-1' />
                    <Link className='btn btn-light my-1' to='/dashboard'>
                        Go Back
                    </Link>
                </form>
            </div>
        </Fragment>
    )
}

AddExperience.propTypes = {
    addExperience: PropTypes.func.isRequired,
}

export default connect(null, { addExperience })(AddExperience);

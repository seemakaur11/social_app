import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addExperience } from '../../actions/profile';

const AddExperience = props => {
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

    return (
        <Fragment>
            <h1 className='large text-primary'>Add An Experience</h1>
            <p className='lead'>
                <i className='fas fa-code-branch' /> Add any
                developer/programming positions that you have had in the past
            </p>
            <small>* = required field</small>
            <form className='form'>
                <div className='form-group'>
                    <input type='text' placeholder='* Job Title' name='title' required />

                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='* Company'
                        name='company'
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        type='text'
                        placeholder='Location'
                        name='location'

                    />
                </div>
                <div className='form-group'>
                    <h4>From Date</h4>
                    <input type='date' name='from' />
                </div>
                <div className='form-group'>
                    <p>
                        <input type='checkbox' name='current' /> {' '}
                        Current Job
                    </p>
                </div>
                <div className='form-group'>
                    <h4>To Date</h4>
                    <input type='date' name='to' />
                </div>
                <div className='form-group'>
                    <textarea
                        name='description'
                        cols='30'
                        rows='5'
                        placeholder='Job Description'
                    />
                </div>
                <input type='submit' className='btn btn-primary my-1' />
                <Link className='btn btn-light my-1' to='/dashboard'>
                    Go Back
                </Link>
            </form>
        </Fragment>
    )
}

AddExperience.propTypes = {
    addExperience: PropTypes.func.isRequired,
}

export default connect(null, { addExperience })(AddExperience);

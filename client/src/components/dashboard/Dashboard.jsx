import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile } from '../../actions/profile';
import Spinner from '../layout/Spinner';

import { Link } from 'react-router-dom';
import DashboardAction from './DashboardAction';

const Dashboard = ({
    getCurrentProfile,
    auth: { user },
    profile: { profile, loading },
}) => {
    useEffect(() => {
        getCurrentProfile();
    }, []);

    return loading && profile === null ? (
        <Spinner />
    ) : (
        <Fragment>
            <h1 className='large text-primary' style={{ marginTop: "100px", marginLeft: "50px" }}>Dashboard</h1>
            <p className='lead' style={{ marginLeft: "50px" }}>
                <i className='fas fa-user'></i> Welcome {user && user.name}
            </p>
            {profile !== null ? (
                <Fragment>
                    <div style={{ marginLeft: "50px" }}>
                        <DashboardAction />
                    </div>
                </Fragment>
            ) : (
                <Fragment>
                    <p style={{ marginLeft: "50px" }}>You have not yet setup a profile, please add some info</p>
                    <Link to='/create-profile' className='btn btn-primary my-1' style={{ marginLeft: "50px" }}>
                        Create Profile
                    </Link>
                </Fragment>
            )}
        </Fragment>
    );
};

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(
    Dashboard
);

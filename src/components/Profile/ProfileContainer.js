import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { getUserProfileDataThunk, getStatusFromProfileThunk, updateStatusThunk } from '../../redux/profile_reducer'
import { withRouter } from 'react-router-dom'
import { AuthRedirectContainer } from '../../hoc/AuthRedirectContainer'
import { compose } from 'redux'


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId;
        }
        this.props.getUserProfileDataThunk(userId);
        this.props.getStatusFromProfileThunk(userId);
    }

    render() {
        return (
            <Profile {...this.props} />
        )
    }
}


function mapStateToProps(state) {
    return {
        profile: state.profileData.profile,
        status: state.profileData.status,
        userId: state.auth.userId,
    }
}


export default compose(
    withRouter,
    AuthRedirectContainer,
    connect(mapStateToProps, {getUserProfileDataThunk, getStatusFromProfileThunk, updateStatusThunk}),
)(ProfileContainer);

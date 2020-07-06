import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';

function mapStateToPropsForRedirect(state) {
    return {
        isLogined: state.auth.isLogined,
    }
}

export function AuthRedirectContainer(Component) {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isLogined) return <Redirect to={'/login'} />;
            return (
                <Component {...this.props} />
            );
        }
    }
    let ConnectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);
    return ConnectedRedirectComponent;
}

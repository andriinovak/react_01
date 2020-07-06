import React from 'react'


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
    };

    onEditMode = () => {
        this.setState({ editMode: true });
    }
    offEditMode = () => {
        this.setState({ editMode: false });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
        });
    }

    componentDidUpdate(prevProps, prevstate) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            });
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onClick={this.onEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.offEditMode} onChange={this.onStatusChange} value={this.state.status} />
                    </div>
                }
            </div>
        );
    }
}



export default ProfileStatus;
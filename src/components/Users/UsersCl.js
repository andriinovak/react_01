import React from 'react';
import UserItem from './UserItem';

import DownloadAnimation from './DownloadAnimation';
import Paginator from './Paginator';

class UsersCl extends React.Component {

    componentDidMount() {
        this.props.getDataAboutUsersThunk(this.props.currentPage, this.props.pageSize);
    }

    createUsersList = () => {
        let usersList = this.props.users.map((item) => <UserItem id={item.id}
            fullName={item.name}
            key={item.id}
            followed={item.followed}
            status={item.status}
            ava={item.photos.small != null ? item.photos.small : 'https://lh3.googleusercontent.com/XtyURW0mKNnKu_6TzQ5_WpuKF4A7M1oFV6p828eVEWIvTZPtZz2gq5sNM78jpNPMMRmZ'}
            setUnfollowUserThunk={this.props.setUnfollowUserThunk}
            setFollowUserThunk={this.props.setFollowUserThunk}
            followingInProgres={this.props.followingInProgres} />);
        return usersList;
    }


    render() {

        return (
            <div>
                <div> {this.props.isDownload ? <DownloadAnimation /> : null}
                    <div>
                        <Paginator getDataAboutUsers={this.props.getDataAboutUsersThunk}
                            setCurrentPage={this.props.setCurrentPage}
                            currentPage={this.props.currentPage}
                            pageSize={this.props.pageSize}
                            totalUsersCount={this.props.totalUsersCount}
                        />
                    </div>
                    <div>
                        {this.createUsersList()}
                    </div>
                    <div>
                        <Paginator getDataAboutUsers={this.props.getDataAboutUsersThunk}
                            setCurrentPage={this.props.setCurrentPage}
                            currentPage={this.props.currentPage}
                            pageSize={this.props.pageSize}
                            totalUsersCount={this.props.totalUsersCount}
                        />
                    </div>
                </div>
            </div>
        );
    }
}



export default UsersCl;
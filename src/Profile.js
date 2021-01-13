import React from 'react';
import { fetchUserData, cancelFetch } from './dataFetcher';
import { Userlist } from './Userlist';

export class Profile extends React.Component {
  //1of10 added constructor
  constructor(props) {
    super(props);
    this.state = {
      userData: null
    }
  }
  //2of10 looks correct to me
  loadUserData() {
    this.setState({userData: null})
    this.fetchID = fetchUserData(this.props.username, (userData) => {
      this.setState({ userData });
    });
  }

  render() {
    //4of10 looks to be working now i had mispelled this
    let isLoading = (this.state.userData === null) ? true : false;
    //5of10 items this doesn't work here 
    const name = isLoading ? 'Loading animal info' : this.state.userData.name;
    let className = 'Profile';
    if (isLoading) {
      className += ' loading';
    }

    return (
      <div className={className}>
        <div className="profile-picture"></div>
        <div className="profile-body">
          <h2>{name}</h2>
          <h3>@{this.props.username}</h3>
          <p>Bio goes here</p>
          <h3>My friends</h3>
          <Userlist usernames={[]} onChoose={this.props.onChoose} />
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.loadUserData();
  }
}
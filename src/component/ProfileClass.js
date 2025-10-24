import React from "react";

class ProfileClass extends React.Component {
  constructor(props) {
    console.log("constructor is called");
    super(props);
    this.state = {
      userDetails: null
    };
  }

  // we use mount  for api call
  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/sonoou");
    const resData = await data.json();
    this.setState({
      userDetails: resData,
    })
    console.log("did mount");
    this.timer = setInterval(() => {
      console.log("Sonu MERN stack");
    }, 1000);
  }

  componentDidUpdate(){
    console.log("did update");
  }

  componentWillUnmount(){
    clearInterval(this.timer);
    console.log("will unmount");
  }

  render(){
    console.log("render");
    if(this.state.userDetails === null){
      return (<h1>Loading...</h1>);
    }
    const {name, avatar_url, email} = this.state.userDetails;
    return (
      <div>
        <h1>Profile class component</h1>
        <h3>Name: {name}</h3>
        <img src={avatar_url} />
        <h3>Email: {email}</h3>
      </div>
    );
  }
}

export default ProfileClass;

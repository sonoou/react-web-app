// import Profile from "./Profile";
import ProfileClass from "./ProfileClass";
import {Component} from "react";

// const About = () => {
//   return (
//     <div>
//       <Profile  name="Patel Mernstack" address="Hyderabad" email="patel@gmail.com" />
//       <ProfileClass name="Keshav" address="Pune" email="keshav@gmail.com"/>
//     </div>
//   );
// };

// export default About;

class About extends Component{
  constructor(props){
    super(props);

  }

  render(){
    return (
      <div>
        <ProfileClass name="Keshav" address="Pune" email="keshav@gmail.com"/>
      </div>
    );
  }
}

export default About;
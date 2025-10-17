import Profile from "./Profile";
import ProfileClass from "./ProfileClass";

const About = () => {
  return (
    <div>
      <Profile  name="Patel Mernstack" address="Hyderabad" email="patel@gmail.com" />
      <ProfileClass name="Keshav" address="Pune" email="keshav@gmail.com"/>
    </div>
  );
};

export default About;

import React from 'react';
import {
  SideBar as SideBarStyle, ProfileContainer, Avatar, Name, Text,
} from './Sidebar.styled';

const Sidebar = () => {
  return (
    <SideBarStyle>
      <ProfileContainer>
        <Avatar src="https://media-exp1.licdn.com/dms/image/D4D35AQExuR8XmGau6g/profile-framedphoto-shrink_400_400/0/1666176342457?e=1668250800&v=beta&t=OLNhVeJaWS4DQj4tIB7LbiXhBaVnWkwpdWK5kScLxew" />
        <Name>Toyako</Name>
        <Text>New person in the workd</Text>
      </ProfileContainer>
    </SideBarStyle>
  );
};

export default Sidebar;

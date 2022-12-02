import styled from "styled-components";
import SidebarItem from "./SidebarItem"
import items from "../../data/sidebar.json"
import logo from "../../images/logo.png"
import profile from "../../images/profile.png"
import CakeIcon from '@material-ui/icons/Cake';

const ProfileName = styled.div`
    padding: 0px 20px;
    display: flex;
    color: #000;
    font-family: fantasy;
    margin: auto;
    width: 216px;
    font-size: 27px;
`;

export default function Sidebar(){
    return (
        <div className="sidebar">
          <a href="/"><img src={logo} alt="logo" /></a>
          <div style={{width: "100px", margin: "auto"}}>
            <img src={profile} width="75" alt="profile" />
          </div>
            <ProfileName>Kristin Watson</ProfileName>
            <div style={{color:"red", alignContent:"center", width: "55px", margin: "auto"}}>
              <CakeIcon /><span>33</span>
            </div>
          { items.map((item, index) => <SidebarItem key={index} item={item} />) }
        </div>
    )
}
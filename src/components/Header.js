import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth, logOut } from '../firebase'

import styled from 'styled-components'





function Header() {

  const currentUser = useAuth();
  const [burgernav, setBurgernav] = useState(false);
  const navigate = useNavigate();
  console.log(currentUser);
  const handleLogOut = async () => {
    try{
      await logOut();
      navigate('/')
    } catch {
      alert("error!");
    }
  }

    return (
      <Nav>
        <LeftMenu>
          <span>
            <i
              className="fas fa-bars"
              aria-hidden="true"
              onClick={() => setBurgernav(true)}
            ></i>
          </span>
        </LeftMenu>

        <Logo src="/images/logo.jpg" />

        <BurgerNav show={burgernav}>
          <Close>
            <span>
              <i
                className="fas fa-times"
                aria-hidden="true"
                onClick={() => setBurgernav(false)}
              ></i>
            </span>
          </Close>

          <li>
            <a>
              <i className="fas fa-home" aria-hidden="true"></i>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a>
              <i className="fas fa-hands primary" aria-hidden="true"></i>
              <span>Our Services</span>
            </a>
          </li>
          <li>
            <a>
              <i className="fas fa-seedling" aria-hidden="true"></i>
              <span>About Us</span>
            </a>
          </li>
          <li>
            <a>
              <i className="fas fa-phone-alt" aria-hidden="true"></i>
              <span>Contact Us</span>
            </a>
          </li>

          <Foot>
            <span>CopyRight 2022. All Rights Reserved.</span>
          </Foot>
        </BurgerNav>

        <NavMenu>
          <a>
            <i className="fas fa-home" aria-hidden="true"></i>
            <span>Home</span>
          </a>
          <a>
            <i className="fas fa-hands primary" aria-hidden="true"></i>
            <span>Our Services</span>
          </a>
          <a>
            <i className="fas fa-seedling" aria-hidden="true"></i>
            <span>About Us</span>
          </a>
          <a>
            <i className="fas fa-phone-alt" aria-hidden="true"></i>
            <span>Contact Us</span>
          </a>
        </NavMenu>

        <UserImg onClick={handleLogOut} src="/images/user.jpg" /> <p>{currentUser?.displayName}</p>
      </Nav>
      
    );
}

export default Header

const Nav = styled.nav`
   height: 70px;
   display: flex;
   justify-content: space-between;
   align-items: center;
   background: #ffffff;
   padding: 0 39px;
   overflow: hidden;
`
const Logo = styled.img` 
    width: 180px;
`
const NavMenu = styled.div`
  display: flex;
  margin-left: -30px;
  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 18px;
    cursor: pointer;
    color: #ffffff;
    text-decoration: none;

    i.fa-home,
    .fa-hands,
    .fa-seedling,
    .fa-phone-alt {
      color: #c2309c;
    }

    span {
      padding: 0 2px;
      font-size: 15px;
      line-height: 1.42px;
      position: relative;
      color: #C2309C;
      &:after {
        content: "";
        height: 2px;
        background: #C2309C;
        position: absolute;
        right: 0;
        left: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: center;
        transition: all 250ms cubic-bezier(0.25, 0.45, 0.46, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      color: #C2309C;
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
const UserImg =styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
`
const LeftMenu =styled.div`
 display: none;
 align-items: center;
 cursor: pointer;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background: #C2309C;
  width: 300px;
  z-index: 16;
  padding: 20px;
  display: flex;
  flex-direction: column;
  list-style: none;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(-100%)")};
  transition: transform 0.2s ease-in;

  li {
    padding: 15px 0;
    padding-left: 3px;
    border-bottom: 1px solid #ffffff;
    cursor: pointer;

    a {
      span {
        font-size: 13px;
        letter-spacing: 1.42px;
        position: relative;
        color: #ffffff;
        padding-left: 4px;
      }
      &:hover {
        span:after {
          transform: scaleX(1);
          opacity: 1;
        }
      }
      i.fa-home,
      .fa-hands,
      .fa-seedling,
      .fa-phone-alt {
        color: #ffffff;
      }
    }
  }
`;
const Close = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;

  span {
    i.fa-times {
      color: #ffffff;
    }
  }
`;
const Foot = styled.div`
  position:absolute;
  bottom: 35px;
  display: flex;
  justify-content: center;
  padding-left: 12px;
  flex-direction: column;
  color: #ffffff;
  font-size: 12px;
`
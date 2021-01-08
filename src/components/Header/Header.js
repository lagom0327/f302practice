import React, { useContext } from "react";
import { Link, useHistory, useLocation, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "../../contexts";
import { setAuthToken } from "../../utils";

const HeaderContainer = styled.div`
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 0 32px;
  box-sizing: border-box;
`;
const Brand = styled.div`
  font-size: 32px;
  font-weight: bold;
`;
const Navbarlist = styled.div`
  display: flex;
  aligin-items: center;
  height: 100%;
  // height: 64px;
`;

const Nav = styled(Link)`
  // border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
  width: 100px;
  cursor: pointer;
  color: black;
  text-decoration: none;

  ${(props) =>
    props.$active &&
    `
    background: rgba(0, 0, 0, 0.2);
  `}
`;

const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  ${Navbarlist} {
    margin-left: 64px;
  }
`;
export default function Header() {
  const { user, setUser } = useContext(AuthContext);
  const history = useHistory();
  const location = useLocation();
  // const isHomePage = useRouteMatch("/").isExact;
  // 有更好的方式拿到 pathname 而不是用uselocation => useRouteMatch

  console.log("/", useRouteMatch("/"));
  const handleLogout = () => {
    setAuthToken("");
    setUser(null);
    if (location.pathname !== "/") history.push("/");
  };

  return (
    <HeaderContainer>
      <LeftContainer>
        <Brand>我的第一個部落格</Brand>
        <Navbarlist>
          <Nav to="/" $active={useRouteMatch("/").isExact}>
            首頁
          </Nav>
          {user && (
            <Nav to="/new-post" $active={location.pathname === "/new-post"}>
              發布文章
            </Nav>
          )}
        </Navbarlist>
      </LeftContainer>
      <Navbarlist>
        {!user && (
          <Nav to="/login" $active={location.pathname === "/login"}>
            登入
          </Nav>
        )}
        {user && <Nav onClick={handleLogout}>登出</Nav>}
      </Navbarlist>
    </HeaderContainer>
  );
}

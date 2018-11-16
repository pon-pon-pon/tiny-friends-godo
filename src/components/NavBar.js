import React from 'react';

import styled from 'styled-components';

const NabBarWrapper = styled.ul`
    position: -webkit-sticky; /* Safari */
    position: sticky;
    top: 0;
    list-style-type: none;
    z-index: 10000000;
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: #3d2a3f;
    padding: 0px;
`;

const NavBarItem = styled.li`
    padding: 10px 15px 10px 15px;
    cursor: pointer;
    &:hover {
        background-color: #0d090e;
    }
`;

const NavBarLink = styled.a`
    color: #fff !important;
    text-decoration: none;
    &:hover {
        text-decoration: none;
    }
    &:visited {
        color: #fff !important;
    }
`;

function createNavBarItem(chapterName){
    return (
        <NavBarItem>
            <NavBarLink href={"#"+chapterName}>{chapterName}</NavBarLink>
        </NavBarItem>
    );
}

const NavBar = () => {
    return (
        <NabBarWrapper>
            {createNavBarItem("概要")}
            {createNavBarItem("頒布情報")}
            {createNavBarItem("参加者一覧")}
            {createNavBarItem("お問い合わせ")}
        </NabBarWrapper>
    );
}

export default NavBar;
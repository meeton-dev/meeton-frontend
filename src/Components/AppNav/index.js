import React, { Component } from 'react';

const menuItems = [
    {title: 'dashboard'},
    {title: 'Meetings'},
    {title: 'Calendar'},
    {title: 'Latest'},
    {title: 'Starred'},
    {title: 'Important'},
    {title: 'Notes'},
    {title: 'File'},
]

const extraItems = [
    {title: 'My Group'},
    {title: 'Settings'},
]

const AppNav = () => {
    return (
        <div className="appNav">
            <h3>
                MY STUFF
            </h3>
            <ul>
                {menuItems.map((item) => <li>{item.title}</li>)}
            </ul>
            <h3>
                OPTIONS
            </h3>
            <ul>
                {extraItems.map((item) => <li>{item.title}</li>)}
            </ul>
        </div>
    )
}


export default AppNav;

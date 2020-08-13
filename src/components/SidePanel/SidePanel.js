import React, { Component } from 'react';
import UserPanel from "../UserPanel/UserPanel";
import { Menu } from 'semantic-ui-react';

export class SidePanel extends Component {
    render() {
        return (
            <Menu size="large" inverted fixed="left" vertical style={{ background: "#300731", fontSize: "1.2rem" }}>
                <UserPanel />
            </Menu>
        )
    }
}

export default SidePanel;

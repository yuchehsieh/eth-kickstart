import React, {Component} from 'react';
import { Menu } from 'semantic-ui-react'

class Header extends Component {
    state = {};

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <Menu style={{marginTop: '1em'}}>
                <Menu.Item
                    name='crowdCoin'
                    active={activeItem === 'crowdCoin'}
                    onClick={this.handleItemClick}
                >
                    CrowdCoin
                </Menu.Item>

                <Menu.Menu position='right'>
                    <Menu.Item
                        name='campaigns'
                        active={activeItem === 'campaigns'}
                        onClick={this.handleItemClick}
                    >
                        Campaigns
                    </Menu.Item>

                    <Menu.Item
                        name='+'
                        active={activeItem === '+'}
                        onClick={this.handleItemClick}
                    >
                        +
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}

export default Header;
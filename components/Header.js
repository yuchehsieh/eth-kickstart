import React, {Component} from 'react';
import { Menu } from 'semantic-ui-react';
import { Link, Router } from '../routes';

class Header extends Component {
    state = {};

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

    render() {
        const { activeItem } = this.state;

        return (
            <Menu style={{marginTop: '1em'}}>
                {/*<Menu.Item*/}
                {/*    name='crowdCoin'*/}
                {/*    active={activeItem === 'crowdCoin'}*/}
                {/*    onClick={(e, obj) => {*/}
                {/*        this.handleItemClick(e, obj);*/}
                {/*        Router.pushRoute('/');*/}
                {/*    }}*/}
                {/*>*/}
                {/*    CrowdCoin*/}
                {/*</Menu.Item>*/}
                <Link route="/">
                    <a className="item">{/** <a> with className="item" makes style same as <Menu.Item> **/}
                        CrowdCoin
                    </a>
                </Link>

                <Menu.Menu position='right'>
                    {/*<Menu.Item*/}
                    {/*    name='campaigns'*/}
                    {/*    active={activeItem === 'campaigns'}*/}
                    {/*    onClick={this.handleItemClick}*/}
                    {/*>*/}
                    {/*    Campaigns*/}
                    {/*</Menu.Item>*/}
                    <Link route="/">
                        <a className="item">
                            Campaigns
                        </a>
                    </Link>

                    {/*<Menu.Item*/}
                    {/*    name='+'*/}
                    {/*    active={activeItem === '+'}*/}
                    {/*    onClick={this.handleItemClick}*/}
                    {/*>*/}
                    {/*    +*/}
                    {/*</Menu.Item>*/}
                    <Link route="/campaigns/new">
                        <a className="item">
                            +
                        </a>
                    </Link>
                </Menu.Menu>
            </Menu>
        )
    }
}

export default Header;
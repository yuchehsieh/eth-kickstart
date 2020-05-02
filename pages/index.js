import React, {Component} from 'react';
import factory from '../ethereum/factory';

// import 'semantic-ui-css/semantic.min.css';
import {Card, Button} from 'semantic-ui-react'
import Layout from "../components/Layout";
import {Link} from '../routes';

class CampaignIndex extends Component {
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        return {campaigns};
    }

    renderCampaigns() {
        // {
        //     header: 'Project Report - April',
        //     description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
        //     meta: 'ROI: 30%',
        // },
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: (
                    <Link route={`/campaigns/${address}`}>
                        <a>View Campaign</a>
                    </Link>
                ),
                fluid: true,
                // meta: 'BBB'
            }
        });
        return <Card.Group items={items}/>
    }

    render() {
        return (
            <Layout>
                <div>
                    <h3>Open Campaigns</h3>
                    <Link route="/campaigns/new">
                        {/*<button className="ui icon left labeled button primary right floated">*/}
                        {/*    <i aria-hidden="true" className="add circle icon"></i>*/}
                        {/*    Create Campaign*/}
                        {/*</button>*/}
                        {/**
                         * <Link> nested with <a>:
                         * inside <a>, we can put any other element!
                         **/}
                        <a>
                            <Button content="Create Campaign" icon="add circle" floated="right" primary/>
                        </a>
                    </Link>
                    {this.renderCampaigns()}
                </div>
            </Layout>
        )
    }
}

export default CampaignIndex;
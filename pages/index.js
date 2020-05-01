import React, {Component} from 'react';
import factory from '../ethereum/factory';

// import 'semantic-ui-css/semantic.min.css';
import {Card} from 'semantic-ui-react'

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
        const items = this.props.campaigns.map(campaign => {
            return {
                header: campaign,
                description: <a>View Campaign</a>,
                fluid: true,
                // meta: 'BBB'
            }
        });
        return <Card.Group items={items}/>
    }

    render() {
        return (
            <>
                <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                <div>
                    <h1>Show a list of Campaigns</h1>
                    <p>{this.props.campaigns[0]}</p>
                    {this.renderCampaigns()}
                </div>
            </>
        )
    }
}

export default CampaignIndex;
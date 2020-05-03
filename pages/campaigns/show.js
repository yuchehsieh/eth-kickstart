import React, {Component} from 'react';
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";
import {Card, Button} from 'semantic-ui-react'
import web3 from '../../ethereum/web3';


class CampaignShow extends Component {
    static async getInitialProps (props) {
        const campaign = await Campaign(props.query.address);

        const summary = await campaign.methods.getSummary().call();

        return {
            minimumContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4]
        }
    }

    renderCards() {
        const {
            balance,
            manager,
            minimumContribution,
            requestsCount,
            approversCount
        } = this.props;

        const items = [
            {
                header: manager,
                meta: 'Address of the Manager',
                description: 'The manager created this campaign and can create requests to withdraw money',
                style: {
                    overflowWrap: 'break-word'
                }
            },
            {
                header: minimumContribution,
                meta: 'Minmum Contribution (wei)',
                description: 'You must contribute at least this much wei to become an approver',
            },
            {
                header: requestsCount,
                meta: 'Number of Requests',
                description: 'A request tries to withdraw money from the contract. Requests must be approved by approvers',
            },
            {
                header: approversCount,
                meta: 'Number of Approvers',
                description: 'Number of people who have already donated to this campaign',
            },
            {
                header: web3.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance (ether)',
                description: 'The balance is how much money this campaign has left to spend.',
            }
        ];

        return <Card.Group items={items} />
    }

    render() {
        // console.log(this.props);
        return (
            <Layout>
                <h3>Campaign show!</h3>
                {this.renderCards()}
            </Layout>
        );
    }
}

export default CampaignShow;
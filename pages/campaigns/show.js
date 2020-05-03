import React, {Component} from 'react';
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";

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

    render() {
        // console.log(this.props);
        return (
            <Layout>
                <h3>Campaign show!</h3>
            </Layout>
        );
    }
}

export default CampaignShow;
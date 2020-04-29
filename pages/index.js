import React, {Component} from 'react';

import factory from '../ethereum/factory';

class CampaignIndex extends Component {
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        return {campaigns};
    }

    async componentDidMount() {
        // const addresses = await factory.methods.getDeployedCampaigns().call();
        // console.log(addresses);
    }

    render() {
        return (
            <div>
                <h1>Show a list of Campaigns</h1>
                <p>{this.props.campaigns[0]}</p>
            </div>
        )
    }
}

export default CampaignIndex;
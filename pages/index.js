import React, { Component } from 'react';

import factory from '../ethereum/factory';

class CampaignIndex extends Component {

    async componentDidMount() {
        const addresses = await factory.methods.getDeployedCampaigns().call();
        console.log(addresses);
    }

    render() {
        return (
            <h1>Show a list of Campaigns</h1>
        )
    }
}

export default CampaignIndex;
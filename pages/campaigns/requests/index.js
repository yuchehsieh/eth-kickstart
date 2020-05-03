import React, {Component} from 'react';
import Layout from "../../../components/Layout";
import {Button} from 'semantic-ui-react';
import { Link } from '../../../routes';
import Campagn from '../../../ethereum/campaign';

class Requests extends Component {
    static async getInitialProps(props) {
        const address = props.query.address;
        const campaign = Campagn(address);
        const requestCounts = await campaign.methods.getRequestCount().call();

        const requests = await Promise.all(
            Array(parseInt(requestCounts)).fill().map((element, index) => {
                return campaign.methods.requests(index).call();
            })
        );

        return {
            address,
            requests,
            requestCounts
        };
    }

    render() {
        return (
            <Layout>
                <h3>Requests</h3>
                <Link route={`/campaigns/${this.props.address}/requests/new`}>
                    <a>
                        <Button primary icon="add circle" content="New Request" />
                    </a>
                </Link>
            </Layout>
        );
    }
}

export default Requests;
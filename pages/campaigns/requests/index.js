import React, {Component} from 'react';
import Layout from "../../../components/Layout";
import {Button, Table} from 'semantic-ui-react';
import {Link} from '../../../routes';
import Campaign from '../../../ethereum/campaign';
import RequestRow from "../../../components/RequestRow";

class Requests extends Component {
    static async getInitialProps(props) {
        const address = props.query.hasOwnProperty('address');
        if (!address) {
            return {};
        }
        const campaign = Campaign(address);
        const requestCounts = await campaign.methods.getRequestCount().call();
        const approversCount = await campaign.methods.approversCount().call();

        const requests = await Promise.all(
            Array(parseInt(requestCounts)).fill().map((element, index) => {
                return campaign.methods.requests(index).call();
            })
        );

        return {
            address,
            requests,
            requestCounts,
            approversCount
        };
    }


    renderRow() {
        if (!this.props.hasOwnProperty('requests')) return;
        return this.props.requests.map((request, index) => {
            return <RequestRow request={request} key={index} address={this.props.address} id={index}
                               approversCount={this.props.approversCount}/>
        })
    }

    render() {

        const {Header, HeaderCell, Row, Body} = Table;

        return (
            <Layout>
                <h3>Requests</h3>
                <Link route={`/campaigns/${this.props.address}/requests/new`}>
                    <a>
                        <Button primary icon="add circle" content="New Request"/>
                    </a>
                </Link>
                <Table>
                    <Header>
                        <Row>
                            <HeaderCell>ID</HeaderCell>
                            <HeaderCell>Description</HeaderCell>
                            <HeaderCell>Amount</HeaderCell>
                            <HeaderCell>Recipient</HeaderCell>
                            <HeaderCell>Approval Count</HeaderCell>
                            <HeaderCell>Approve</HeaderCell>
                            <HeaderCell>Finalize</HeaderCell>
                        </Row>
                    </Header>

                    <Body>
                        {this.renderRow()}
                    </Body>

                </Table>
                <p>Found {this.props.requestCounts} Requests.</p>
            </Layout>
        );
    }
}

export default Requests;
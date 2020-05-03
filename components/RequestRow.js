import React, {Component} from 'react';
import {Table, Button} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';

class RequestRow extends Component {

    state = {
        loading: false,
    };

    async onApprove() {
        this.setState({loading: true});

        const campaign = Campaign(this.props.address);
        const accounts = await web3.eth.getAccounts();
        try {
            await campaign.methods.approveRequest(this.props.id).send({from: accounts[0]});
        } catch (e) {
        }
        this.setState({loading: false})
    }

    render() {
        console.log(this.props.request);
        const {description, value, recipient, complete, approvalCount} = this.props.request;

        return (
            <Table.Row>
                <Table.Cell>{this.props.id}</Table.Cell>
                <Table.Cell>{description}</Table.Cell>
                <Table.Cell>{web3.utils.fromWei(value, 'ether')}</Table.Cell>
                <Table.Cell>{recipient}</Table.Cell>
                <Table.Cell>{approvalCount}/{this.props.approversCount}</Table.Cell>
                <Table.Cell>
                    <Button color="green" basic onClick={this.onApprove.bind(this)}
                            loading={this.state.loading}>Approve</Button>
                </Table.Cell>
                <Table.Cell>Finalize</Table.Cell>
            </Table.Row>
        );
    }
}

export default RequestRow;
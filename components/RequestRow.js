import React, {Component} from 'react';
import {Table, Button} from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/campaign';
import {Router} from '../routes';

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
            Router.replaceRoute(`/campaigns/${this.props.address}/requests`)
        } catch (e) {
        }
        this.setState({loading: false})
    }

    async onFinalize() {
        const campaign = Campaign(this.props.address);
        const accounts = await web3.eth.getAccounts();
        try {
            await campaign.methods.finalizeRequest(this.props.id).send({from: accounts[0]});
        } catch (e) {
        }
    }

    render() {
        console.log(this.props.request);
        const {description, value, recipient, complete, approvalCount} = this.props.request;
        const readyToFinalize = approvalCount > this.props.approversCount / 2;

        return (
            <Table.Row disabled={complete} positive={readyToFinalize && !complete}>
                <Table.Cell>{this.props.id}</Table.Cell>
                <Table.Cell>{description}</Table.Cell>
                <Table.Cell>{web3.utils.fromWei(value, 'ether')}</Table.Cell>
                <Table.Cell>{recipient}</Table.Cell>
                <Table.Cell>{approvalCount}/{this.props.approversCount}</Table.Cell>
                <Table.Cell>
                    {!complete &&
                        <Button color="green" basic onClick={this.onApprove.bind(this)}
                                loading={this.state.loading}>Approve
                        </Button>
                    }

                </Table.Cell>
                <Table.Cell>
                    {!complete &&
                    <Button color="teal" basic onClick={this.onFinalize.bind(this)}
                            loading={this.state.loading}>Finalize</Button>
                    }

                </Table.Cell>
            </Table.Row>
        );
    }
}

export default RequestRow;
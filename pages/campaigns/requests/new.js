import React, {Component} from 'react';
import Layout from "../../../components/Layout";
import {Form, Button, Input, Message, Grid} from 'semantic-ui-react';
import Campaign from '../../../ethereum/campaign';
import web3 from '../../../ethereum/web3';
import {Link, Router} from '../../../routes';

class NewRequest extends Component {
    static async getInitialProps(props) {
        const address = props.query.address;

        return {
            address: address
        };
    }

    state = {
        value: '',
        description: '',
        recipient: '',
        errorMessage: '',
        loading: false,
    };

    async onSubmit(e) {
        e.preventDefault();
        this.setState({loading: true, errorMessage: ''});
        const campaign = Campaign(this.props.address);

        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.createRequest(
                this.state.description,
                web3.utils.toWei(this.state.value, 'ether'),
                this.state.recipient,
            ).send({
                from: accounts[0],
                /**
                 *  when running in the browser,
                 *  Metamask automatically calculate the gas for us
                 *  don't have to specify gas amount!
                 * **/
            });
            // Router.replaceRoute(`/campaigns/${this.props.address}/requests`)
            Router.pushRoute(`/campaigns/${this.props.address}/requests`);
        } catch (e) {
            this.setState({
                errorMessage: e.message
            });
        }
        this.setState({loading: false});
    }

    render() {
        return (
            <Layout>
                <Link route={`/campaigns/${this.props.address}/requests`}>
                    <a>Back</a>
                </Link>
                <h3>Create a Request</h3>
                <Grid>
                    <Grid.Column width={8}>
                        <Form onSubmit={this.onSubmit.bind(this)} error={!!this.state.errorMessage}>
                            <Form.Field>
                                <label>Description</label>
                                <Input value={this.state.description}
                                       onChange={e => this.setState({description: e.target.value})}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Value in Ether</label>
                                <Input label="ether" labelPosition="right" value={this.state.value}
                                       onChange={e => this.setState({value: e.target.value})}/>
                            </Form.Field>
                            <Form.Field>
                                <label>Recipient</label>
                                <Input value={this.state.recipient}
                                       onChange={e => this.setState({recipient: e.target.value})}/>
                            </Form.Field>
                            <Message error header="Oops!" content={this.state.errorMessage}/>
                            <Button primary type='submit' loading={this.state.loading}>Create Request</Button>
                        </Form>
                    </Grid.Column>
                </Grid>
            </Layout>
        );
    }
}

export default NewRequest;
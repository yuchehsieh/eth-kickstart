import React, {Component} from 'react';
import {Form, Button, Input, Message} from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from "../ethereum/web3";
import { Router } from '../routes';

class ContibuteForm extends Component {

    state = {
        value: '',
        errorMessage: '',
        loading: false,
    };

    async onSubmit(e) {
        e.preventDefault();
        this.setState({loading: true, errorMessage: ''});
        const campaign = Campaign(this.props.address);

        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute().send({
                from: accounts[0],
                value: web3.utils.toWei(this.state.value, 'ether'),
                data: web3.utils.stringToHex('TEST string input')
                /**
                 *  when running in the browser,
                 *  Metamask automatically calculate the gas for us
                 *  don't have to specify gas amount!
                 * **/
            });
            Router.replaceRoute(`/campaigns/${this.props.address}`)
            // Router.pushRoute('/');
        } catch (e) {
            this.setState({
                errorMessage: e.message
            });
        }
        this.setState({loading: false});
    }

    render() {
        return (
            <Form onSubmit={this.onSubmit.bind(this)} error={!!this.state.errorMessage}>
                <Form.Field>
                    <label>Amount to Contribute</label>
                    <Input label="ether" labelPosition="right" value={this.state.value}
                           onChange={e => this.setState({value: e.target.value})}/>
                </Form.Field>
                <Message error header="Oops!" content={this.state.errorMessage}/>
                <Button primary type='submit' loading={this.state.loading}>Contribute</Button>
            </Form>
        );
    }
}

export default ContibuteForm;
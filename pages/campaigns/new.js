import React, {Component} from 'react';
import Layout from "../../components/Layout";
import {Form, Button, Input, Message} from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class CampaignNew extends Component {

    state = {
        minimumContribution: '',
        errorMessage: '',
        loading: false,
    };

    async onSubmit(e) {
        e.preventDefault();
        this.setState({loading: true, errorMessage: ''});
        try {
            const accounts = await web3.eth.getAccounts();
            await factory.methods.createCampaign(this.state.minimumContribution).send({
                from: accounts[0]
                /**
                 *  when running in the browser,
                 *  Metamask automatically calculate the gas for us
                 *  don't have to specify gas amount!
                 * **/
            });
            Router.pushRoute('/');
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
                <h3>New Campaign!</h3>
                <Form onSubmit={this.onSubmit.bind(this)} error={!!this.state.errorMessage}>
                    <Form.Field>
                        <label>Minimum Contribution</label>
                        <Input label="wei" labelPosition="right" value={this.state.minimumContribution}
                               onChange={e => this.setState({minimumContribution: e.target.value})}/>
                    </Form.Field>
                    <Message error header="Oops!" content={this.state.errorMessage}/>
                    <Button primary type='submit' loading={this.state.loading}>Submit</Button>
                </Form>
            </Layout>
        );
    }
}

export default CampaignNew;
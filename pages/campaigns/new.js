import React, {Component} from 'react';
import Layout from "../../components/Layout";
import {Form, Button, Input} from 'semantic-ui-react';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

class CampaignNew extends Component {

    state = {
        minimumContribution: ''
    };

    async onSubmit(e) {
        e.preventDefault();
        const accounts = await web3.eth.getAccounts();
        await factory.methods.createCampaign(this.state.minimumContribution).send({
            from: accounts[0]
            /**
             *  when running in the browser,
             *  Metamask automatically calculate the gas for us
             *  don't have to specify gas amount!
             * **/
        })
    }

    render() {
        return (
            <Layout>
                <h3>New Campaign!</h3>
                <Form onSubmit={this.onSubmit.bind(this)}>
                    <Form.Field>
                        <label>Minimum Contribution</label>
                        <Input label="wei" labelPosition="right" value={this.state.minimumContribution}
                               onChange={e => this.setState({minimumContribution: e.target.value})}/>
                    </Form.Field>
                    <Button primary type='submit'>Submit</Button>
                </Form>
            </Layout>
        );
    }
}

export default CampaignNew;
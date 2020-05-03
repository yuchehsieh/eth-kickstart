import React, {Component} from 'react';
import Layout from "../../../components/Layout";
import {Button} from 'semantic-ui-react';
import { Link } from '../../../routes';

class Requests extends Component {
    static async getInitialProps(props) {

        return {
            address: props.query.address
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
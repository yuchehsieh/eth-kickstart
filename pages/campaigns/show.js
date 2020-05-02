import React, {Component} from 'react';
import Layout from "../../components/Layout";

class CampaignShow extends Component {
    // static async getInitialProps ({query}) {
    //     // query.slug
    //     console.log(query.slug);
    // }

    render() {
        console.log(this.props);

        return (
            <Layout>
                <h3>Campaign show!</h3>
            </Layout>
        );
    }
}

export default CampaignShow;
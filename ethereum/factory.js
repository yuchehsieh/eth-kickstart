import web3 from "./web3";
import CampaignFactory from './build/CampaignFactory';

// let factory;
//
// const getFactory = async () => {
//     factory = await new web3.eth.Contract(JSON.parse(CampaignFactory.interface), '0x257fCACb9df2fE1c6bda0D505862aD4371Bd5816');
// };
//
// getFactory().catch();

// export default factory;

/** Teacher's solution! **/
const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x5663B841418b6f7D111907C9B6044490D67a7E62'
);

export default instance;


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
    '0x9E85ea837CaA78A5f36CCD8cDF3383CFE17Ca7F9'
);

export default instance;


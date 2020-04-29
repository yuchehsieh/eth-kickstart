const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

const provider = new HDWalletProvider(
    'guard humble shrimp model canal runway boss position tube shy bunker mirror',
    'https://rinkeby.infura.io/v3/57be3513956440c6b2764924be48cb5d'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy from account', accounts[0]);
    try {
        const factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
            .deploy({data: '0x' + compiledFactory.bytecode}) // add 0x bytecode
            .send({from: accounts[0]});
        //
        //
        // await factory.methods.createCampaign('100').send({ from: accounts[0] });
        // const [campaignAddress] = factory.methods.getDeployedCampaigns().call();
        //
        // const campaign = web3.eth.Contract(JSON.parse(compiledCampaign.interface), campaignAddress);

        console.log('Factory deploy to' + factory.options.address);
        // console.log('Campaign deploy to' + campaign.options.address);
    } catch(e) {
        console.log(e)
    }
};

deploy().catch();



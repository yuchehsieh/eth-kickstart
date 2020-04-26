const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

const provider = ganache.provider();
const web3 = new Web3(provider);

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async () => {
   accounts = await web3.eth.getAccounts();
   factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
       .deploy({data: compiledFactory.bytecode})
       .send({from: accounts[0], gas: 1000000});
});

describe('a factory contract', () => {
    it('can deploy', () => {
        assert.ok(factory.options.address);
    });
});


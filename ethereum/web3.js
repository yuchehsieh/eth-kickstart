import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    /** we are in the browser and Metamask is running **/
    window.ethereum.enable();
    web3 = new Web3(window.web3.currentProvider);

} else {
    /** we are on the server *OR* user is not running Metamask **/
    const provider = new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/57be3513956440c6b2764924be48cb5d'
    );
    web3 = new Web3(provider);
}

// const window = typeof window !== "undefined";

// window.ethereum.enable();
// const web3 = new Web3(window.web3.currentProvider);

export default web3;
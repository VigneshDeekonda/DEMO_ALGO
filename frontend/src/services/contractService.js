// contractService.js

// This service is responsible for interacting with smart contracts.

import Web3 from 'web3';

class ContractService {
    constructor(contractAddress, abi) {
        this.web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
        this.contract = new this.web3.eth.Contract(abi, contractAddress);
    }

    async getData(methodName, ...params) {
        return await this.contract.methods[methodName](...params).call();
    }

    async sendTransaction(methodName, fromAddress, ...params) {
        const tx = await this.contract.methods[methodName](...params).send({ from: fromAddress });
        return tx;
    }
}

export default ContractService;

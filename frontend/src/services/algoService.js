// algoService.js

// Import the Algorand SDK
const algosdk = require('algosdk');

// Define your Algorand client
const algodToken = 'YOUR_ALGOD_TOKEN';
const algodServer = 'http://localhost:4001';
const algodPort = ''; // default port is empty

const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);

// Function to get the status of the Algorand network
const getAlgorandStatus = async () => {
    try {
        const status = await algodClient.status().do();
        return status;
    } catch (error) {
        console.error('Error fetching Algorand status: ', error);
        throw error;
    }
};

// Function to create an Algorand account
const createAccount = () => {
    const account = algosdk.generateAccount();
    return account;
};

// Export the functions
module.exports = {
    getAlgorandStatus,
    createAccount,
};
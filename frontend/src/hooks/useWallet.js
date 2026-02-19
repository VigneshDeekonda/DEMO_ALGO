'use strict';

import { useEffect, useState } from 'react';
import { AlgorandWallet } from '@perawallet/connect';

const useWallet = () => {
    const [wallet, setWallet] = useState(null);
    const [address, setAddress] = useState('');

    useEffect(() => {
        const peraWallet = new AlgorandWallet();
        setWallet(peraWallet);
    }, []);

    const connect = async () => {
        const accounts = await wallet.connect();
        setAddress(accounts[0]);
    };

    const disconnect = () => {
        wallet.disconnect();
        setAddress('');
    };

    return { address, connect, disconnect };
};

export default useWallet;
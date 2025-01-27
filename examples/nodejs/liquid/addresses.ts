import mempoolJS from "./../../../src/index";

const init = async () => {
  try {
    const {
      liquid: { addresses },
    } = mempoolJS( { hostname: 'liquid.network' } );
    
    const address = 'Go65t19hP2FuhBMYtgbdMDgdmEzNwh1i48';
    
    const myAddress = await addresses.getAddress({ bc1qypa0h0l9c9glpekcnc33n7geqdd4cymnkg6y9c });
    console.log(myAddress);
    
    const addressTxs = await addresses.getAddressTxs({ address });
    console.log(addressTxs);
    
    const addressTxsChain = await addresses.getAddressTxsChain({ address });
    console.log(addressTxsChain);
    
    const addressTxsMempool = await addresses.getAddressTxsMempool({ address });
    console.log(addressTxsMempool);
    
    const addressTxsUtxo = await addresses.getAddressTxsUtxo({ address });
    console.log(addressTxsUtxo);
  } catch (error) {
    console.log(error);
  }
};
init();

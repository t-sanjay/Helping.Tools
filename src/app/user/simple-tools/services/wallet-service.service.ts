import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WalletServiceService {

  public ethereum;
  constructor() {
    const {ethereum} = <any>window
    this.ethereum = ethereum
   }

  public connectWallet = async () => {
    try{
      if(!this.ethereum) return alert("Please install meta mask");
      return await this.ethereum.request({method: 'eth_requestAccounts'});
    }
    catch(e){
       throw new Error("No thereum object found")
    }
  }

  public checkWalletConnected = async () => {
    try{
      if(!this.ethereum) return alert("Please install meta mask ")
      const accounts = await this.ethereum.request({method: 'eth_accounts'});
      return accounts;
    }
    catch(e){
      throw new Error("No ethereum object found");
    }
  }


  requestPermissions() {
    this.ethereum
      .request({
        method: 'wallet_requestPermissions',
        params: [{ eth_accounts: {} }],
      })
      .then((permissions) => {
        const accountsPermission = permissions.find(
          (permission) => permission.parentCapability === 'eth_accounts'
        );
        if (accountsPermission) {
          console.log('eth_accounts permission successfully requested!');
        }
      })
      .catch((error) => {
        if (error.code === 4001) {
          // EIP-1193 userRejectedRequest error
          console.log('Permissions needed to continue.');
        } else {
          console.error(error);
        }
      });
  }
}

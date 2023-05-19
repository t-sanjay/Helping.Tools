import { Component } from '@angular/core';
import { WalletServiceService } from '../services/wallet-service.service';

@Component({
  selector: 'app-block-chain',
  templateUrl: './block-chain.component.html',
  styleUrls: ['./block-chain.component.css']
})
export class BlockChainComponent {
  title = 'ng-connect-ethereum-wallet';

  public walletConnected: boolean = false;
  public walletId: string = '';

  constructor(private walletService: WalletServiceService){

  }

  connectToWallet  = async () => {
    const accounts = await this.walletService.connectWallet();
    if(accounts.length > 0){
      this.walletConnected = true;
      this.walletId = accounts[0];
    }
  }

  checkWalletConnected = async () => {
    const accounts = await this.walletService.checkWalletConnected();
    if(accounts.length > 0){
      this.walletConnected = true;
      this.walletId = accounts[0];
    }
  }

  ngOnInit(): void {
    
    this.checkWalletConnected();
  }
}

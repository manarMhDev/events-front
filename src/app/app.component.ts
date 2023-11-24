import { Component } from '@angular/core';
import { StoreService } from './Services/store.service';
import { AuthStatusService } from './Services/auth-status.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'events managements';
  constructor(private store : StoreService,private auth : AuthStatusService){
    auth.isLoggedIn().subscribe((res)=>{
      if(res){
        this.loadStore();
      }
  });
    
  }
  loadStore() {
    this.store.loadFirstTile();
   }
   
}


import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  items: MenuItem[];

  sidebarVisible: boolean = false;

  title = 'helping.tools';

  ngOnInit() {
    this.items = [
      {
        icon: 'pi pi-fw pi-file',
        command: (event?: any) => this.menuClick(event)

      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
        command: (event?: any) => this.menuClick(event)


      },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        command: (event?: any) => this.menuClick(event)

      },
      {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        command: (event?: any) => this.menuClick(event)

      },
      {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off',
        command: (event?: any) => this.menuClick(event)

      }
    ];


  }
  menuClick($event) {
    console.log($event);
    if($event.item.icon === 'pi pi-fw pi-file'){
      this.sidebarVisible = true;
    }
  }
}

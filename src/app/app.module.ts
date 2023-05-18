import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticateModule } from './authenticate/authenticate.module';
import { UserModule } from './user/user.module';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ListboxModule } from 'primeng/listbox';
import { InputTextModule } from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AuthenticateModule,
    UserModule,
    SidebarModule,
    MenubarModule,
    FormsModule,
    ReactiveFormsModule,
    OverlayPanelModule,
    ListboxModule,
    InputTextModule,
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

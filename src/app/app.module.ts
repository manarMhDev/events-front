import { NgModule ,APP_INITIALIZER} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppHttpInterceptor } from 'src/shared/auth/app-http.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ComponentsModule } from './Components/components.module';
import { LoginComponent } from './pages/login/login.component';
import { AppAuthService } from 'src/shared/auth/app-auth.service';
import { AppSessionService } from 'src/shared/session/app-session.service';
import { AppInitializer } from './app-initializer';
import { API_BASE_URL } from 'src/shared/api/service-proxies';
import { AppConsts } from 'src/shared/AppConsts';
import { ServiceProxyModule } from '../shared/api/service-proxies.module';
import { FormsModule , ReactiveFormsModule  } from '@angular/forms';
import { Titles1Component } from './pages/titles1/titles1.component';
import { Titles2Component } from './pages/titles2/titles2.component';
import { RouterModule } from '@angular/router';
import {MatDialog, MatDialogModule,  MAT_DIALOG_DATA,} from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    Titles1Component,
    Titles2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ComponentsModule,
    HttpClientModule,
    ServiceProxyModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  providers: [ 
    {
      provide: APP_INITIALIZER,
      useFactory: (appInitializer: AppInitializer) => appInitializer.init(),
      deps: [AppInitializer],
      multi: true,
    },
    { provide: API_BASE_URL, useFactory: () => AppConsts.remoteServiceBaseUrl },
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true },
    AppAuthService,
    AppSessionService,
    MatDialogModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

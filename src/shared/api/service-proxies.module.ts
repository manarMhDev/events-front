import { NgModule } from '@angular/core';
// import { AbpHttpInterceptor } from 'abp-ng2-module';

import * as ApiServiceProxies from './service-proxies';

@NgModule({
    providers: [
        ApiServiceProxies.AuthClient,
        ApiServiceProxies.FirstTitleClient,
        ApiServiceProxies.SecondTitleClient,
    ]
})
export class ServiceProxyModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { HeaderComponent } from './shared/components/header/header.component';
// import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeModule } from './pages/home/home.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HomeModule, AppRoutingModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '' }],
  bootstrap: [AppComponent],
})
export class AppModule {}

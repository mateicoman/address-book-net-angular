import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AddressBookModule } from "./address-book/address-book.module";
import { AppRoutingModule } from "./app.routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { provideHttpClient } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AddressBookModule,
    AppRoutingModule,
    BrowserModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { importProvidersFrom } from "@angular/core";
import { AppComponent } from "./app/app.component";
import { APP_ROUTES } from "./app/app-routes";
import { BrowserModule, bootstrapApplication } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";

bootstrapApplication(AppComponent, {
  providers: [importProvidersFrom(BrowserModule), provideRouter(APP_ROUTES)],
}).catch((err) => console.error(err));

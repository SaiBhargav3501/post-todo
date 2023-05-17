import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './todos/todos.component';
import { TodoDataService } from './services/allservices';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ErrorInterceptor } from './services/interceptodse-service';
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
 
  ],
  providers: [TodoDataService,ErrorInterceptor, { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { ReadComponent } from './read/read.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { DataService} from './DataService';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
        { path: 'create', component: CreateComponent },
         { path: 'view', component: ViewComponent },
          { path: 'update', component: UpdateComponent },
           { path: 'delete', component: DeleteComponent },
            { path: 'read', component: ReadComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuBarComponent,
    CreateComponent,
    ViewComponent,
    ReadComponent,
    UpdateComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

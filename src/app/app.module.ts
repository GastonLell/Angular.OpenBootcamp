// ANGULAR
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// locale para pipes
import localeES from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeES) // registramos el local_Id de 'es' para poder usarlo
// app
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// pages
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ContactDetailPageComponent } from './pages/contact-detail-page/contact-detail-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

// components
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskComponent } from './components/task/task.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { EjemploPipesComponent } from './components/ejemplo-pipes/ejemplo-pipes.component';

// components -> forms
import { RegisterFormComponent } from './components/auth/register-form/register-form.component';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';
import { TaskFormComponent } from './components/task-form/task-form.component';
import { FormularioComponent } from './components/forms/formulario/formulario.component';
import { FormularioAnidadoComponent } from './components/forms/formulario-anidado/formulario-anidado.component';
import { FormularioValidadoComponent } from './components/forms/formulario-validado/formulario-validado.component';
import { FormularioArrayComponent } from './components/forms/formulario-array/formulario-array.component';

//modulos
import { ListsModule } from './modules/lists/lists.module';
// modulo de angular material
import { MaterialModule } from './modules/material/material.module';

// pipes
import { MultiplicaPipe } from './pipes/multiplica.pipe';
import { CalcularPuntuacionPipe } from './pipes/calcular-puntuacion.pipe';
import { NombreCompletoPipe } from './pipes/nombre-completo.pipe';
import { RandomUserComponent } from './components/random-user/random-user.component';
import { RandomContactPageComponent } from './pages/random-contact-page/random-contact-page.component';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TasksPageComponent } from './pages/tasks-page/tasks-page.component';
import { KanbanTasksComponent } from './components/kanban-tasks/kanban-tasks.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    // app
    AppComponent,

    // pages
    LoginPageComponent,
    HomePageComponent,
    NotFoundPageComponent,
    ContactsPageComponent,
    ContactDetailPageComponent,
    RegisterPageComponent,

    // components
    TaskListComponent,
    TaskComponent,
    ContactListComponent,

    // forms
    TaskFormComponent,
    RegisterFormComponent,
    LoginFormComponent,
    FormularioComponent,
    FormularioAnidadoComponent,
    FormularioValidadoComponent,
    FormularioArrayComponent,

    // pipes
    EjemploPipesComponent,
    // custom pipe
    MultiplicaPipe,
    CalcularPuntuacionPipe,
    NombreCompletoPipe,
    RandomUserComponent,
    RandomContactPageComponent,
    NavComponent,
    DashboardComponent,
    TasksPageComponent,
    KanbanTasksComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // modulo para hacer peticiones http
    HttpClientModule,
    // importamos nuestro módulo personalizado
    ListsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    // modulo de Angular Material
    MaterialModule,
     LayoutModule,
     MatToolbarModule,
     MatButtonModule,
     MatSidenavModule,
     MatIconModule,
     MatListModule,
     DragDropModule
  ],
  providers: [
    // registrar locales de ES para que los pipes salgan en español
    {
      provide: LOCALE_ID, useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

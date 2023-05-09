import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/home/about-me/about-me.component';
import { ExperienceComponent } from './components/home/experience/experience.component';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { RegisterComponent } from './components/register/register.component';
import { SkillsComponent } from './components/home/skills/skills.component';
import { ContactComponent } from './components/home/contact/contact.component';
import { ProgressBarComponent } from './assets/components/progress-bar/progress-bar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { EditUserModalComponent } from './assets/components/edit-user-modal/edit-user-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutMeComponent,
    ExperienceComponent,
    LoginComponent,
    LayoutComponent,
    RegisterComponent,
    SkillsComponent,
    ContactComponent,
    ProgressBarComponent,
    DashboardComponent,
    EditUserModalComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { AddFaxineiraService } from './components/add-faxineira/add-faxineira.service';
import { TransactionComponent } from './components/transaction/transaction.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ContentComponent } from './components/content/content.component';
import { AddFaxinaComponent } from './components/add-faxina/add-faxina.component';
import { UserProfileComponent } from './components/userProfile/userProfile.component';
import { NgxDropzoneModule } from 'ngx-dropzone'
import { AddFaxineiraComponent } from './components/add-faxineira/add-faxineira.component';
import { FaxinaPipe } from './filters/faxina.pipe';
import { FaxineiraPipe } from './filters/faxineira.pipe';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import { CommonModule } from '@angular/common';
import { DeleteDialogServiceComponent } from './components/delete-dialog-service/delete-dialog-service.component';
import { AuthService } from './components/login/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    ContentComponent,
    ProfileComponent,
    TransactionComponent,
    AddFaxinaComponent,
    AddFaxineiraComponent,
    ProfileComponent,
    UserProfileComponent,
    DeleteDialogServiceComponent,
    FaxinaPipe,
    FaxineiraPipe
    ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    MaterialModule,
    CommonModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent],
  providers: [
    AuthService
  ],
  entryComponents: [AddFaxinaComponent,
    DeleteDialogServiceComponent,
    AddFaxineiraComponent,
    ]

})
export class AppModule { }

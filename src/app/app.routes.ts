import { Routes } from '@angular/router';
import { LandingPageComponent } from './presentations/general/landing-page/landing-page.component';
import { AllPropertiesComponent } from './presentations/general/all-properties/all-properties.component';
import { DetailsPropertyComponent } from './presentations/general/details-property/details-property.component';
import { LoginComponent } from './presentations/general/login/login.component';
import { RegisterComponent } from './presentations/general/register/register.component';
import { OtpValidatorComponent } from './presentations/general/otp-validator/otp-validator.component';
import { BecomeOwnerComponent } from './presentations/general/become-owner/become-owner.component';
import { ChatComponent } from './presentations/general/chat/chat.component';
import { RegisterSpecFormsComponent } from './presentations/general/register-spec-forms/register-spec-forms.component';
import { ReviewsComponent } from './presentations/general/reviews/reviews.component';
import { AboutComponent } from './presentations/general/about/about.component';
import { ContactComponent } from './presentations/general/contact/contact.component';
import { ForgetPasswordComponent } from './presentations/general/forget-password/forget-password.component';
import { HomePageComponent } from './presentations/owner/home-page/home-page.component';
import { DocumentsComponent } from './presentations/owner/documents/documents.component';
import { ApplyingComponent } from './presentations/owner/applying/applying.component';
import { ProfilsComponent as OwnerProfils} from './presentations/owner/profils/profils.component';
import { PropertiesComponent } from './presentations/owner/properties/properties.component';
import { LandingPageProprietaireComponent } from './presentations/owner/landing-page-proprietaire/landing-page-proprietaire.component';
import { NotFoundPageComponent } from './presentations/general/not-found-page/not-found-page.component';
import { ProfilsComponent } from './presentations/general/profils/profils.component';
import { SidebarOwnerComponent } from './presentations/owner/sidebar-owner/sidebar-owner.component';
import { NotificationComponent } from './presentations/owner/notification/notification.component';
import { AddPropertyComponent } from './presentations/owner/add-property/add-property.component';



export const routes: Routes = [
  // General routing
  { path: '', component: LandingPageComponent },
  { path: 'details', component: AllPropertiesComponent  },
  { path: 'details/house/:slug', component: DetailsPropertyComponent },
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'otp_validator', component: OtpValidatorComponent },
  {path: 'become_owner', component: BecomeOwnerComponent},
  {path: 'chat', component: ChatComponent },
  {path: 'register_special_forms', component: RegisterSpecFormsComponent},
  {path: 'reviews', component: ReviewsComponent },
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'forgot-password', component: ForgetPasswordComponent},
  {path: 'profils', component: ProfilsComponent},





  //Owner routing
  {path: 'owner', component: SidebarOwnerComponent, children: [
    {path: 'home', component: HomePageComponent,},
    {path: 'properties', component: PropertiesComponent },
    {path: 'applying', component: ApplyingComponent },
    {path: 'profils', component: ProfilsComponent },
    {path: 'notifications', component: NotificationComponent },
    {path: 'add-property', component: AddPropertyComponent },
  ]},





  ///404 Error Page
  {path: '**', component: NotFoundPageComponent },
];


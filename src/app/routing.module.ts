import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { profileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { PopularComponent } from './home/popular/popular.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AuthGuardService } from './Services/authguard.service';
import { CanActivate, CanActivateChild, resolve } from './auth.guard'


//DEFINE ROUTE
const routes: Routes = [  
  
    // {path: '', component: HomeComponent},
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    {path: 'Home', component: HomeComponent, canActivate: [CanActivate]},
    {path: 'About', component: AboutComponent},
    {path: 'Contact', component: ContactComponent, canDeactivate: [(comp: ContactComponent) => {return comp.canExit();}]},
    {path: 'Profile', component: profileComponent},
    {path: 'Courses', component: CoursesComponent, resolve: {courses: resolve}},
    {path: 'Courses', canActivateChild: [CanActivateChild], children: [
      // {path: 'Course/:id', component: CourseDetailComponent},
      {path: 'Popular', component: PopularComponent},
      // {path: 'Checkout', component: CheckoutComponent}
    ]},
    {path: 'Cart', component: CartComponent},
    {path: 'Courses/Course/:id', component: CourseDetailComponent},
    {path: 'Wishlist', component: WishlistComponent},
    {path: 'Checkout', component: CheckoutComponent},
    {path: 'Login', component: LoginComponent},
    {path: '**', component: NotFoundComponent},
  ]

@NgModule({
    imports: [
        // RouterModule.forRoot(routes, {enableTracing: true})
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class RoutingModule{

}
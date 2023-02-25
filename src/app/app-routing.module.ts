import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { OrderComponent } from './order/order.component';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [{
  path:"", component: HomeComponent
}, {
  path:"products",component: MenuComponent
}, {
  path: "about", component: AboutusComponent
}, {
  path: "order", component: OrderComponent
},{
  path: "reserv", component: ReservationComponent
},{
  path: "products/:id", component: DetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

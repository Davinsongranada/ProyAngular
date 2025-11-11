import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

import { ProductCardComponent } from '@products/components/product-card/product-card.component';
import { ProductsService } from '@products/services/products.service';
import { Pagination } from '@shared/components/pagination/pagination';
import { PaginationService } from '@shared/components/pagination/pagination.service';

@Component({
  selector: 'app-home-page',
  imports: [ProductCardComponent, Pagination],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  //Injeccion para traer un servicio y entrar la funcion que se realizo
  productsService = inject(ProductsService);
  paginationService = inject(PaginationService);

  //ActivateRoute se necesita injecctar para poder determinar en que pagina estoy
  // activatedRoute = inject(ActivatedRoute);

  // currentPage = toSignal(
  //   this.activatedRoute.queryParamMap.pipe(
  //     map((params) => (params.get('page') ? +params.get('page')! : 1)),
  //     map((page) => (isNaN(page) ? 1 : page))
  //   ),
  //   {
  //     initialValue: 1,
  //   }
  // );

  //productsResource TRAE Y CARGA TODO LO QUE HAY EN BASE DE DATOS
  productsResource = rxResource({
    //EN LA REQUEST SE TRABAJO EL CAMBIO DE PAGINA UTILIZANDO EL CURRENTPAGE()
    request: () => ({ page: this.paginationService.currentPage() - 1 }),
    loader: ({ request }) => {
      return this.productsService.getProducts({
        offset: request.page * 9,
      });
    },
  });
}

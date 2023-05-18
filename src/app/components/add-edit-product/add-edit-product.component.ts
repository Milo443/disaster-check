import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {
  form: FormGroup;
  loading: boolean = false;
  id: number;
  operacion: string = 'Agregar ';

  constructor(private fb: FormBuilder,
    private _productService: ProductService,
    private router: Router,
    private toastr: ToastrService,
    private aRouter: ActivatedRoute) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      cedula: ['', Validators.required],
      telefono: [null, Validators.required],
      lugar: [null, Validators.required],
      discapacidad: [null, Validators.required]
    })
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {

    if (this.id != 0) {
      // Es editar
      this.operacion = 'Editar ';
      this.getProduct(this.id);
      console.log(this.router);
    }
  }

  getProduct(id: number) {
    this.loading = true;
    this._productService.getProduct(id).subscribe((data: Product) => {
      this.loading = false;
      this.form.setValue({
        nombre: data.nombre,
        cedula: data.cedula,
        telefono: data.telefono,
        lugar: data.lugar,
        discapacidad: data.discapacidad
      })
    })
  }

  addProduct() {
    /*  console.log(this.form.value.name);
     console.log(this.form.get('name')?.value); */

    const product: Product = {
      nombre: this.form.value.nombre,
      cedula: this.form.value.cedula,
      telefono: this.form.value.telefono,
      lugar: this.form.value.lugar,
      discapacidad: this.form.value.discapacidad
    }
    this.loading = true;

    if (this.id !== 0) {
      // Es editar 
      product.id = this.id;
      this._productService.updateProduct(this.id, product).subscribe(() => {
        this.toastr.info(`La personas ${product.nombre} fue actualizada con exito`, 'Persona actualizada');
        this.loading = false;
        this.router.navigate(['/']);
      })

    } else {
      // Es agregagar
      this._productService.saveProduct(product).subscribe(() => {
        this.toastr.success(`La personas ${product.nombre} fue registrada con exito`, 'Persona registrada');
        this.loading = false;
        this.router.navigate(['/']);
        
      })
    }




  }

}

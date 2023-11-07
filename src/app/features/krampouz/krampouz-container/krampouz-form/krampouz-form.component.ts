import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { first } from 'rxjs';
import { Krampouz } from 'src/app/shared/interfaces/krampouz.interface';
import { KrampouzService } from 'src/app/shared/services/krampouz.service';

@Component({
  selector: 'app-krampouz-form',
  templateUrl: './krampouz-form.component.html',
  styleUrls: ['./krampouz-form.component.scss']
})
export class KrampouzFormComponent implements OnInit {
  
  public krampouzForm!: FormGroup 

  public krampouz?: Krampouz;

  get ingredients() {
    return this.krampouzForm.get('ingredients') as FormArray;
  }

  constructor(
    private fb: FormBuilder,
    private krampouzService: KrampouzService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }
  
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const index = paramMap.get('index');
      if(index !== null) {
        this.krampouzService.getKrampouz(+index)
        .pipe(first((x) => !!x))
        .subscribe((krampouz: Krampouz) => {
          this.krampouz = krampouz;
          this.krampouzForm = this.initForm(this.krampouz);
        });
      } else {
        this.krampouzForm = this.initForm();   
      }
         
    })
  
  }

  private initForm(krampouz: Krampouz = {name:'', img:'', description:'', ingredients:[]}): FormGroup {
    return this.fb.group({
    name: [krampouz.name, Validators.required],
    img: [krampouz.img, Validators.required],
    description: [krampouz.description, Validators.required],
    ingredients: this.fb.array(
      krampouz.ingredients.map(ingredient => 
        this.fb.group({
          name: [ingredient.name, Validators.required],
          quantity: [ingredient.quantity, Validators.required]
        })
      ), 
      Validators.required
      ),
    });
  }

  addIngredients(): void {
    this.ingredients.push(this.fb.group({
      name: ['', Validators.required],
      quantity: [0, Validators.required],
    }))
  }

  submit(): void {
    if(this.krampouz) {
      this.krampouzService.editKrampouz(this.krampouz._id!, this.krampouzForm.value).subscribe();
    } else {
      this.krampouzService.addKrampouz(this.krampouzForm.value).subscribe();
    }
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });   
  }

}

import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
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
        this.krampouz = this.krampouzService.getKrampouz(+index);
      }
      this.initForm(this.krampouz);      
    })
  
  }

  private initForm(krampouz: Krampouz = {name:'', img:'', description:'', ingredients:[]}): void {
    this.krampouzForm = this.fb.group({
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
      this.krampouzService.editKrampouz(this.krampouzForm.value);
    } else {
      this.krampouzService.addKrampouz(this.krampouzForm.value);
    }
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });   
  }

}

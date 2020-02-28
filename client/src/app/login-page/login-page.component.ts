import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit, OnDestroy{

  form: FormGroup
  aSub: Subscription

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })
    
    this.route.queryParams.subscribe((params: Params) => {
      if(params['registered']) {
        //Теперь вы можете зайти в смстему используя свои данные
      } else if (params['accessDenied']) {
        //Для начала автлризуйтесь в системе
      }
    })
  }

  ngOnDestroy(){
    if (this.aSub) {
      this.aSub.unsubscribe()
    }
  }

  onSubmit() {
    this.form.disable()
    this.aSub = this.authService.login(this.form.value).subscribe(
      () => this.router.navigate(['/overview']),
      error => {
        console.warn(error)
      }
    )
  }


}

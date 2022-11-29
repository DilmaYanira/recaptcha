import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '@auth/shared/service/auth.service';
import { ReCaptchaV3Service } from 'ng-recaptcha';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',

})

export class LoginComponent implements OnInit {

  public formLogin!: FormGroup

  constructor(public fb: FormBuilder, private recaptchaV3Service: ReCaptchaV3Service, private authService: AuthService){
  }


  ngOnInit(): void {
    this.inicializarFormLogin()
  }

  submitForm() {
    // validaciones form

    this.recaptchaV3Service.execute('recaptchaLogin')
    .subscribe((token: string) => {

      console.log(`Token [${token}] generated`);
      this.authService.validarToken(token).subscribe(resp => console.log(resp))
    });

  }

  private inicializarFormLogin() {
    this.formLogin = this.fb.group({
      usuario: [''],
      clave: ['']
    })
  }





}

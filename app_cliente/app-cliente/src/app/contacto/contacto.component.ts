import { ConsultaService } from '../services/consulta.service';
import { Component, OnInit, Input } from '@angular/core';
import { faPhone, faFax, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Consulta, TipoContacto } from '../compartido/consulta';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  @Input () selectedLanguage:string = 'es';
  faPhone = faPhone;
  faFax = faFax;
  faEnvelope = faEnvelope;

  consultaForm!: UntypedFormGroup;
  consulta: Consulta;
  tipoContacto = TipoContacto;
  errorMensaje: string = "";

  lat=39.51387396529367;
  long=-0.42545715414122925;
  position = new google.maps.LatLng(this.lat,this.long);
  label="LSyM"

  erroresForm:any = {

    'nombre': '',
    'empresa': '',
    'telefono': '',
    'email': ''
  };

  mensajesError:any = {

    'nombre': {
        'required':	'El nombre es obligatorio.',
        'minlength': 'El nombre debe tener una longitud mínima de 2 caracteres.',
        'maxlength': 'El nombre no puede exceder de 25 caracteres.'
      },
    'empresa': {
        'required': 'El nombre de la empresa es obligatorio.',
        'minlength': 'El nombre de la empresa deben tener una longitud mínima de 2 caracteres.',
        'maxlength': 'El nombre de la empresa no pueden exceder de 35caracteres.'
      },
    'telefono': {
        'required':  'El número de teléfono es obligatorio.',
        'pattern':  'El número de teléfono sólo puede contener números.'
      },
    'email': {
          'required': 'La dirección de email es obligatoria.',
          'email': 'La dirección de email no tiene el formato correcto.'
      },
    };

  constructor(private fb: UntypedFormBuilder, private consultaService:ConsultaService,private translateService: TranslateService) {
    this.crearFormulario();
    this.consulta = new Consulta();

    this.translateService.setDefaultLang(this.selectedLanguage);
    this.translateService.use(this.selectedLanguage);
  }


  ngOnInit(): void {

  }

  crearFormulario(){
    this.consultaForm = this.fb.group({
      nombre:       ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      empresa:    ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      telefono:     [0, [Validators.required, Validators.pattern]],
      email:        ['', [Validators.required, Validators.email]],
      contactar:    false,
      tipocontacto: '',
      mensaje:      ''
    });
    this.consultaForm.valueChanges.subscribe(datos => this.onCambioValor(datos));
    this.onCambioValor();
  }


  onCambioValor(data?: any) {
    if (!this.consultaForm) { return; }
    const form = this.consultaForm;
    for (const field in this.erroresForm) {
      // Se borrarán los mensajes de error previos
      this.erroresForm[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
      const messages = this.mensajesError[field];
        for (const key in control.errors) {
          this.erroresForm[field] += messages[key] + ' ';
        }
      }
    }
  }
  onSubmit() {
    this.consulta = this.consultaForm.value;
    this.consultaService.enviarConsulta(this.consulta).subscribe(errorMensaje => this.errorMensaje = <any>errorMensaje);
    console.log(this.consulta);

    this.consultaForm.reset({
      nombre: '',
      empresa: '',
      telefono: 0,
      email: '',
      contactar:    false,
      tipocontacto: 'None',
      mensaje:      ''
      });

  }
}

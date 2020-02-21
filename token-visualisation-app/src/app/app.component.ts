import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'token-visualisation-app';
  backendUrl = 'http://localhost:4200/';
  token = '';

  i = 0;
  postForm: FormGroup;

  requestData: RequestTokenDto = new RequestTokenDto();

  constructor(private http: HttpClient, private fb: FormBuilder) {
    // form init
    this.postForm = fb.group({
      'config': fb.array([])
    });
    this.addConfigBlock();
  }

  addConfigBlock() {
    const settingBlock = this.postForm.get('config') as FormArray;
    settingBlock.push(this.fb.group({['key' + this.i] : '', ['value' + this.i]: '' }));
    this.i++;
  }

  sendPostRequest(event: Event) {
    debugger;
    this.requestData.keyValuePairs = (this.postForm.get('config') as FormArray).value;
    this.http.post(this.backendUrl, JSON.stringify(this.requestData)).toPromise().then((res: Response) => {
      alert(JSON.stringify(res.json()));
    });
  }

  sendGetRequest(event: Event) {
    this.http.get(this.backendUrl).toPromise().then((res: Response) => {
      alert(res.json());
    });
  }
}

class RequestTokenDto {
  issuer: any = '';
  subject: any = '';
  datetime: any = '';
  keyValuePairs: any = [];
}

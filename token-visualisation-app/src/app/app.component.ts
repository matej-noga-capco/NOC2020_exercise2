import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormArray, FormBuilder, FormGroup} from "@angular/forms";
import {ResponseTokenDto} from './_dto/ResponseTokenDto';
import {RequestTokenDto} from './_dto/RequestTokenDto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'token-visualisation-app';
  backendUrl = 'http://localhost:8080/';
  getRequestToken = '';
  postRequestToken = '';

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
    this.requestData.keyValuePairs = (this.postForm.get('config') as FormArray).value;
    this.http.post(this.backendUrl, JSON.stringify(this.requestData)).toPromise().then((res: Response) => {
      alert(JSON.stringify(res.json()));
    });
  }

  sendGetRequest(event: Event) {
    this.http.get(this.backendUrl + '/keycloak-token').subscribe((res: ResponseTokenDto) => {
      this.getRequestToken = res.token;
    });
  }
}



import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormArray, FormBuilder, FormGroup} from '@angular/forms';
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

  claimIndex = 0;
  postForm: FormGroup;

  requestData: RequestTokenDto = new RequestTokenDto();

  constructor(private http: HttpClient, private fb: FormBuilder) {
    // form init
    this.postForm = fb.group({
      'claims': fb.array([])
    });
    this.addConfigBlock();
  }

  addConfigBlock() {
    const settingBlock = this.postForm.get('claims') as FormArray;
    settingBlock.push(this.fb.group({['key' + this.claimIndex] : '', ['value' + this.claimIndex]: '' }));
    this.claimIndex++;
  }

  sendPostRequest(event: Event) {
    this.prepareClaims();

    this.http.post(this.backendUrl + '/token', this.requestData, {
      headers: {'Content-Type': 'application/json'}, responseType: 'text'
    }).subscribe((res: string) => {
      this.postRequestToken = res;
    });
  }

  sendGetRequest(event: Event) {
    this.http.get(this.backendUrl + '/keycloak-token', {responseType: 'text'}).
    subscribe((res: string) => {
      this.getRequestToken = res;
    });
  }

  private prepareClaims() {
    const formClaims: Array<any> = (this.postForm.get('claims') as FormArray).value;
    const formClaimsMap: Map<string, string> = new Map<string, string>();

    for (let j = 0; j < formClaims.length; j++) {
      formClaimsMap.set(formClaims[j]['key' + j], formClaims[j]['value' + j]);
    }
    this.requestData.claims = [...formClaimsMap].reduce((o, [key, value]) => (o[key] = value, o), {});
  }
}



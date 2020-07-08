import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CardBean } from '../card/card.model';
import { APIConfigurationBean, HeaderBean, QueryParameterBean } from '../card/card-configuration.model';
import { CardSharingService } from 'src/app/card-sharing.service';
import { APIResponseProviderService } from './apiresponse-provider.service';



@Component({
  selector: 'app-add-card-dialog',
  templateUrl: './add-card-dialog.component.html',
  styleUrls: ['./add-card-dialog.component.scss']
})
export class AddCardDialogComponent implements OnInit {
  isLinear = false;
  cardSource = null;
  cardDetailsForm: FormGroup;
  cardconfigurationform: FormGroup;

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    public dialogRef: MatDialogRef<AddCardDialogComponent>, private formBuilder: FormBuilder,
    private cardSharingService: CardSharingService, private apiResponseProviderService: APIResponseProviderService) {
  }

  ngOnInit() {
    this.cardDetailsForm = this.formBuilder.group({
      cardName: ['', Validators.required],
      cardSource: ['', Validators.required],
      cardPosition: ['', Validators.required]
    });
    this.cardconfigurationform = this.formBuilder.group({
      apiurl: ['', Validators.required],
      refreshtime: ['', Validators.required],
      refreshtype: ['', Validators.required],
      headers: this.formBuilder.array([]),
      queryParameters: this.formBuilder.array([]),
    });
    this.cardDetailsForm.valueChanges.subscribe(console.log);
    this.cardconfigurationform.valueChanges.subscribe(console.log);
  }

  getHeadersForm() {
    return this.cardconfigurationform.get('headers') as FormArray;
  }

  addHeader() {
    const header = this.formBuilder.group({
      key: ['', Validators.required],
      value: ['', Validators.required],
      configurationID: null,
      id: null
    });
    this.getHeadersForm().push(header);
  }

  deleteHeader(i) {
    this.getHeadersForm().removeAt(i);
  }

  getQueryParametersForm() {
    return this.cardconfigurationform.get('queryParameters') as FormArray;
  }

  addQueryParameter() {
    const queryParameter = this.formBuilder.group({
      key: ['', Validators.required],
      value: ['', Validators.required],
      id: null,
      configurationID: null
    });
    this.getQueryParametersForm().push(queryParameter);
  }

  deleteQueryParameter(j) {
    this.getQueryParametersForm().removeAt(j);
  }

  closeAddCardDialog() {
    this.dialogRef.close();
  }

  openCardDesigner() {
    if (this.cardDetailsForm.valid && this.cardconfigurationform.valid) {
      this.closeAddCardDialog();
      const cardBean: CardBean = this.saveCardDetails(new CardBean());
      this.cardSharingService.updateCardData(cardBean);
      this.apiResponseProviderService.getAPIResponse(cardBean.cardConfigurationBean).subscribe(data => {
        this.cardSharingService.updateAPIResponseData(data);
        this.router.navigate(['../cardDesigner'], { relativeTo: this.activatedRoute.parent });
      });
    }
  }

  saveAPIResponseDetails(): String {
    const apiResponse: String = '';
    return apiResponse;
  }
  saveCardDetails(cardBean: CardBean): CardBean {
    const refreshtime = this.cardconfigurationform.value.refreshtime;
    const headers = this.cardconfigurationform.get('headers').value;
    const queryParameters = this.cardconfigurationform.get('queryParameters').value;
    const apiConfigurationBean: APIConfigurationBean = {
      configurationID: null,
      headerBeanMap: headers,
      url: this.cardconfigurationform.value.apiurl,
      queryParameterBeanMap: queryParameters,
      threshold: refreshtime,
      type: 'api'
    };
    cardBean = {
      dashboardID: null,
      cardID: null,
      cardName: this.cardDetailsForm.value.cardName,
      cardPosition: this.cardDetailsForm.value.cardPosition,
      cardConfigurationBean: apiConfigurationBean,
      cardComponentBean: null,
    };
    return cardBean;
  }

}

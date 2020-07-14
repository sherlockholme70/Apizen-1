import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormArray, AbstractControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CardBean } from '../card/card.model';
import { APIConfigurationBean, HeaderBean, QueryParameterBean, DataBaseConfigurationBean } from '../card/card-configuration.model';
import { CardSharingService } from 'src/app/card-sharing.service';
import { APIResponseProviderService } from './apiresponse-provider.service';
import { ToastrService } from 'ngx-toastr';

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

  databaseFlag: boolean = false;
  databaseConnectionTestFlag: boolean = !this.databaseFlag;

  constructor(  private router: Router, 
                private activatedRoute: ActivatedRoute,
                public dialogRef: MatDialogRef<AddCardDialogComponent>,
                private formBuilder: FormBuilder,
                private cardSharingService: CardSharingService, 
                private apiResponseProviderService: APIResponseProviderService,
                private toastrService: ToastrService ) { }

  ngOnInit() {
    this.cardDetailsForm = this.formBuilder.group({
      cardName: ['', Validators.required],
      cardSource: ['', Validators.required],
      cardPosition: ['', Validators.required]
    });
    this.cardconfigurationform = this.formBuilder.group({
      apiurl: ['', Validators.required],
      database: this.formBuilder.group({                       //mycode
        databaseType: ['', Validators.required],
        databaseUrl: ['', Validators.required],
        databaseUserName: ['', Validators.required],
        databasePassword: ['', Validators.required]
      }),                                                      //!--->
      refreshtime: ['', Validators.required],
      refreshtype: ['', Validators.required],
      headers: this.formBuilder.array([]),
      queryParameters: this.formBuilder.array([]),
    });

    this.cardDetailsForm.valueChanges.subscribe(data => {
      if (data.cardSource === "Database") {
        this.databaseFlag = true;
        // this.databaseConnectionTestFlag = true;
      }
      if (data.cardSource === "API") {
        this.databaseFlag = false;
        // this.databaseConnectionTestFlag = true;
      }
      console.log(data);
    });
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
    this.databaseFlag = false;
    this.databaseConnectionTestFlag = true;

    this.cardconfigurationform.controls.database.disable();
    console.log(this.cardconfigurationform.valid);
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

  /*For Testing the connection of Database first */
  /* jdbc:mysql://localhost:3306/test */
  testCredentials(): void {
    /* No value provided to apiUrl control bcoz we select database as card source */
    this.cardconfigurationform.controls.apiurl.disable();

    if (this.cardDetailsForm.valid && this.cardconfigurationform.valid) {
      const credentials: DataBaseConfigurationBean = {
        databaseType: this.cardconfigurationform.get('database').value.databaseType,
        databaseUserName: this.cardconfigurationform.get('database').value.databaseUserName,
        schemaName: this.cardconfigurationform.get('database').value.databaseUrl,
        databasePassword: this.cardconfigurationform.get('database').value.databasePassword
      }
      console.log('CREDENTIALS : ',credentials);
      this.apiResponseProviderService.getDatabaseConnectionResponse(credentials).subscribe(
        data => {
          if(data){
            this.databaseConnectionTestFlag = false;;
            console.log("Res : ",data);
            this.toastrService.success('User Credentials are VALID','SUCCESS');
          }else{
            this.toastrService.error('User Credentials are INVALID','ERROR');
            console.log("ERROR : ",data);
          }
        },
        (err) => {
          this.toastrService.error('User Credentials are INVALID','ERROR');
          console.log("ERROR : ", err);
        }
      );
    }
  }
  

}

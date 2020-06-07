import { Component, OnInit } from '@angular/core';
import { CardSharingService } from '../card-sharing.service';
import { CardBean } from '../dashboard/card-grid/card/card.model';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { CardDesignerService } from './card-designer.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-card-designer',
  templateUrl: './card-designer.component.html',
  styleUrls: ['./card-designer.component.scss']
})
export class CardDesignerComponent implements OnInit {

  panelOpenState = false;
  selectedJSONPath: String = '';
  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private cardSharingService: CardSharingService, private formBuilder: FormBuilder,
    private cardDesignerService: CardDesignerService) { }

  cardBean: CardBean;
  notificationForm: FormGroup;
  apiResponse: String;

  ngOnInit() {
    this.cardSharingService.cardData.subscribe(data => {
      this.cardBean = data;
      console.log(data);
    });
    this.cardSharingService.apiResponseData.subscribe(data => {
      this.apiResponse = data;
      console.log(data);
    });
    this.notificationForm = this.formBuilder.group({
      componentID: null,
      type: 'notification',
      message: ['', Validators.required],
      componentType: 'notification',
      xpath: ['', Validators.required],
      notificationThresholdConfigurations: this.formBuilder.array([])
    });
    this.notificationForm.valueChanges.subscribe(console.log);
  }


  getNotificationThresholdConfigurations() {
    return this.notificationForm.get('notificationThresholdConfigurations') as FormArray;
  }

  saveComponent(component: String) {
    const card: CardBean = {
      gridID: 'grid1234'
    };
    switch (component) {
      case 'map':
        break;
      case 'table':
        break;
      case 'chart':
        break;
      case 'notification':
        this.cardBean.cardComponentBean = this.notificationForm.value;
        this.cardDesignerService.saveCard(this.cardBean)
        .subscribe(data => {
          this.router.navigate(['../dashboard'], { relativeTo: this.activatedRoute.parent });
        }, error => alert('error inserting data' + error));
        break;
      default:
        break;
    }
  }
  addNotificationThreshold() {
    const notification = this.formBuilder.group({
      notificationThresholdConfigurationID: null,
      operator: [],
      value: [],
      colorCode: []
    });
    this.getNotificationThresholdConfigurations().push(notification);
  }

  deleteNotificationThreshold(i) {
    this.getNotificationThresholdConfigurations().removeAt(i);
  }

  onSelectedJSONPath(jsonPath: String) {
    this.selectedJSONPath = jsonPath;
    this.notificationForm.patchValue({xpath: jsonPath});
    console.log(jsonPath);
  }

}

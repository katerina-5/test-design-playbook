import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {DataSourceService} from '../../shared/service/data-source.service';
import {SolvedModel} from '../../shared/models/solved-model';


@Component({
  selector: 'app-test-result-table',
  templateUrl: './test-result-table.component.html',
  styleUrls: ['./test-result-table.component.css']
})
export class TestResultTableComponent {

  @Input() countCheckedElements: number;
  @Input() maxCountCheckedElements: number;

  @Input() models: Array<SolvedModel>;

  constructor(private dataSource: DataSourceService, private route: Router) {
    this.countCheckedElements = 5;
    this.maxCountCheckedElements = 5;

    this.models = JSON.parse(localStorage.getItem('savedTestResults'))
  }

  sendData() {
    const sendData = this.models;
    this.dataSource.saveResults(sendData).subscribe( () => {
      this.route.navigate(['/finish'])
    })

  }
}

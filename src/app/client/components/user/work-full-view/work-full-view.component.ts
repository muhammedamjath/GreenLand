import { Component } from '@angular/core';

@Component({
  selector: 'app-work-full-view',
  templateUrl: './work-full-view.component.html',
  styleUrls: ['./work-full-view.component.css']
})
export class WorkFullViewComponent {

  workUpdates = [
    { date: new Date('2024-03-01'), description: 'Project initiated' },
    { date: new Date('2024-03-05'), description: 'Materials purchased' },
    { date: new Date('2024-03-01'), description: 'Project initiated' },
    { date: new Date('2024-03-05'), description: 'Materials purchased' },
    { date: new Date('2024-03-01'), description: 'Project initiated' },
    { date: new Date('2024-03-05'), description: 'Materials purchased' }
  ];

}

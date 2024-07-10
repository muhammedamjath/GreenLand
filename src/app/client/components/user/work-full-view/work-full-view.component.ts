import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { clientService } from 'src/app/services/client.service';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';

interface WorkUpdate {
  _id: any;
  date: Date;
  discription: string;
}

@Component({
  selector: 'app-work-full-view',
  templateUrl: './work-full-view.component.html',
  styleUrls: ['./work-full-view.component.css'],
})
export class WorkFullViewComponent implements OnInit {
  constructor(
    private activatedRoutes: ActivatedRoute,
    private clientService: clientService,
    private router: Router
  ) {}

  objectId: string = '';
  fullData: any;
  contractorData:any
  workUpdates: WorkUpdate[] = [];

  ngOnInit(): void {
    this.activatedRoutes.params.subscribe((data) => {
      this.objectId = data['id'];
    });

    this.clientService.detailedViewOfWork(this.objectId).subscribe((res) => {
      this.fullData = res[0];
      console.log(this.fullData);
      
      for (let data of res[0].workUpdates) {
        this.workUpdates.push(data);
      }
    });

    this.clientService.generateInvoice(this.objectId).subscribe((res)=>{
      this.contractorData=res
    })

  }


  // function to update color of progress
  updateColor() {
    if (this.fullData?.status == 'requsted') {
      return {
        width: '10%',
      };
    } else if (this.fullData?.status == 'Accepted') {
      return {
        width: '40%',
      };
    } else if (this.fullData?.status == 'started') {
      return {
        width: '80%',
      };
    } else if (this.fullData?.status == 'finished') {
      return {
        width: '100%',
      };
    } else {
      return {
        'background-color': 'green',
      };
    }
  }

  // chat button 
  openChat(id: string, componyId: string) {
    this.router.navigate([`/client/chat/${id}/${componyId}`]);
  }

  // invvoice 
  projectInvoice(id:string){
    const data = document.getElementById('invoice-content');

    // remove class of the invoice canvas for getting value
    data?.classList.remove('hide-on-print');
 
    html2canvas(data!).then((canvas) => {
      const imgWidth = 208;
      const pageHeight = 295;
      const imgHeight = canvas.height * imgWidth / canvas.width;

      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
      pdf.save('GreenLand_invoice.pdf');

    // add class of the invoice canvas 
      data?.classList.add('hide-on-print');

    });    
  }
}

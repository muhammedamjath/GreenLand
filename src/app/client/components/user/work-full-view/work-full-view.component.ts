import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { clientService } from 'src/app/services/client.service';

interface WorkUpdate {
  _id:any,
  date: Date;
  discription: string;
}

@Component({
  selector: 'app-work-full-view',
  templateUrl: './work-full-view.component.html',
  styleUrls: ['./work-full-view.component.css']
})
export class WorkFullViewComponent implements OnInit {
  constructor(private activatedRoutes:ActivatedRoute , private clientService:clientService , private router:Router){}

  objectId:string=''
  fullData:any

  ngOnInit(): void {
    this.activatedRoutes.params.subscribe(data =>{
      this.objectId=data['id']
    })

    this.clientService.detailedViewOfWork(this.objectId).subscribe((res)=>{
      this.fullData=res[0]
      for (let data of res[0].workUpdates) {        
        this.workUpdates.push(data);
      }
      console.log(res[0]);
      
    })
    
  }

  workUpdates : WorkUpdate[] = [];

  updateColor(){
    if(this.fullData?.status == 'requsted'){
      return {
        'width': '10%',
      };
    }else if(this.fullData?.status == 'Accepted'){
      return {
        'width': '40%',
      };
    }else if(this.fullData?.status == 'started'){
      return {
        'width': '80%',
      };
    }else if(this.fullData?.status == 'finished'){
      return {
        'width': '100%',
      };
    }else{
      return {
        'background-color': 'green', 
      };
    }
  }

  openChat(id:string ,componyId:string){
    this.router.navigate([`/client/chat/${id}/${componyId}`])
  }

}

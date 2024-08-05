import { Component, ElementRef, HostListener, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { clientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {

  constructor(
    private clientService: clientService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private elRef: ElementRef
  ) {}

  userData: any;
  searchData: string = '';
  allComponys: any[] = [];
  filteredComponys: any[] = [];
  selectedCategory: string = '';
  selectedLocation: string = '';
  filterView:boolean=true

  districts: string[] = [
    'Kasarkod',
    'Kannur',
    'Wayanad',
    'Kozhikode',
    'Malappuram',
    'Trissur',
    'Palakkad',
    'Ernamkulam',
    'Idukki',
    'Pathanamthitta',
    'Kottayam',
    'Kollam',
    'Alappuzha',
    'Thiruvananthapuram',
  ];
  works: string[] = [
    'Demolition',
    'Framing',
    'Plumbing',
    'Electrical',
    'HVAC',
    'Insulation',
    'Drywall',
    'Flooring',
    'Painting and Finishing',
    'Carpentry',
    'Roofing',
    'Windows and Doors',
    'Exterior Work',
    'Landscaping',
    'Plastering',
    'Tiling',
    'Interior Design',
    'Lighting and Fixtures',
    'Security Systems',
    'Smart Home Integration',
    'Gardening and Planting',
    'Lawn Care',
    'Irrigation Systems',
    'Outdoor Lighting',
    'Patios and Decks',
    'Fencing and Gates',
    'Pathways and Walkways',
    'Water Features',
    'Outdoor Kitchens and BBQ Areas',
    'Outdoor Furniture and Decor',
    'Pest Control (Outdoor)',
    'Garden Structures',
    'Swimming Pools and Hot Tubs',
    'Rainwater Harvesting Systems',
  ];
  

  ngOnInit() {
    this.clientService.getUser().subscribe((res) => {
      this.userData = res;
    });

    this.clientService.getAllCompony().subscribe((res) => {
      this.allComponys = res;
      this.filteredComponys = res; // Initially show all companies
      
    });

      this.checkScreenSize();
    
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  filterClicked(state:boolean){
    this.filterView = state
    
  }

  checkScreenSize(): void {
    if (window.innerWidth < 768) {
      this.onSmallScreen();
    } else {
      this.onLargeScreen();
    }
  }

  onSmallScreen(): void {
    this.filterView=false
  }

  onLargeScreen(): void {
    this.filterView = true;  
  }


  ngDoCheck() {
    this.filterComponys();
  }

  filterComponys() {
    this.filteredComponys = this.allComponys.filter((compony) => {
      const matchesSearch =
        compony.componyName
          .toLowerCase()
          .includes(this.searchData.toLowerCase()) ||
        compony.category.toLowerCase().includes(this.searchData.toLowerCase());
      const matchesCategory = this.selectedCategory ? compony.category === this.selectedCategory: true;
      const matchesLocation = this.selectedLocation ? compony.location === this.selectedLocation: true;

      return matchesSearch && matchesCategory && matchesLocation;
    });
  }

  onCategorySelect(category: string) {
    this.selectedCategory = category;
    this.filterComponys();
  }

  onLocationSelect(location: string) {
    this.selectedLocation = location;
    this.filterComponys();
  }
  shareId(id: any) {
    this.router.navigateByUrl(`/client/detailedView/${id}`);
  }

}

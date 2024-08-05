import { Location } from "@angular/common";
import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const contractorGuard: CanActivateFn = (route , state)=>{
    const router=inject (Router)
  const location = inject(Location);
    const category =localStorage.getItem('category')
    if(category == 'contractor'){
        return true
    }else{
        location.back()
        return false
    }
}


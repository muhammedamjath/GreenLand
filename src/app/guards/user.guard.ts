import { Location } from "@angular/common";
import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";

export const userGuard: CanActivateFn = (route , state)=>{
  const router=inject (Router)
  const location = inject(Location);
    const category =localStorage.getItem('category')
    if(category == 'user'){
        return true
    }
    else{
        location.back()
        return false
    }
}


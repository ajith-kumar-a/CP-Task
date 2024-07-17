import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  if(!!sessionStorage.getItem("user")){
      window.alert("user is login")
      return true
  }else{
  return false;
  }
};

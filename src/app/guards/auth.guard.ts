import { CanActivateChildFn } from '@angular/router';

// basic auth guard
export const authGuard: CanActivateChildFn  = (route, state) => {
  const token = localStorage.getItem("token")
  const user = localStorage.getItem("user")
  console.log(user, token)
  if(!token || !user){
    return false
  }
  return true;
};

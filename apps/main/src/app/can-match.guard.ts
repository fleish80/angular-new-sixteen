import { CanMatchFn } from '@angular/router';



// before - deprecated

// @Injectable({
//   providedIn: 'root'
// })
// export class CanMatchGuard implements CanMatch {
//   canMatch(
//     route: Route,
//     segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     return true;
//   }
// }

export const canMatchGuard: CanMatchFn = (route, segments) => {
  return true;
};

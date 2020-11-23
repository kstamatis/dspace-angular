import { Injectable } from '@angular/core';
import { FeatureAuthorizationGuard } from './feature-authorization.guard';
import { FeatureID } from '../feature-id';
import { AuthorizationDataService } from '../authorization-data.service';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of as observableOf } from 'rxjs';

/**
 * Prevent unauthorized activating and loading of routes when the current authenticated user doesn't have administrator
 * rights to the {@link Site}
 */
@Injectable({
  providedIn: 'root'
})
export class SiteAdministratorGuard extends FeatureAuthorizationGuard {
  constructor(protected authorizationService: AuthorizationDataService, protected router: Router) {
    super(authorizationService, router);
  }

  /**
   * Check administrator authorization rights
   */
  getFeatureID(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<FeatureID> {
    return observableOf(FeatureID.AdministratorOf);
  }
}

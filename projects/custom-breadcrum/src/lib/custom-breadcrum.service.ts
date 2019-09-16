import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomBreadcrumService {
  // variables of type Behaviour Subject are created, this is because this type allows us to create observables of this variables
  private breadcrumbStructure = new BehaviorSubject([]);
  breadcrumbStructure_ = this.breadcrumbStructure.asObservable();
  private showBreadCrumbStructure = new BehaviorSubject(true);
  showBreadcrumbStructure_ = this.showBreadCrumbStructure.asObservable();

  constructor() { }

  /**
   * creates a copy of the structure of breadcrumb, and sets the newValue param in the structure in the specified index
   * @param newValue
   * @param index
   */
  setItemBreadcrumbStructure(newValue, index) {
    const newBreadCrumb = this.getBreadcrumbStructure();
    newBreadCrumb[index] = newValue;
    this.breadcrumbStructure.next(newBreadCrumb);
  }

  /**
   * returns the value(full structure) of the breadcrumb
   */
  getBreadcrumbStructure() {
    return this.breadcrumbStructure.value;
  }

  /**
   * Sets an empty value to the breadcrumb (resets it)
   */
  resetBreadcrumbStructure() {
    this.breadcrumbStructure.next([]);
  }

  /**
   * Sets the value (boolean) to the variable that indicates if the breadcrumb must be visible or not
   * @param value
   */
  changeVisibilityBreadcrumb(value: boolean) {
    this.showBreadCrumbStructure.next(value);
  }

}

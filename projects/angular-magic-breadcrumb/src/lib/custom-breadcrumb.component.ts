import {Component, Input, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {AngularMagicBreadcrumbService} from "./angular-magic-breadcrumb.service";
import {filter} from "rxjs/operators";
import {Location} from '@angular/common';

@Component({
  selector: 'lng-self-generated-breadcrumb',
  templateUrl: './custom-breadcrumb.component.html',
  styleUrls: ['./custom-breadcrumb.component.scss'],
  providers: [AngularMagicBreadcrumbService]
})
export class CustomBreadcrumbComponent implements OnInit {
  @Input() mainRoot: String;
  _mainRoot: String;
  lastPathname: string;
  // this variable will handle the current url split into a list structure
  currentsplitUrl = [];
  // this variable will handle the full breadcrumb itself, this variable will be used in the HTML template
  breadcumValue: {
    url: string,
    active: boolean,
    value: string
  }[] = [];
  // this variable is a flag that indicates if the Breadcrumb must be shown in a specific view
  showBreadcrum = true;

  constructor(
    private router: Router,
    public breadcrumbService: AngularMagicBreadcrumbService,
    private location: Location
  ) { }

  ngOnInit() {
    this.setUrls();
    this.getBreadcrum();
  }

  /**
   * Checks if the part of the breadcrumb is active or not, and make the redirection to the specific url of the part
   * @param breadcrum -> part of the full breadcrumb
   */
  redirectToView(breadcrum) {
    if (breadcrum.active) {
      return;
    }
    this.router.navigate([breadcrum.url]);
  }

  /**
   * Make the subscriptions to the two observables, and saves the value of them into a specific variable
   * saves the breadcrumb and if should be shown or not
   */
  getBreadcrum() {
    this.breadcrumbService.breadcrumbStructure_.subscribe(value => {
      let newBreadcrum = [];
      value.forEach(item => {
        if (item.show == true) {
          newBreadcrum.push(item)
        }
      });
      this.breadcumValue = newBreadcrum;
    });

    this.breadcrumbService.showBreadcrumbStructure_.subscribe(value => {
      this.showBreadcrum = value;
    });
  }

  setUrls() {
    this._mainRoot = this.mainRoot;
    this.router.events.pipe(
      // Just executed when an navigation event ends
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      // returns and save the breadcrumb into a new temporal variable
      const currentBreadCrumStructure = this.getBreadcrumbStructure();
      // resets the structure of the breadcrumb
      this.breadcrumbService.resetBreadcrumbStructure();
      // this variable will hold the url to add to the breadcrumb structure
      let setsUrl = '';
      const pathnameUrl = this.location.path().split('#')[0].split('?')[0];
      // this condition is when the breadcrumb is in a platform that has got a route that we don't want to show in the breadcrumb
      if (pathnameUrl.includes('/'+ this._mainRoot +'/')) {
        setsUrl = '/'+ this._mainRoot;
      }
      if (pathnameUrl != this.lastPathname) {
        // the breadcrumb must be shown if the first item change
        this.showBreadcrum = true;
      }

      // splits the url by the route on the condition above and splits it by the '/' separator
      // Removes the /plataforma/ and params if the url have one of them
      let splitUrl = pathnameUrl.split('/'+ this._mainRoot +'/').join('').split('/');
      // this line assure us that the url split has no blanks or null or empty elements
      splitUrl = splitUrl.filter(Boolean);
      splitUrl.forEach((item, index) => {
        setsUrl = setsUrl + '/' + item;
        // a variable that holds the new part that will be added to the breadcrumb
        let newBreadcrum = {};
        // if one part of the breadcrumb did'nt change, the last known value will be added (remains the same)
        if (this.currentsplitUrl[index] === item) {
          newBreadcrum = currentBreadCrumStructure[index];
        } else {
          // else... a new structure is created
          newBreadcrum = {
            value: item,
            url: setsUrl,
            active: splitUrl.length - 1 === index,
            show: true
          };
        }
        // the new part of the breadcrumb is added to the structure that will be shown
        this.setItemBreadcrumbStructure(newBreadcrum, index);

        if (splitUrl.length - 1 === index) {
          // in the last item of the route, the current route split is setted into the variable, to use it later when another navigation
          // event happens
          this.currentsplitUrl = splitUrl;
        }

      });
      this.lastPathname = pathnameUrl;
    });
  }

  setItemBreadcrumbStructure(newBreadcrum, index) {
    this.breadcrumbService.setItemBreadcrumbStructure(newBreadcrum, index);
  }

  getBreadcrumbStructure() {
    return this.breadcrumbService.getBreadcrumbStructure()
  }

  changeVisibilityBreadcrumb(value: boolean) {
    this.breadcrumbService.changeVisibilityBreadcrumb(value)
  }

}

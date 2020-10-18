# AngularMagicBreadcrumb

AngularMagicBreadcrumb is a library for self-generated breadcrumb in
Angular 7 --> Version 0.0.2
Angular 8 --> Version 0.0.4

# Demo
demos available [here](https://stackblitz.com/edit/angular-magic-breadcrumb-demo)


# Install

You can install the package from our npm package
```bash
npm install --save angular-magic-breadcrumb
```


# Usage

First you need to provide the AngularMagicBreadcrumbModule to your desired Module

```bash
import {AngularMagicBreadcrumbModule} from "angular-magic-breadcrumb";

// In your App's module or Custom Module:
@NgModule({
    imports: [
       AngularMagicBreadcrumbModule.forRoot()
    ] 
})
```

Now, you can use AngularMagicBreadcrumbModule as follow:

```bash
<lng-self-generated-breadcrumb></lng-self-generated-breadcrumb>
```
# API Documentation

### Inputs
 * mainRoot: Allows you to remove a main or previous route  
 _Type: string_


### Author 

Laura Cristina Navarro Galvan

### License
MIT

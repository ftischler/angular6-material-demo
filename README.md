# Angular6MaterialDemo  
  
This is Angular 6 Material Demo including:  
- Angular & Angular Material v6  
- Angular CLI v6 Schematics  
- Tree-shakeable providers  
  
This app was generated by the Angular CLI v6.0.1 using `ng new`

## Angular & Angular Material v6:

This app is using Angular Version 6.0.0
It includes Angular Material which was added to the project with the new `ng add @angular/material` command. App includes the prebuilt indigo-pink theme. 

## Angular CLI v6 Schematics
 
 Angular Material components MatNav and MatDashboard were generated by the new Angular CLI Schematics for Angular Material:
 `ng generate ng generate @angular/material:material-nav --name=matNav`
 `ng generate ng generate @angular/material:material-dashboard --name=matDashboard`

## Tree-shakeable providers
The app includes `MenuService` which is generated by the Angular CLI using the command
`ng generate service menu`
 
Menu Service is not provided in `app.module` in the traditional way. It uses the new provide syntax in its `@Injectable` decorator:
`@Injectable({  
  providedIn: 'root'  
})`  

## Hosting
This demo is hosted on heroku. You can see it here: 
[https://angular6-material-demo.herokuapp.com/](https://angular6-material-demo.herokuapp.com/)

It is shipped in a bundle of 3 javascript and one css-file with a size of:

- runtime.*.js (~1 KB gzipped)
- polyfills.*.js (~19.6 KB gzipped)
- main.*.js (~105 KB gzipped)
- styles.*.css (~7.6 KB gzipped)

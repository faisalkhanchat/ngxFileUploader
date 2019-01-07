# NgxFileUploader

Angular 4+ Single Multiple any kind of file up-loader like image , psd, word , audio, any document. 
1) Preview and delete feature.
2) Drag & Drop Feature

# Importing file uploader in module 

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
// below the module are the dependency with fileuploader module
import { FileUploaderModule } from './FileUploader/file-uploader.module';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
  // import module here
    BrowserAnimationsModule,
    MaterialModule,
    FileUploaderModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

# File uploader component html file
    <app-file-uploader class="file-uploader" label="Upload Multiple Images" accept="image/png,image/jpg,image/jpeg"
    [maxFiles]="10" #imageStore="FileList"></app-file-uploader>    

# File uploader component .ts file

```
import { Component, ViewChild, OnInit } from '@angular/core';
import { FileUploaderComponent } from './FileUploader/file-uploader.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // here the code for file response
  @ViewChild('imageStore') _images: FileUploaderComponent;
  constructor() { }

  ngOnInit() {
    // here the code console the output
    console.log(this._images);
  }
}
```



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

import { FileUploaderComponent } from './FileUploader/file-uploader.component';
import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('imageStore') _images: FileUploaderComponent;
  constructor() { }

  ngOnInit() {
    console.log(this._images);
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent /*implements OnInit*/{
  /*
  public message: string | undefined;
  public progress : number ;

  @Output() public onUploadFinished = new EventEmitter();

  constructor(private http: HttpClient){}

  ngOnInit(): void {
  }

  uploadFile = (files) =>{
    if (files.length === 0)
    return;

    let fileToUpload = <File>files[0];
    const formData = new FormData();

    formData.append('file',fileToUpload,fileToUpload.name);

    this.http.post('https://localhost:44380/api/Upload',formData,{reportProgress: true, observe: 'events'})
    .subscribe(event =>{
      if(event.type === HttpEventType.UploadProgress){
        this.progress = Math.round(100 * event.loaded / event.total);
      }
      else if(event.type === HttpEventType.Response){
        this.message = "Upload Succesful";
        this.onUploadFinished.emit(event.body);
      }
    })
    */
  }




import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FireForestService } from 'src/app/services/fire-forest.service';

@Component({
  selector: 'app-fire-forest',
  templateUrl: './fire-forest.component.html',
  styleUrls: ['./fire-forest.component.css']
})
export class FireForestComponent implements OnInit {

  @ViewChild('fileInput') fileInput: ElementRef;
  @ViewChild('imgTarget') imgTarget:ElementRef;

  errorMessage = ""
  fileAttr = 'Choose File';
  image = new Image();
  isFirePrediction = undefined;
  lookinForFire = false;
  constructor(private fireForestService: FireForestService){}

  ngOnInit(): void {
  }
  
  uploadFileEvt(imgFile: any) {
    if (imgFile.target.files && imgFile.target.files[0]) {

      this.fileAttr = '';
      this.fileAttr = imgFile.target.files[0].name;
      if(this.fileAttr.includes('.png') || this.fileAttr.includes('.jpg')
        || this.fileAttr.includes('.jpeg')){
    
        this.errorMessage = ""
        // HTML5 FileReader API
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.image.src = e.target.result;
          this.image.onload = rs => {
            let imgBase64Path = e.target.result;
          };
          this.image.width = 500;
          this.imgTarget.nativeElement.appendChild(this.image);
        };
        reader.readAsDataURL(imgFile.target.files[0]);
        // Reset if duplicate image uploaded again
        this.fileInput.nativeElement.value = "";

      }
      else{
        this.fileAttr = 'Choose File';
        this.errorMessage = "The file must be an image"
      }

    } else {
      this.fileAttr = 'Choose File';
    }
  }


  makePrediction(){
    this.isFirePrediction = undefined;
    this.lookinForFire = true;
    this.fireForestService.makePrediction(this.image.src as string).subscribe(
      result => {
        this.isFirePrediction = result["string"];
      }
    )
  }


}

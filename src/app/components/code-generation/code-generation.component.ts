import { Component, Input, OnInit } from '@angular/core';
import { CodeGenerationService } from 'src/app/services/code-generation.service';

@Component({
  selector: 'app-code-generation',
  templateUrl: './code-generation.component.html',
  styleUrls: ['./code-generation.component.css']
})
export class CodeGenerationComponent implements OnInit {
  
  textPrompt: string = "add two numbers";
  codeResult =  {'string':""}
  constructor(private codeGenerationService: CodeGenerationService) { }

  ngOnInit(): void {
  }


  onSubmit(){
    if(!this.textPrompt){
      alert("Please insert description!")
      return 
    }
    this.codeResult.string = "wait for the serve..."
    this.codeGenerationService.getCode(this.textPrompt).subscribe(code=>this.codeResult=code)

  }

}

import { Component,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoDataService } from '../services/allservices';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  constructor(private http:HttpClient,private todoSer:TodoDataService,private modalService:NgbModal){

  }

  form = new FormGroup({
    "todoUpdate": new FormControl("")
  });
    
  
  selectedUserId:any=""
  updateTodo:any=""

  allList:any=[]

  ngOnInit(): void {
    this.fetchpost()
  }

  fetchpost(){
    this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe( (resp)=>{
      console.log(resp)
      this.allList=resp
    }
    )
    console.log(this.allList[0])

  }
  onDleteTodo(id:any){
    // this.todoSer.deleteTheTodo(id).subscribe((resp)=>{
    //   this.allList=this.allList.filter((p)=>p.id)
    // })
    let a=this.allList.filter((each:any)=>each.id!==id)
    return this.allList=a
    

  }
  onEditTodo(id:any){
    let selctedTodo=this.allList.filter((each:any)=>each.id===id)
    console.log(selctedTodo[0].id);
    this.selectedUserId=selctedTodo
    this.form.setValue({
      "todoUpdate":selctedTodo[0].title
    })
    // let index=this.filterandUpdate(id)

  }

  onclickupdatetile(){
    let newVal=this.form.value

    console.log(newVal)
    let index=this.allList.findIndex((each:any)=>each.id===this.selectedUserId[0].id)
    this.allList[index].title=newVal.todoUpdate
    console.log(this.allList[index])  
    this.modalService.dismissAll()
  }

  // filterandUpdate(id:any){
  //   let indexno=this.allList.findIndex((each:any)=>each.id===id)
  //   return indexno
  // }


  // onClickUpdate(id: string){
  //   let index = this.data.findIndex((each) => {
  //     return (each.id == id)
  //   })
  //   let editData=(this.data[index])
  //   this.form.setValue({
  //     firstname:editData.firstname,
  //     lastname:editData.lastname,
  //     email:editData.email,
  //     DOB:editData.DOB,
  //     status:editData.status,
  //     id:editData.id
  //   })
  //   this.inndexNumber=index
  //   //console.log(index)
  //   // this.onClickdelete(editData)
  //   // this.submitted=true
  //   //console.log(this.form.value)
  // }


  open(content:any, allList:any) {
    this.updateTodo=this.allList;
   this.modalService.open(content);
    
    }

 

}

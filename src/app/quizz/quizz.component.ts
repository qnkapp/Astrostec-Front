import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {

  reponses : any;
  questions: any;
  score : any;
  scoreParQuestion: number[]=[0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  status: any;
  message : any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getReponse();
    this.getQuestion();
  }

  getReponse() : any{
    this.http.get('http://localhost:8084/reponses').subscribe({
      next: (data) => { this.reponses = data; },
      error: (err) => { console.log(err) }
    })
  }

  getQuestion() : any{
    this.http.get('http://localhost:8084/questions').subscribe({
      next: (data) => { this.questions = data; },
      error: (err) => { console.log(err) }
    })
  }

  onSubmit(quizzForm: NgForm){

    this.score=0;

    if (quizzForm.valid) {
      const answer = quizzForm.value;
      // console.log(this.scoreParQuestion)

      this.scoreParQuestion.forEach(
        s => { this.score+=s }
      )

      this.message = "Votre score est de " + this.score + " points !"
    }
  }

}
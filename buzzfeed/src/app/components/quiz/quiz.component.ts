import { Component, OnInit } from '@angular/core';
import questionsData from '../../../assets/data/questions.json'

type Answer = {
    id: number,
    name: string,
    alias: string
} 

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

    title: string;
    questions: string[];
    answers: Answer[][];
    questionIndex: number;
    answerIndex: number;
    hits: number;
    done: boolean;
    
    constructor() {
        this.title = 'Título'
        this.questions = ['Questão 1'];
        this.answers = [[{id: 1, name: 'A1', alias: 'C'}, {id: 2, name: 'B1', alias: 'E'}, {id: 3, name: 'C1', alias: 'E'}, {id: 4, name: 'D1', alias: 'E'}]];
        this.questionIndex = 0;
        this.answerIndex = 0;
        this.hits = 0;
        this.done = false;
    }

    ngOnInit(): void {
        this.title = questionsData.title;
        this.questions = questionsData.questions.map(element => element.question);
        this.answers = questionsData.questions.map(element => element.options);
    }
    
    saveAnswer(option: string) {
        if (option == 'C') 
            this.hits++;

        if (this.questionIndex + 1 == this.questions.length) 
            this.done = true;
        
        this.questionIndex++;
        this.answerIndex++;
    }

    getRandom(array: Answer[]) {
        const random = Array.from(array);
        
        for (let i = random.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [random[i], random[j]] = [random[j], random[i]];
        }

        return random;
    }

    restart() {
        this.hits = 0
        this.answerIndex = 0;
        this.questionIndex = 0;
        this.done = false;
    }
}
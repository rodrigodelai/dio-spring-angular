import { Component, Input, OnInit } from '@angular/core';
import { Database } from 'src/app/data/FakeDatabase';

@Component({
    selector: 'app-main-post',
    templateUrl: './main-post.component.html',
    styleUrls: ['./main-post.component.css']
})
export class MainPostComponent implements OnInit {
    @Input() identifier: number; 
    img: string;
    date: string
    title: string;
    description: string;

    constructor() {
        this.identifier = 1;
        this.img = "https://linda-hoang.com/wp-content/uploads/2014/10/img-placeholder-dark.jpg";
        this.date = "July 17, 2023"
        this.title = "Awesome title!"
        this.description = "Post description ..."
    }

    ngOnInit() {
        this.setAttributesById(this.identifier);
    }
  
    setAttributesById(identifier: number) {
        const article = Database.filter(article => article.id == identifier);
      
        if (article.length) {
            this.img = article[0].img;
            this.date = article[0].date;
            this.title = article[0].title;
            this.description = article[0].description;
        }
    }
}

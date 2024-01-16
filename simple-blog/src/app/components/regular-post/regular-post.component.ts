import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FakeDatabase } from 'src/app/data/FakeDatabase';

@Component({
  selector: 'app-regular-post',
  templateUrl: './regular-post.component.html',
  styleUrls: ['./regular-post.component.css']
})

export class RegularPostComponent implements OnChanges {
	@Input() identifier: number;
	img: string;
	date: string
	title: string;

  	constructor(private router: Router) {
		this.identifier = 1;
		this.img = "https://linda-hoang.com/wp-content/uploads/2014/10/img-placeholder-dark.jpg";
		this.date = "July 17, 2023"
		this.title = "Coming soon!"

		// router.events.subscribe(change => {
		// 	this.setAttributesById(this.identifier); 
		// 	console.log(this.identifier);
		// });

		// router.events.pipe(filter(event => event instanceof NavigationStart)).subscribe(change => {
		// 	console.log(change);
		// 	console.log(this.identifier);
		// });
	}

	ngOnChanges() {
		this.setAttributesById(this.identifier);
	}

  	setAttributesById(identifier: number) {
		const article = FakeDatabase.filter(article => article.id == identifier);
		
		if (article.length) {
			this.img = article[0].img;
			this.date = article[0].date;
			this.title = article[0].title;
		}
	}
}

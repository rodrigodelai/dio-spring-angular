import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { FakeDatabase } from '../../data/FakeDatabase'

@Component({
    selector: 'app-main-article',
    templateUrl: './main-article.component.html',
    styleUrls: ['./main-article.component.css']
})
export class MainArticleComponent implements OnChanges{
	@Input() identifier: number;
	img: string;
	date: string
	title: string;
	content: string[];

	constructor() {
		this.identifier = 1;
		this.img = "https://linda-hoang.com/wp-content/uploads/2014/10/img-placeholder-dark.jpg";
		this.date = "July 17, 2023";
		this.title = "Awesome title!";
		this.content = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, iure eligendi incidunt rerum cupiditate illum debitis, aperiam laborum deserunt ad repudiandae neque? Quidem magni modi impedit quaerat, laboriosam cupiditate nulla? Facere soluta adipisci alias. Odit ipsum ipsa totam, qui voluptates doloribus tenetur cumque, cupiditate magni doloremque, iure commodi. A possimus quibusdam doloribus maiores enim repudiandae alias quae nostrum quo! Architecto. Perferendis sint sed, commodi voluptatum voluptates quasi illum deleniti sunt libero? Perspiciatis ipsum odit ipsa nostrum voluptates ea dolores quo ipsam, fuga minus atque quisquam nulla veniam enim est quasi. Sed impedit facilis exercitationem at magni nostrum magnam dolorum, rerum vero veniam. Inventore numquam voluptates consectetur et unde dignissimos accusantium error adipisci. Nostrum in explicabo sed cum neque eos iste? Fuga veniam sunt architecto quo modi dolorem, magnam velit nobis mollitia deserunt eos earum nisi perferendis libero quasi ad alias. Libero incidunt odit reprehenderit deserunt, quaerat maiores ducimus quia quod."]
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
			this.content = article[0].content;
		}
	}
}

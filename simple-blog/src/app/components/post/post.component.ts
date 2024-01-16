import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-content',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
    identifier: number;
    relatedIds: number[];
    
    constructor(private activatedRoute: ActivatedRoute, private scroller: ViewportScroller) {
        this.identifier = 1;
        this.relatedIds = [2,3,4];
    }

    ngOnInit() {
        this.activatedRoute.paramMap.subscribe(parameter => {
            console.log("novo parametro (id): "+ parameter.get("id"));
			this.identifier = Number(parameter.get("id"));	
		});
    }

    scrollTop() {
        this.scroller.scrollToPosition([0, 0]);
    }
}

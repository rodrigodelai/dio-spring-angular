import { Component, ElementRef, Input } from '@angular/core';
import { Database, Article } from '../../data/FakeDatabase'

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
    @Input() title: string;
    data: Article[];
    scroll: number;

    constructor(private element: ElementRef) {
        this.title = "Category title";
        this.data = Database;
        this.scroll = 0;
    }

    scrollX(direction: number) {
        const ul = this.element.nativeElement.childNodes[1].childNodes[1];
        const size = ul.offsetWidth;
        this.scroll += size * direction;

        if (this.scroll < 0) this.scroll = 0;
        else if (this.scroll > (Database.length/2 - 1) * size) this.scroll = (Database.length/2 - 1) * size;

        ul.scrollTo(this.scroll, 0);
    }
}

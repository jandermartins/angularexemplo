import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: 'app-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges{
    
    @Input()
    rating: number = 0;

    starwigth: number = 0;

    ngOnChanges(): void {
       this.starwigth = this.rating * 74 / 5;
    } 
}
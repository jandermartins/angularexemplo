import { Component, OnInit } from "@angular/core";
import { Curso } from "./curso";


@Component({
    selector: 'app-curso-lista',
    templateUrl: './curso-lista.component.html'
})

export class CursoListComponent implements OnInit{
    
    
    ngOnInit(): void {
        this.cursos = [
            {
                id: 1,
                name: "Angular Curso",
                imageUrl: 'assets/imagens/image1.png',
                price: 13,
                code: "123-dilma",
                duration: 3,
                rating: 3,
            },
            {
                id: 2,
                name: "Vue.JS Curso",
                imageUrl: "assets/imagens/cli2.png",
                price: 1313,
                code: "123-lula",
                duration: 6,
                rating: 5,
            },
            {
                id: 2,
                name: "Vue.JS Curso",
                imageUrl: "assets/imagens/image2.png",
                price: 1313,
                code: "123-lula",
                duration: 6,
                rating: 2,
            },
            {
                id: 2,
                name: "Vue.JS Curso",
                imageUrl: "assets/imagens/router.png",
                price: 1313,
                code: "123-lula",
                duration: 6,
                rating: 1,
            },
            {
                id: 2,
                name: "Vue.JS Curso",
                imageUrl: "assets/imagens/http.png",
                price: 1313,
                code: "123-lula",
                duration: 6,
                rating: 0,
            }
        ]
    }

    cursos: Curso[] = [];


}
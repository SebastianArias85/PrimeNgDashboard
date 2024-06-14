import { Component } from '@angular/core';

import { FilterService } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  cols: any[] | undefined;
  tutorials!: Tutorial[]  ;

  constructor(private filterService: FilterService) {}

  ngOnInit() {
    this.tutorials = [
      {
        title: 'Queue',
        category: 'Data Structure',
        rating: 8,
      },
      {
        title: 'Circularly LinkedList',
        category: 'Data Structure',
        rating: 1,
      },
      {
        title: 'Doubly LinkedList',
        category: 'Data Structure',
        rating: 3,
      },
      {
        title: 'Singly LinkedList',
        category: 'Data Structure',
        rating: 5,
      },
      {
        title: 'Doubly Ended Queue',
        category: 'Data Structure',
        rating: 10,
      },
      {
        title: 'Binary Search Tree',
        category: 'Data Structure',
        rating: 2,
      },
      {
        title: 'Red Black Tree',
        category: 'Data Structure',
        rating: 9,
      },
      {
        title: 'Breadth First Search',
        category: 'Graph',
        rating: 6,
      },
      {
        title: "Floyd's Cycle",
        category: 'Algorithm',
        rating: 7,
      },
      {
        title: 'Travelling Salesman Problem',
        category: 'Algorithm',
        rating: 4,
      },
      {
        title: 'Bellman Ford',
        category: 'Graph',
        rating: 8,
      },
      {
        title: 'KMP Algorithm',
        category: 'String',
        rating: 10,
      },
    ];

    this.cols = [
      { field: 'title', header: 'Titulos' },
      { field: 'category', header: 'Categorias' },
      { field: 'rating', header: 'Rating' },
    ];
  }
}

export interface Tutorial {
  title?: string;
  category?: string;
  rating?: number;
}

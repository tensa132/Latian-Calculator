import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hasil-page',
  templateUrl: './hasil-page.component.html',
  styleUrls: ['./hasil-page.component.css']
})
export class HasilPageComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

  hasil = '';
  ngOnInit() {
    let temp = this.route.snapshot.paramMap.get('result');
    this.hasil = temp;
  }

}
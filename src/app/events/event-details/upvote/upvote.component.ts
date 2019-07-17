import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'upvote',
  templateUrl: './upvote.component.html',
  styleUrls: ['./upvote.component.css']
})
export class UpvoteComponent {
  @Input() count: any;
  @Input() voted: any;
  @Output() vote = new EventEmitter();

  constructor() {}

  onClick() {
    this.vote.emit({});
  }
}

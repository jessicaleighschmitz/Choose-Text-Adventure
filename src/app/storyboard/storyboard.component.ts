import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-storyboard',
  templateUrl: './storyboard.component.html',
  styleUrls: ['./storyboard.component.css'],
  providers: [StoryService]
})
export class StoryboardComponent implements OnInit {
  stories: FirebaseListObservable<any[]>;


  constructor(private storyService: StoryService) { }

  ngOnInit(){
    this.stories = this.storyService.getStories();
  }

}

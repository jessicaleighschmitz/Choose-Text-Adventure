import { Injectable } from '@angular/core';
import { Story } from './models/story.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class StoryService {
  stories: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.stories = database.list('stories');
  }

  getStories() {
    return this.stories;
  }

}

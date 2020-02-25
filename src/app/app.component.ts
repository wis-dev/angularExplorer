import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { firstOptions } from './data';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({ selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public topics: any[];
  public actions: any[];
  public topic: FormControl;
  public action: FormControl;
  public usageCommand: string;
  public actionNote: string;

  constructor(private router: Router) {
    this.topics = firstOptions;
    this.actions = [];
    this.usageCommand = '';
    this.actionNote = '';
  }

  ngOnInit(): void {
    this.router
      .events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => window.scrollTo(0, 0))
      );
  }

  onChangeTopic(selectedTopic: any): void {

    this.action = null;
    this.usageCommand = '';
    this.actionNote = '';

    if (selectedTopic) {

      const currentTopic = this.topics.find((topic: any) => topic.id === selectedTopic.id);
      this.actions = currentTopic.actions;

      if (this.actions.length === 1) {
        this.action = this.actions[0].id;
        this.onChangeAction(this.actions[0]);
      }
    }
  }

  onChangeAction(selectedAction: any): void {
    if (selectedAction) {
      const currentAction = this.actions.find((action: any) => action.id === selectedAction.id);
      this.usageCommand = currentAction.data.command;
      this.actionNote = currentAction.data.note;
    }
  }
}

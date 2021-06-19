import { Component, OnDestroy, OnInit } from '@angular/core';
import {MediaObserver, MediaChange} from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit, OnDestroy{

  title = 'myAngular';
  mediaSub!: Subscription;
  deviceXs!: boolean;
  constructor(public mediaObserver: MediaObserver) {}
  ngOnInit(){
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result:MediaChange)=>{
        console.log(result.mqAlias);

        this.deviceXs = result.mqAlias === 'xs' ? true : false;
      }
    )
  }

  ngOnDestroy(){
    this.mediaSub.unsubscribe();
  }

}

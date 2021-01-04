import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { VERSION, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  version = VERSION;
  mode = 'side'
  opened = true;
  layoutGap = '64';
  fixedInViewport = true;

  public constructor(private bpo: BreakpointObserver) {}

  public ngOnInit(): void {
    const breakpoints = Object.keys(Breakpoints).map(key => Breakpoints[key])
    this.bpo.observe(breakpoints)
    .pipe(map(bst => bst.matches))
    .subscribe(matched => {
      

      console.log('matched');

      this.determineSidenavMode();
      this.determineLayoutGap();
    });
  }

  private determineSidenavMode(): void {
    if (
        this.isExtraSmallDevice() ||
        this.isSmallDevice()
    ) {
        this.fixedInViewport = false;
        this.mode = 'over';
        this.opened = false;
        return;
    }

    this.fixedInViewport = true;
    this.mode = 'side';
}

private determineLayoutGap(): void {
    if (this.isExtraSmallDevice() || this.isSmallDevice()) {
        this.layoutGap = '0';
        return;
    }

    this.layoutGap = '64';
}

  public isExtraSmallDevice(): boolean {
    return this.bpo.isMatched(Breakpoints.XSmall);
  }

  public isSmallDevice(): boolean {
    return this.bpo.isMatched(Breakpoints.Small)
  }

}



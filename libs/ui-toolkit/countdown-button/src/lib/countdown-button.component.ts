import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { Observable, timer } from 'rxjs';
import { map, takeUntil, takeWhile, tap } from 'rxjs/operators';

/**
 * A button that disable itself progressively until reset.
 */
@Component({
  selector: 'gor-countdown-button, mag-countdown-button',
  template: `
    <ng-container *ngIf="(counter$ | async); else actionTemplate">
      <gor-button btnType="gray" type="button" [disabled]="true">{{
        counterText
      }}</gor-button>
    </ng-container>
    <ng-template #actionTemplate>
      <gor-button btnType="green" type="button" (click)="dispatchAction()">{{
        actionText
      }}</gor-button>
    </ng-template>
  `,
  styles: [':host { display: flex; justify-content: center; width: 100%; }'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountdownButtonComponent implements OnDestroy, OnInit {
  /**
   * The text of button when it is clickable.
   */
  @Input() public actionText: string;

  /**
   * Waiting text to be displayed when it is not clickable.
   */
  @Input() public waitText = 'Try again in';

  /**
   * Wait time to button being clickable again, in seconds.
   * @default 5
   */
  @Input() public waitTime = 5;

  /**
   * Output event to click in button when it is clickable.
   */
  @Output() public buttonClick = new EventEmitter<void>();

  /**
   * Compound text for show in button when it is in wait phase.
   *
   * It is compoung of remaining time and the `waitText` input.
   */
  public counterText = '';

  /**
   * Counter observable that hold internal logic of this component.
   */
  public counter$: Observable<number>;

  /**
   * Empty constructor.
   */
  public constructor() {}

  /**
   * Start timer on component init.
   */
  public ngOnInit() {
    this.startTimer();
  }

  /**
   * Empty `ngOnDestroy` method required by `untilDestroyed` operator from
   * `ngx-take-until-destroy` library.
   */
  public ngOnDestroy() {}

  /**
   * Emits event for button click, disable the button and restart counter observable.
   */
  public dispatchAction() {
    this.buttonClick.emit();
    this.startTimer();
  }

  /**
   * Start the countdown timer for enable back the button again.
   *
   * To avoid memory leak, the obserable will complete on:
   * 1. component destroy life cycle event
   * 2. when counter is equal to 0
   * 3. button was clicked
   *
   * In each tick, 1s, the button label will be updated.
   */
  public startTimer() {
    this.counter$ = timer(0, 1000).pipe(
      untilDestroyed(this),
      map((n: number) => this.waitTime - n),
      takeWhile((n: number) => n >= 0),
      takeUntil(this.buttonClick),
      tap(n => (this.counterText = `${this.waitText} ${n}`))
    );
  }
}

import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement, Input } from "@angular/core";
import { By } from "@angular/platform-browser";
import { TruncateDirective } from './truncate.directive';

@Component({
    template: `<p type="text" [message]="message" [limitChars]="limitChars" [trail]="trail" gorTruncate></p>`
})
class TestTruncateComponent {
  @Input() message: string;
  @Input() limitChars = 20;
  @Input() trail = '...';
}


describe('TruncateDirective', () => {
    let component: TestTruncateComponent;
    let fixture: ComponentFixture<TestTruncateComponent>;
    let pEl: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [TestTruncateComponent, TruncateDirective]
        });
        fixture = TestBed.createComponent(TestTruncateComponent);
        component = fixture.componentInstance;
        pEl = fixture.debugElement.query(By.directive(TruncateDirective));
    });

    it('inner HTML should be empty for empty messages', () => {
      expect(pEl.nativeElement.innerHTML).toBeFalsy();
      expect(pEl.nativeElement.title).toBeFalsy();
    });
    it('inner HTML should show entire message with length < limitChar', () => {
      const message = 'Gorilla';
      component.message = message;
      fixture.detectChanges();
      expect(pEl.nativeElement.innerHTML).toEqual(message);
      expect(pEl.nativeElement.title).toBeFalsy();
    });
    it('inner HTML should show truncated message with length > limitChar', () => {
      const message = 'Gorilla is a strong animal!';
      const truncatedMessage = 'Gorilla is a strong ...';
      component.message = message;
      fixture.detectChanges();
      expect(pEl.nativeElement.innerHTML).toEqual(truncatedMessage);
      expect(pEl.nativeElement.title).toEqual(message);
    });
});

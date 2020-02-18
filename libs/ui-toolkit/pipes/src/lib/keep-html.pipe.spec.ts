import { SecurityContext } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';

import { KeepHtmlPipe } from './keep-html.pipe';

export class DomSanitizerStub {
  public sanitize = (_, data) => data;
  public bypassSecurityTrustHtml = data => data;
}

describe('GorKeepHtmlPipe', () => {
  let domSanitizer: DomSanitizer;
  let pipe: KeepHtmlPipe;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule],
      providers: [{ provide: DomSanitizer, useValue: new DomSanitizerStub() }]
    });
    domSanitizer = TestBed.get(DomSanitizer);
  }));

  it('create an instance', () => {
    pipe = new KeepHtmlPipe(domSanitizer);
    expect(pipe).toBeTruthy();
  });

  it('should bypass security and trust the given value to be safe HTML', () => {
    pipe = new KeepHtmlPipe(domSanitizer);
    const safeContent = pipe.transform("<script>alert('Should be trusted!')</script>");
    const sanitized_str = domSanitizer.sanitize(SecurityContext.HTML, safeContent);
    expect(sanitized_str).toBe("<script>alert('Should be trusted!')</script>");
  });
});

import { SecurityContext } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';

import { EscapeHtmlPipe } from './keep-html.pipe';
import { DomSanitizerStub } from '../dom-sanitizer.stub';

describe('EscapeHtmlPipe', () => {
  let domSanitizer: DomSanitizer;
  let pipe: EscapeHtmlPipe;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule],
      providers: [{ provide: DomSanitizer, useValue: new DomSanitizerStub() }]
    });
    domSanitizer = TestBed.get(DomSanitizer);
  }));

  it('create an instance', () => {
    pipe = new EscapeHtmlPipe(domSanitizer);
    expect(pipe).toBeTruthy();
  });

  it('should bypass security and trust the given value to be safe HTML', () => {
    pipe = new EscapeHtmlPipe(domSanitizer);
    const safeContent = pipe.transform("<script>alert('Should be trusted!')</script>");
    const sanitized_str = domSanitizer.sanitize(SecurityContext.HTML, safeContent);
    expect(sanitized_str).toBe("<script>alert('Should be trusted!')</script>");
  });
});

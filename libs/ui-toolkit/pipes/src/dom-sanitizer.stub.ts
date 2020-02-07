export class DomSanitizerStub {
  public sanitize = (_, data) => data;
  public bypassSecurityTrustHtml = data => data;
}

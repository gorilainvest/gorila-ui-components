import { Component, Input } from '@angular/core';

@Component({
  selector: 'gor-enhanced-header',
  templateUrl: './enhanced-header.component.html',
  styleUrls: ['./enhanced-header.component.scss']
})
export class EnhancedHeaderComponent {

  @Input() public title = '';
  @Input() public highlight = '';
  @Input() public description = '';
  @Input() public description2 = '';

}

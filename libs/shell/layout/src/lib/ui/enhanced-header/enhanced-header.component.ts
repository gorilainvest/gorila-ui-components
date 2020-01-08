import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'gorilainvest-enhanced-header',
  templateUrl: './enhanced-header.component.html',
  styleUrls: ['./enhanced-header.component.scss']
})
export class EnhancedHeaderComponent {
  public title = new FormControl('Enhanced');
  public highlight = new FormControl('Header');
  public description = new FormControl('Main description.');
  public description2 = new FormControl('Secondary description.');
  public tooltipText = new FormControl('Gorila Tooltip');
}


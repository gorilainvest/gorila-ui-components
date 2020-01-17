import { storiesOf, moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { SlideToggleComponent } from './slide-toggle.component';
import { SlideToggleGroupComponent } from './slide-toggle-group.component';
import { ToggleData } from './slide-toggle.model';
import { text, withKnobs, boolean } from '@storybook/addon-knobs';

storiesOf('slide-toggle', module)
  .addDecorator(
    moduleMetadata({
        imports: [CommonModule],
        declarations: [SlideToggleComponent, SlideToggleGroupComponent],
 })
)
.addDecorator(withKnobs)
.add(
    'three different cases about slide-toggle',
    () => {
        const data: Array<ToggleData> = [{
            cod: "1",
            checked: true,
            title: "activate color",
            color: "#10c0c6",
            uncheckedColor: ""
        },
        {
            cod: "2",
            checked: true,
            title: "both colors",
            color: "#10c0c6",
            uncheckedColor: "#456888"
        },
        {
        cod: "3",
        checked: false,
        title: "UNACTIVATE COLOR",
        color: "",
        uncheckedColor: "#456888"
        }
    ];

        const labels = ['title'];

        return {

        template: `
            <gor-slide-toggle-group
                [data]='${JSON.stringify(data)}'
                [labels]='${JSON.stringify(labels)}'
            >
            </gor-slide-toggle-group>
      `
        }}
    )

.add('editable', () => ({
    props: {
        cod: text("cod","1"),
        checked: boolean("checked", true),
        title: text("title", "slide-toggle"),
        color: text("color", "#10c0c6"),
        uncheckedColor: text("uncheckedColor", "#456888"),
    },
    template: `
       <gor-slide-toggle
       [id]="cod"
       [checked]="checked"
       [color]="color"
       [uncheckedColor]="uncheckedColor"
       [title]="title"
       >
        </gor-slide-toggle>
        `
    }));
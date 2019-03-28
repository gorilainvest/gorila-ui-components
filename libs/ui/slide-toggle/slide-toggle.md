Wrapper for angular material slide toggle, also contains a group of toggles.

### Slide toggle color and text

By default, the toggle doesn't have default colors and text, so should be provided by consumer, e.g.:

```html
<slide-toggle color='#babaca' title='toggle me'>
<slide-toggle>
```

### Programatically control the slide toggle

Checked and disabled state can be modified by passing inputs for the toggle:

```html
<slide-toggle [checked]="true" [disabled]="false">
<slide-toggle>
```

### Slide toggle groups

When working with toggle groups, an array of the given type is needed:

```typescript
const toggleData: {
  cod: string;
  checked: boolean;
  title: string;
  color?: string;
}[] = [/* 0 or more objects*/];
```

That will be passed to toggle group using the `data` input.

```html
<slide-toggle-group [data]="toggleData" /* others inputs */>
</slide-toggle-group>
```

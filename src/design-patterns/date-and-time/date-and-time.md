```imports
import Paragraph from 'bw-axiom/components/typography/Paragraph';
import Strong from 'bw-axiom/components/typography/Strong';
import { shortDate, shortDateWithTime } from './data-and-time';
import { mediumDate, mediumDateWithTime } from './data-and-time';
import { longDate, longDateWithTime, longDateWithTimezone } from './data-and-time';
```

# Short Date

```jsx
<Paragraph snippetSkip>
  <Strong>Without time: </Strong>{ shortDate(new Date) }
</Paragraph>
```

```jsx
<Paragraph snippetSkip>
  <Strong>Without time: </Strong>{ shortDateWithTime(new Date) }
</Paragraph>
```

```js
shortDate(new Date);
shortDateWithTime(new Date);
```


# Medium date

```jsx
<Paragraph snippetSkip>
  <Strong>Without time: </Strong>{ mediumDate(new Date) }
</Paragraph>
```

```jsx
<Paragraph snippetSkip>
  <Strong>Without time: </Strong>{ mediumDateWithTime(new Date) }
</Paragraph>
```

```js
mediumDate(new Date);
mediumDateWithTime(new Date);
```


# Long date

```jsx
<Paragraph snippetSkip>
  <Strong>Without time: </Strong>{ longDate(new Date) }
</Paragraph>
```

```jsx
<Paragraph snippetSkip>
  <Strong>With time: </Strong>{ longDateWithTime(new Date) }
</Paragraph>
```

```jsx
<Paragraph snippetSkip>
  <Strong>With timezone: </Strong>{ longDateWithTimezone(new Date) }
</Paragraph>
```

```js
longDate(new Date);
longDateWithTime(new Date);
longDateWithTimezone(new Date);
```

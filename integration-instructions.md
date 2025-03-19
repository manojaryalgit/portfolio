
# Neon Cursor Trail Effect - Integration Instructions

## Quick Setup

To add the neon cursor trail to any website:

1. Copy the three files (`neon-cursor.css`, `neon-cursor.js`, and optionally `neon-cursor.html` for reference)
2. Add the CSS to your website by including this in your HTML `<head>`:
   ```html
   <link rel="stylesheet" href="path/to/neon-cursor.css">
   ```
3. Add the JavaScript to your website by including this before the closing `</body>` tag:
   ```html
   <script src="path/to/neon-cursor.js"></script>
   ```

## Customization Options

### Modifying Colors

Edit the CSS file to change gradient colors:

```css
.cursor-dot, .cursor-trail {
  /* Change these colors to match your website theme */
  background: linear-gradient(45deg, #YOUR_COLOR1, #YOUR_COLOR2, #YOUR_COLOR3);
}
```

### Changing Trail Length

Edit the JavaScript file to adjust the trail length:

```javascript
// Near the top of the JS file
const trailLength = 20; // Change this number (larger = longer trail)
```

### Removing the Effect

If you need to remove the effect programmatically (such as on specific pages):

```javascript
// Call this function to remove the cursor effect
window.removeNeonCursor();
```

## Troubleshooting

- If the effect doesn't appear, check your browser console for errors
- Make sure the z-index in CSS is high enough to appear above your content
- Test in different browsers as CSS filters and effects may vary

## Browser Compatibility

This effect works best in modern browsers (Chrome, Firefox, Safari, Edge).
Some older browsers may not support CSS filters or animations used in this effect.

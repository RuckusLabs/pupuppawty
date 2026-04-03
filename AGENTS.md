# Agent Development Guidelines

## Project Overview
This is a static HTML/CSS/JavaScript website for "The Pup - Up Pawty" business. The site is primarily built with vanilla JavaScript, HTML, and CSS without any build tools or frameworks.

## Build/Lint/Test Commands

### Build Commands
- `npm run build` - Not applicable (static site)
- `npm run dev` - Not applicable (no development server)
- `npm run lint` - Not applicable (no linter configured)

### Test Commands
- `npm test` - No automated tests currently exist
- Run a single test: Not applicable

## Code Style Guidelines

### Imports
- Modern JavaScript ES6+ syntax with `const` and `let`
- No module imports or require statements (vanilla JS)
- All scripts included via `<script>` tags in HTML

### Formatting
- Indentation: 2 spaces
- Braces on the same line as the statement they belong to
- No semicolons (following common JavaScript conventions)
- Consistent spacing around operators and after commas
- Line breaks after opening braces for multi-line statements
- Arrow functions preferred over function expressions
- Optional chaining (`?.`) used for safe DOM access

### Naming Conventions
- camelCase for variables and functions
- PascalCase for constructors (none in this codebase)
- ALL_CAPS for constants
- Descriptive names that clearly indicate purpose
- Short, meaningful variable names when appropriate

### Error Handling
- Async operations wrapped in try-catch blocks
- Graceful degradation with fallback behavior
- Null/undefined checks using optional chaining
- Error messages displayed through alerts for user feedback
- Form validation implemented before submission

### Types
- JavaScript (no static typing)
- All variables declared with `const` or `let`
- No explicit type annotations
- Type checking done through runtime behavior and comments

### Documentation
- Comments provided for complex logic
- Function comments in JSDoc style for clarity
- Inline comments explaining unusual patterns or behaviors 
- Clear documentation of DOM manipulation patterns

## Existing Configuration Files
No eslint, prettier, or other linter configuration files found.

## Cursor Rules (if any)
No `.cursor/rules/` directory or `.cursorrules` files found.

## Copilot Instructions (if any)
No `.github/copilot-instructions.md` file found.

## Code Patterns

### DOM Manipulation
- Use querySelector and querySelectorAll for element selection
- Check if elements exist before using them (null safety)
- Prefer `classList.add/remove/toggle` for CSS classes  
- Event listeners attached to elements with proper cleanup patterns

### JavaScript Best Practices
- Use modern ES6+ features where applicable (arrow functions, destructuring, template literals)
- Avoid global variables - encapsulate logic in functions
- Use concise syntax where appropriate
- Prefer array methods like `forEach` for iteration
- Defer script execution to ensure DOM is ready

### Accessibility
- Implement proper aria attributes on interactive elements
- Semantic HTML structure used where possible
- Focus management patterns implemented
- Screen reader friendly attributes included

## Browser Compatibility
- Vanilla JavaScript with no modern framework dependencies
- No transpilation or polyfills needed
- Works in modern browsers with standard ES5+ support

## File Structure Guidelines
- All client-side logic kept in `js/main.js`
- Styles in `css/style.css`
- HTML files directly reference JavaScript and CSS resources
- No complex module system or build process

## Cleanup Suggestions

### HTML Improvements:
1. **Remove redundant meta tags**: Several meta tags are duplicated (e.g., og:url, twitter:url)
2. **Fix inconsistent URLs**: URL in meta tags like `content="https:/www.popuppawty.com/"` should be `https://www.popuppawty.com/`
3. **Simplify classnames**: Many complex class names could be simplified for readability
4. **Remove deprecated attributes**: Remove unnecessary xmlns attributes from HTML tags
5. **Optimize structured data**: Clean up meta tags that appear to be from Squarespace

### CSS Improvements:
1. **Reduce verbosity**: The CSS contains many repetitive patterns and redundant declarations
2. **Consolidate selectors**: Many similar style rules can be combined
3. **Remove unused CSS**: Significant amount of unused CSS found in the file
4. **Optimize vendor prefixes**: Some vendor prefixes could be simplified or removed
5. **Improve readability**: Format code with consistent indentation and spacing

### JavaScript Improvements:
1. **Refactor redundant code**: Similar functionality in openMenu/closeMenu functions can be combined
2. **Add comments**: More inline comments to explain the purpose of complex sections
3. **Use constants**: Define repeated values like `'header--menu-open'` as constants
4. **Improve error handling**: Add more specific error messages and logging

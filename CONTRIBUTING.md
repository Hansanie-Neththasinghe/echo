# Contributing to Developer Portfolio

Thank you for your interest in contributing! This document provides guidelines and instructions for contributing.

## Code of Conduct

- Be respectful and inclusive
- Focus on constructive feedback
- Help each other learn and grow

## How to Contribute

### Reporting Issues
1. Check if the issue already exists
2. Provide a clear description
3. Include steps to reproduce (if applicable)
4. Mention your environment (OS, browser, etc.)

### Submitting Pull Requests
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make small, focused commits
4. Run tests and linting: `npm run lint && npm run type-check`
5. Format code: `npm run format`
6. Push to your fork
7. Create a pull request with a clear description

## Code Style

- Follow ESLint configuration
- Use Prettier for formatting
- Write meaningful variable and function names
- Add comments for complex logic
- Keep components small and focused

## Component Guidelines

- Create reusable, single-responsibility components
- Use functional components with hooks
- Add prop validation and TypeScript types
- Include meaningful JSDoc comments
- Test components before submitting

## Git Conventions

- Use clear commit messages
- Commit related changes together
- Reference issues in commits: `Fix #123`
- Examples:
  - `feat: add new project card component`
  - `fix: correct spelling issues`
  - `docs: update README`
  - `style: format code with prettier`

## Development Workflow

1. Create a feature branch
2. Make changes
3. Test locally: `npm run dev`
4. Run linting: `npm run lint:fix`
5. Run type checking: `npm run type-check`
6. Commit and push
7. Create pull request

## Performance Considerations

- Keep component bundle sizes small
- Use code splitting for large components
- Optimize images and assets
- Avoid unnecessary re-renders
- Use lazy loading where appropriate

## Accessibility

- Ensure keyboard navigation works
- Add proper ARIA labels
- Maintain color contrast ratios
- Test with screen readers
- Follow WCAG 2.1 guidelines

## Testing

Write tests for:
- Critical user flows
- Complex utility functions
- Edge cases

## Questions?

Feel free to open an issue or discussion for questions.

Thank you for contributing! 🙏

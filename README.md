# NutriScan Frontend

Frontend prototype for the NutriScan BCA 7th-semester project.

## Current stack

- HTML
- CSS
- JavaScript
- No external frontend framework
- No backend yet

## Pages

- `index.html` — Sign in
- `register.html` — Create account
- `dashboard.html` — Main dashboard
- `history.html` — Food history
- `profile.html` — Profile and calorie goal
- `scan-result.html` — Food analysis result

## Run locally

Because this is plain HTML/CSS/JS, you can open `index.html` directly in a browser.

For VS Code, the easiest option is to install/use Live Server and open `index.html` with Live Server.

## Important

This is currently a frontend-only prototype.

The following are intentionally simulated:

- Login/register
- AI food recognition
- Nutrition values
- Calorie target
- Saving food history

They will later be connected to:

`HTML/CSS/JS → Flask → MobileNetV3 → USDA FoodData Central → MySQL`

Do not put API keys or passwords into this frontend repository.

# Ariana Scalzo's Portfolio Website

This project was made by strictly following along with Ariana's Figma Design. The design brief contained specific user experience and web design which made it quiet challenging.

To build this project I used ReactJS along with the latest React Router v6 which made it possible to create a multi-page website with nested and dynamic routes, and for the styling I used SCSS.
I also took advantage of the new hooks of React Router such as useNavigate and useHistory and the new Outlet component which made it possible to render a different layout of Navigation and Footer on the specific page without duplicating existing code.

For the animations I learnt to use Framer Motion, which I really loved, but also levaraged some CSS animations for an automatic image slideshow on the Portfolio page, and other basic CSS animations for buttons.

The contact form submission using emailJS and the validation made with the famous validator library from npm with some nice CSS styles for the user experience.

## Dependencies

  - react
  - react-dom
  - react-router-dom
  - react-icons
  - react-device-detect
  - react-image-gallery
  - react-intersection-observer
  - node-sass
  - framer-motion
  - emailjs-com
  - validator

### Bug report

After deployment, I came across multiple bugs on the website especially on IOS devices That's why I added a new npm library called 'react-device-detect' which I used to detect IOS devices and gave them a different styling.
The main problem was coming from an element which has a background-image css property, and when we set the background-attachment: fix, on IOS devices the background image expanded, this didn't appeared on chrome devtool, neither in Responsively App where I tested the different screens.
According to that, I changed the background-attachment: scroll. And voala! It worked :)

[Live Website](https://www.arianascalzo.com)
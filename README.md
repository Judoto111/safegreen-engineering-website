# Safegreen Engineering Website

A modern, responsive React website for Safegreen Engineering Ltd, a mechanical engineering company based in Nairobi, Kenya.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Modern UI**: Built with React, Tailwind CSS, and Framer Motion
- **Multiple Pages**: Home, About, Services, Projects, Contact, Login, Register
- **Interactive Elements**: Smooth animations, hover effects, and transitions
- **Contact Forms**: Functional contact and registration forms
- **Project Portfolio**: Showcase of completed engineering projects
- **Team Section**: Leadership team profiles
- **Testimonials**: Client reviews and feedback

## 🛠️ Technologies Used

- **React 18**: Frontend framework
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Router**: Navigation and routing
- **Lucide React**: Icon library
- **React Intersection Observer**: Scroll animations

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.js       # Navigation bar
│   ├── Footer.js       # Footer component
│   └── WhatsAppButton.js # WhatsApp contact button
├── pages/              # Page components
│   ├── Home.js         # Homepage
│   ├── About.js        # About page
│   ├── Services.js     # Services page
│   ├── Projects.js     # Projects portfolio
│   ├── Contact.js      # Contact page
│   ├── Login.js        # Login page
│   └── Register.js     # Registration page
├── App.js              # Main app component
└── index.js            # Entry point
```

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone [your-repository-url]
   cd safegreen-engineering-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📝 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (not recommended)

## 🎨 Customization

### Colors
The website uses a custom color scheme defined in `tailwind.config.js`:
- Primary: Blue tones
- Secondary: Gray tones
- Accent colors for highlights

### Content
- Update company information in respective page components
- Replace placeholder images with actual project photos
- Modify contact details in Contact.js and Navbar.js
- Update team member information in About.js

### Styling
- All styling is done with Tailwind CSS classes
- Custom animations using Framer Motion
- Responsive design with mobile-first approach

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory for any environment-specific variables:
```
REACT_APP_API_URL=your_api_url_here
REACT_APP_GOOGLE_ANALYTICS_ID=your_ga_id_here
```

## 📄 License

This project is proprietary software for Safegreen Engineering Ltd.

## 👥 Team

- **Developer**: [Your Name]
- **Client**: Safegreen Engineering Ltd
- **Contact**: info@SGE.CO.KE

## 📞 Support

For technical support or questions about this website:
- Email: info@SGE.CO.KE
- Phone: 0723 691 123
- Address: Victory House 2nd Floor, Suite No.6, Garden Estate Road Nairobi

---

**Last Updated**: December 2024
**Version**: 1.0.0 
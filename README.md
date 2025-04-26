# Climbing Ace

Climbing Ace is a comprehensive web and mobile application for rock climbers to discover routes, check weather and traffic conditions, and plan trips.

## 🧗‍♀️ Features

- **Route Discovery**: Browse and search for climbing routes and sites
- **Weather Insights**: Get real-time weather data for climbing locations
- **Traffic Updates**: Check current traffic conditions for approach planning
- **Trip Planning**: Save favorite routes and create climbing trip itineraries
- **User Profiles**: Manage your climbing preferences and history

## 🛠️ Tech Stack

### Frontend
- React (Web)
- React Native (Mobile - planned)
- React Router
- Mapbox for maps integration

### Backend
- Node.js with Express
- PostgreSQL with Sequelize ORM
- Authentication with JWT

### External APIs
- Weather API
- Traffic API
- Maps API

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn
- PostgreSQL

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/climbing-ace.git
   cd climbing-ace
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Set up environment variables
   Create a `.env` file in the backend directory (see `.env.example` for required variables)

4. Start the development servers
   ```
   # Start both frontend and backend
   npm run dev
   
   # Start only frontend
   npm run start:frontend
   
   # Start only backend
   npm run start:backend
   ```

## 📝 Project Structure

```
climbing-ace/
├── frontend/             # React frontend
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Page components
│   │   ├── assets/       # Static assets (images, fonts)
│   │   ├── hooks/        # Custom React hooks
│   │   ├── utils/        # Utility functions
│   │   └── context/      # React context providers
│   └── public/           # Public assets
│
├── backend/              # Node.js backend
│   ├── controllers/      # Request handlers
│   ├── models/           # Database models
│   ├── routes/           # API routes
│   ├── middleware/       # Express middleware
│   ├── config/           # Configuration files
│   └── utils/            # Utility functions
│
└── mobile/               # React Native mobile app (planned)
```

## 🔮 Future Enhancements

- Offline mode for mobile app
- Real-time trail condition updates
- Route recommendation engine
- Community reviews
- Partner matching for climbing trips

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. 
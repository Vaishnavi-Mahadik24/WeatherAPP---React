# Weather Widget App

A clean, simple, and responsive weather widget app built using React and Material UI. Users can search for any city and get real-time weather updates using data fetched from the OpenWeatherMap API.

# 1 .Tech Stack
  - React (with functional components and hooks)
  - Material UI (for UI components TextField, Button, Card, Typography etc.)
  - OpenWeatherMap API
  - CSS for minimal custom styling
  
# 2 .Features
  - City-based weather search
  - Shows:
      - City name and icon
      - Temperature (°C)
      - Humidity
      - Min and Max Temperature
      - Weather description and "feels like" temperature
      - Weather condition (e.g. Sunny, Cloudy)
      - Weather icon
  - Built using Material UI components
  - Handles loading and error states

# 3. How It Works
  - User enters a city name in the SearchBox.
  - App sends a request to the OpenWeatherMap API.
  - Response is received and passed to the InfoBox component.
  - InfoBox displays weather in a Material UI Card with Typography.

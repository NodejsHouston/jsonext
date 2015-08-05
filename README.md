# jsonext

#Testing with your own Nest
- Navigate to routes/index.js
- Update var nestApi = new NestApi('Username', 'Password'); with your information
- Run npm start from the working directory
- Navigate to localhost:3000/api/nest/getTemperature and the current temp will be output in your console

# Roadmap
Create Node.js solution for managing and interacting with sensor data from a web interface. Our first sensor interaction is with a Nest thermostat.

# Initial tasks
- Create Node.js host with express generator
- Write RESTful API in Node.js to accept Nest changes from web UI
- Research Existing/Create Nest API module
- Build web UI to control Nest thermostat
- Store historical record in database (?)
- Chart averages and historical information in web UI (?)

# Long(er) term tasks
- Write modules for lights, TVs, accelerometers, etc.
- Port web functionality to home automation controller
- ??

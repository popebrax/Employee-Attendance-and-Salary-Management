# Employee-Attendance-and-Salary-Management
This is an Employee Salary and Management app i created for my Final Year Project, Computer Science .

To run the following app,

Clone the repository and cd into the project folder.

Do 'npx expo install' at the root folder

Navigate to the api folder and do 'npm install'

Once all dependencies are installed you need to start 2 terminals, one from the root folder and another from the api folder.

In the root folder do 'npx expo start' and with that you can run an android emulator or if you prefer you can use the expo go app on your phone. PLEASE NOTE: When using the expo go app, you need to connect your pc via a hotspot to your phone, then run ifconfig on terminal and replace 'localhost' with the the ip address in the following '.js' files: 1. /api/index.js 2. /app/(home)/(Replace local host with the ip address in all the files within this directory)

Then you need to create a mongodb account if you lack one, choose the free version, create a cluster then a database, in the connect section choose 'connect vscode' and paste the link in the /api/index.js under [mongoose .connect("mongodb+srv://:.dgyyr9a.mongodb.net/"]

Then create a new terminal and cd into api folder then do 'npm start'

With this everything should run ok.

My portfolio is https://njdaka.github.io/, if you want to link up for a project, reach out

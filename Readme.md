# Resource Allocation Tracker

TBD

## Installing

### SPA Configuration

 #### Install Node Packages

 From the shell, run **_npm install_** inside the cloned folder,

 ```shell
 >cd ResourceAllocationTracker
 ResourceAllocationTracker>npm install
 ```

 #### Build

 From the shell, run **_npm run build_** to compile the UI Components

 ```
 ResourceAllocationTracker>npm run build
 ```

 The build process will be in continous mode. After running the above command leave the terminal for continous build to happen.

 #### Faster UI Development

 For faster UI development, it is good to have the webpack's hot reload configuration

 ```
 ResourceAllocationTracker>npm run uiapp
 ```

 go to localhost:8081


 ### Controller

 We will need a console to start our controller.

 ```
 >cd ResourceAllocationTracker
 ResourceAllocationTracker>sbt run
 ```

 From you host machine, you can browse localhost::8080. You can see the port number in the log printed by the above command.

 When run controller, there is no need for hot reloading the SPA. You should be able to access the page directly from localhost:8080. Use hot reloading, when only developing UI Components.

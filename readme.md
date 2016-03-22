
ON FIRST ISNTALL, RUN "npm install" from the current(project) folder in order to install the dependencies

Project structure
===============================================================================
start.bat - file to run the gulp task, which starts the web server and opens the browser
package.json - the packages, installed with npm
index.html - the main page of the web application
gulpfile.js - the file, where is the gulp task for starting the web server

node_modules - the directory, where npm installs resides
lib - the directory, where the js libraries resides (every downloaded library should be in its own directory)
app - the directory where the angular application resides
 +-- controllers - the angular controllers. They should be in own folders, depending the business domain
 +-  css - the css styles
 +-  fonts - the necessary fonts
 +- images - the images, necessary for the application
 +- services - the angular services. They should be in own folders, depending the business domain
 +- templates - the view templates, which contains the html shown into the angular views (ui-view)
 +- app.js - the file where are the Angular dependencies, necessary for the application
 +- routes.js - the routes, necessary for the application navigation are described here. For more information see the ui.router documentation (https://github.com/angular-ui/ui-router)

How to add new content:
===============================================================================
To add new content you need to:
1. Create the view into app/templates/{business_domain}
2. Create the controller, attached to the view(optional). It should be created in app/controllers/{business_domain} and should follow the structure from the other controllers (IIFE js pattern, controllerAs syntax )
3. Add the controller reference to index.html
4. Attach the controller to the view (again using controllerAs syntax)

Useful links:
===============================================================================
https://github.com/johnpapa/angular-styleguide
http://www.pluralsight.com/courses/angularjs-line-of-business-applications

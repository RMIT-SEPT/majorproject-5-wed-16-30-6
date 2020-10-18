# Group: 5.WED-16.30-6 

# Members 
* VERDOUW, Midori (s3575912) 
* PHAM, Van (s3788106) 
* TJIONG, Julian (s3786866) 
* CHEONG, Hon Khuin Jonathan (s3642842) 
* SONG, Jason (s3744335) 

# Records 
* GitHub Repository: https://github.com/RMIT-SEPT/majorproject-5-wed-16-30-6 
* Workspace: https://trello.com/b/vUQwlaU7/sept-project 
* CircleCI pipeline: https://app.circleci.com/pipelines/github/RMIT-SEPT/majorproject-5-wed-16-30-6 
* MS Teams: https://teams.microsoft.com/_?tenantId=d1323671-cdbe-4417-b4d4-bdb24b51316b#/school/conversations/General?threadId=19:2f2d4d49f9eb41cbb2c509f309746769@thread.tacv2&ctx=channel 
* App URL (AWS): http://18.212.25.80:1337/ 

# Project Structure documentation 
## ChatLogs
* Chatlogs prior to meetings being held on teams - were previously held over Disccord

## Definition of Done
* All our DoDs are attached to the user stories on Trello. Please refer to them for our DoD per user story

## Milestone1_US_AccTests
* All user stories and Acceptance Tests
## Sprint Artifacts
* All Sprint Planning and Retro documentation, broken down into each sprint
## Test Reports
* All test reports
## Meeting Minutes
* All meeting minutes located here

# Release Branches
* We have two release branches for milestone 3: `release/milestone3` and `release/milestone3_deploy`.
* These are identical functionality-wise.
* Since the `release/milestone3_deploy` branch is used for running with Docker and MySQL for deployment, whereas `release/milestone3` branch is used with H2 database only to run locally, the test data format (in `BackEnd/src/main/resources/data.sql`) is different.
* In the `release/milestone3_deploy` branch, all the back end unit tests are commented out due to an issue in the Docker image caused by failed unit tests. 


# How to Build without Docker (localhost)
1. Ensure you are on either `release/milestone3`, master or development branch
2. Run back end program by running `/BackEnd/src/main/java/sept/project/backend/BackendApplication.java`
3. Run front end program by `npm start` command on /FrontEnd directory. You may need to run 'npm install' command prior
4. Access `http://localhost:3000/home`, which should display the Home page of the app
5. Access `http://localhost:8080/h2-console` for H2 database

# How to Build and Deploy Using Docker
1. Ensure you are on `release/milestone3_deploy` branch.
2. On BackEnd, create .jar file using Maven package.
3. Create docker images for front end and back end respectively by the commands:
* `docker build -f Dockerfile.prod -t frontend:prod .`
* `docker build -t backend .`
4. Ensure the application runs locally by `docker-compose up` command
5. Install AWS CLI on your machine
6. On AWS ECR console, create a repository
7. Authenticate Docker to the created ECR registry with `aws ecr get-login-password` command
8. Tag the Docker images created in step 3 with the registry by the command:
* `docker tag <registry:tag> <aws_account_id.dkr.ecr.region>.amazonaws.com/<AWS ECR registry name:tag>`
* Note: Replace the brackets according to your configuration
9. Push the images to the AWS ECR registry by the command:
* `docker push aws_account_id.dkr.ecr.region.amazonaws.com/<AWS ECR registry name:tag>`
10. In the AWS ECS console create a new cluster which uses the ECS optimised linux AMI (t2.micro)
* Note: The front end has hardcoded URLs which need to be updated to point at this new EC2 instance created with the cluster if it doesn't match
11. Create a new Task Definition and utilise the `/docs/Deployment/aws_task_definition.json` as the JSON based configuration
* Note: you will need to modify the image references to match your own ECR registry information
12. Run new task from the cluster you created earlier and the deployment should complete.
13. Access `http://<ec2 instance address>:1337/home`to use the deployed application

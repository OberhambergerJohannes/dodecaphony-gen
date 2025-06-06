# Dodecaphony Generator Application

This repository contains the necessary information to run the Dodecaphony Generator application using Docker. Further down, a manual setup option is given for the start of the development environment.

### Production Setup with DOCKER

You'll need **Docker** installed on your system.
* [Install Docker](https://docs.docker.com/get-docker/)

### Running the Application

To run the Dodecaphony Generator application, you need to start both the frontend and backend services.

1.  **Start the Backend Service:**
    Open your terminal or command prompt and run the following command:

    ```bash
    sudo docker run -p 8080:8080 oberhamberger/dodecaphony-gen-backend:latest
    ```
    This command will pull the latest backend Docker image if you don't have it already and run it, mapping port `8080` of your host to port `8080` inside the container.

2.  **Start the Frontend Service:**
    Open a **new** terminal or command prompt (keep the backend service running in the first one) and run the following command:

    ```bash
    sudo docker run -p 3000:80 oberhamberger/dodecaphony-gen-frontend:latest
    ```
    This command will pull the latest frontend Docker image if you don't have it and run it, mapping port `3000` of your host to port `80` inside the container.

---

## Accessing the Application

Once both containers are running, you can access the Dodecaphony Generator application through your web browser:

* **Frontend:** Navigate to `http://localhost:3000`

---

## Stopping the Application

To stop the running Docker containers, you can use the `docker stop` command followed by the container ID or name.

1.  **List running containers:**
    ```bash
    sudo docker ps
    ```
    This will show you a list of your running containers, including their IDs and names.

2.  **Stop containers:**
    Replace `<container_id_or_name>` with the actual ID or name of the frontend and backend containers.

    ```bash
    sudo docker stop <frontend_container_id_or_name>
    sudo docker stop <backend_container_id_or_name>
    ```
    Alternatively, you can stop all running containers:
    ```bash
    sudo docker stop $(sudo docker ps -q)
    ```

---

## Troubleshooting

* **Port Conflicts:** If you encounter errors related to ports already being in use, ensure no other applications are using ports `3000` or `8080` on your host machine.
* **Docker Image Not Found:** If `docker run` fails because it can't find the image, double-check your internet connection as Docker needs to download the images from Docker Hub.
* **Container Exited Immediately:** If a container starts and then immediately exits, you can inspect its logs for errors:
    ```bash
    sudo docker logs <container_id_or_name>
    ```

---
## Development environment (without Docker)
### Frontend
For the start of the development env for the frontend:

1. switch to the frontend/dodecaphony-ui folder
2. npm install
3. npm run dev

### Backend
For the start of the development env for the backend:

1. switch to the backend/dodecaphony-backend folder
2. mvn spring-boot:run
3. API docs can be found at http://localhost:8080/swagger-ui/index.html

# Use official OpenJDK image
FROM openjdk:24-jdk-slim

# Set working directory in container
WORKDIR /app

# Copy the jar file into container
COPY target/JobApplicationPortalUseRESTapi1.jar app.jar

# Expose port 8080 (default for Spring Boot)
EXPOSE 8080

# Run the jar file
ENTRYPOINT ["java", "-jar", "app.jar"]

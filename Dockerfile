FROM openjdk:17-slim

# Set working directory
WORKDIR /app

# Copy the application JAR file
COPY . /HelloApp.java

# Expose port for the application (adjust if needed)
EXPOSE 9080

# Command to run the application
CMD ["java",  "HelloApp.java"]

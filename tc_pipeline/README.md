# 🛠️ CI/CD Pipelines for Tax Calculator

This repository contains the pipeline configuration files for automating the build, test, and deployment processes of the **Tax Calculator** project. These pipelines are designed using **Tekton** and other CI/CD tools to streamline the development lifecycle. Below is an overview of the different pipeline and YAML files.

## 📁 Files in This Repository

- **pipeline.yaml**: Defines the overall pipeline that includes steps for building, testing, and deploying the application.
- **tasks.yaml**: Contains reusable tasks that define individual steps in the pipeline, like testing and building the project.
- **run.yaml**: Defines how the pipeline should be executed, including the configuration for each step.
- **pvc.yaml**: Contains configuration for **Persistent Volume Claims (PVC)** used for storing data between pipeline runs.
- **LICENSE**: License information for the repository.
- **README.md**: This file you're reading right now. 😄

## 🛠️ Technologies Used

- **Tekton Pipelines**: A Kubernetes-native CI/CD framework for building and deploying applications.
- **YAML**: Used for defining pipeline configurations and Kubernetes resources.
- **GitHub Actions**: For automating the deployment process to GitHub Pages or other environments.

## 🏗️ Pipeline Workflow

1. **Clone Repository**: First, the code is pulled from the GitHub repository.
2. **Build Project**: The project is built using the provided Dockerfile or other build tools.
3. **Test Project**: Automated tests (Jasmine) are run to ensure the project functions correctly.
4. **Deploy**: After successful testing, the application is deployed to the desired environment (e.g., Kubernetes, GitHub Pages).

## 📝 How the Pipeline Works

### 1. **pipeline.yaml** 📄

The `pipeline.yaml` file defines the entire pipeline, which consists of multiple steps. Each step can execute tasks defined in `tasks.yaml`. These tasks include actions like **cloning the repository**, **installing dependencies**, **running tests**, and **building the application**. 

### 2. **tasks.yaml** 🧑‍💻

The `tasks.yaml` file defines individual tasks that are reused throughout the pipeline. These tasks could include:

- **Cloning the Repo**: Pulling the latest code from GitHub.
- **Running Tests**: Running unit tests using Jasmine or other frameworks.
- **Building the App**: Using Docker or another build system to build the app.

### 3. **run.yaml** 🔁

The `run.yaml` file specifies how to run the pipeline. It defines which pipeline to execute and how to configure it. It also ensures that each step is executed in sequence with the correct parameters.

### 4. **pvc.yaml** 📦

This file defines a **Persistent Volume Claim (PVC)** that is used for storing data persistently across pipeline runs. The PVC ensures that data like logs or build artifacts are not lost between different pipeline executions.

## 🚀 How to Use These Pipelines

To set up the pipeline on your own Kubernetes cluster, follow these steps:

1. **Install Tekton Pipelines**: Make sure you have Tekton installed in your Kubernetes cluster.
   ```bash
   kubectl apply -f https://storage.googleapis.com/tekton-releases/pipeline/latest/release.yaml
   ```

2. **Apply the YAML Files**:
   - Apply the **pipeline**:
     ```bash
     kubectl apply -f pipeline.yaml
     ```
   - Apply the **tasks**:
     ```bash
     kubectl apply -f tasks.yaml
     ```
   - Apply the **run** configuration:
     ```bash
     kubectl apply -f run.yaml
     ```

3. **Monitor the Pipeline**: After triggering the pipeline, you can monitor its progress and logs via the Tekton Dashboard or using `kubectl` commands.

## 🔧 Customizing the Pipeline

If you want to customize the pipeline for your project, consider:

- Changing the **repository URL** in the pipeline.
- Updating the **test commands** to use different test frameworks.
- Modifying the **build and deploy steps** to suit your needs (e.g., deploying to a different environment).

## 💡 Contributing

Feel free to fork this repository and submit a pull request to improve the pipeline. You can:

- Add new tasks to the pipeline.
- Improve the configuration for different environments.
- Add additional deployment options or steps.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📫 Contact

For any questions or suggestions, reach out to:

- **Email** - [hire.willie.conway@gmail.com](Mailto:hire.willie.conway@gmail.com) 📧
- **GitHub** - [https://github.com/Willie-Conway](https://github.com/Willie-Conway) 💼

---

Thanks for checking out the CI/CD Pipelines for Tax Calculator! 🚀


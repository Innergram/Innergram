# Innergram

**Innergram** is a privacy-focused Instagram data analysis tool that provides insights into your social media interactions, follower trends, and messaging patterns, all without relying on any external backend. Simply upload your Instagram data download file, and Innergram does the rest locally on your device.

## Features

- **Profile Insights**: View follower growth, inactive followers, and linked accounts for a deeper understanding of your social media presence.
- **Messaging Analysis**: Discover the top keywords and emojis in your interactions to gain insights into your social patterns and communication style.
- **Offline-First**: Innergram reads and analyzes data directly from a zip file, keeping everything private and local.
- **Intuitive UI**: Simple, user-friendly interface with interactive elements and theme switching.

## Getting Started

### Prerequisites

- **Node.js** (v16 or higher recommended)
- **pnpm** (or npm) for package management

### Installation

1. Clone the repository:

 ```bash
 git clone https://github.com/your-username/Innergram.git
 cd Innergram
 ```
   
2. Install the dependencies:
   
  ```bash
  pnpm install
  ```

3. Start the development server:
   
  ```bash
  pnpm run dev
  ```
This will start the application on localhost:3000.

## Usage

1. Download your Instagram data file:
  - Go to your Instagram account settings and request a data download.
  - Download the zip file containing your data.
2. Open Innergram and upload the zip file.
3. View the analysis

## Project Structure

- `src/components`: Contains reusable UI components and feature-specific components.
- `src/lib/fetchers`: Functions to read data directly from the uploaded file.
- `src/lib/algos`: Algorithms for analyzing messaging patterns, follower growth, and more.
- `src/routes`: Defines the app’s main routes, such as Home and Analysis.

## License

This project is licensed under the MIT License.

## Research Paper

https://www.taylorfrancis.com/chapters/edit/10.1201/9781003501244-54/innergram-social-media-analysis-platform-rout-khetan-ahkam-raghuvanshi-pargai-bhardwaj

## Acknowledgments

Kudos to Instagram for providing data export capabilities + the team members who spent their time in development of the project & the research-paper.

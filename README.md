## Welcome To Full stack Video streaming app



## Getting Started

First, run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
# Video Calling Full Stack Website

This repository contains the code for a full-stack video calling website built with Next.js, Tailwind CSS, TypeScript, Clerk for authentication, and integrating Stream and Shadcn for video calling functionality.

## Features

- **Video Calling**: Users can initiate and join video calls with other participants.
- **Authentication**: Secure user authentication and authorization with Clerk.
- **Responsive Design**: The website is built with a responsive layout using Tailwind CSS, ensuring optimal viewing experience across devices.
- **Real-Time Communication**: Leveraging Stream's powerful real-time communication capabilities for seamless video and audio streaming.
- **User Interface**: Clean and modern user interface built with Shadcn UI components.

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework for server-side rendering and static site generation.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for rapid UI development.
- [TypeScript](https://www.typescriptlang.org/) - Superset of JavaScript that adds optional static typing.
- [Clerk](https://clerk.com/) - User authentication and user management platform.
- [Stream](https://getstream.io/) - Scalable APIs for building real-time features like chat, video, and activity feeds.
- [Shadcn](https://shadcn.com/) - Open-source UI component library for building modern and accessible web applications.

## Getting Started

### Prerequisites

- Node.js (version specified in `.nvmrc`)
- npm (version specified in `package.json`)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/video-calling-website.git
```

2. Navigate to the project directory:

```bash
cd video-calling-website
```

3. Install dependencies:

```bash
npm install
```

4. Set up environment variables by creating a `.env.local` file in the project root and adding the required credentials for Clerk, Stream, and any other services you plan to use.

5. Run the development server:

```bash
npm run dev
```

The website should now be running at `http://localhost:3000`.

## Contributing

Contributions are welcome! Please follow the [contributing guidelines](.github/CONTRIBUTING.md) when submitting pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

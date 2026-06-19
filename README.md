# Aspira Innovation Website

This is the official enterprise website for **Aspira Innovation**, showcasing our digital solutions, portfolio, services, and client testimonials. The site features a modern, responsive design with smooth animations and an interactive contact form powered by a live database.

## 🚀 Tech Stack

*   **Frontend:** React (v19)
*   **Build Tool:** Vite
*   **Styling:** Tailwind CSS
*   **Animations:** Framer Motion
*   **Icons:** Lucide React
*   **Database (Contact Form):** Supabase

## 🛠️ Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1.  Clone the repository (if you haven't already):
    ```bash
    git clone https://github.com/Aspira-Innovation/aspira-website.git
    cd "Aspira Innovation Website"
    ```

2.  Install the project dependencies:
    ```bash
    npm install
    ```

### Environment Variables

This project uses Supabase to store submissions from the contact form. To run the project locally, you must create a `.env` file in the root directory and add your Supabase credentials:

1.  Create a file named `.env` in the root folder.
2.  Add the following lines (replace with your actual Supabase keys):
    ```env
    VITE_SUPABASE_URL=your_supabase_project_url
    VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
    ```

### Running Locally

To start the local development server with hot-module reloading:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

## 📦 Building for Production

To create an optimized production build, run:

```bash
npm run build
```

This will generate a `dist` folder containing the compiled HTML, CSS, and JavaScript files ready for deployment.

## 🌍 Deployment

This project is configured for seamless deployment on **Vercel**. 

1. Connect the GitHub repository to a new Vercel project.
2. Vercel will automatically detect the "Vite" framework preset.
3. Add the `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` to the Environment Variables section in the Vercel dashboard.
4. Deploy! Any future pushes to the `main` branch will automatically trigger a new build.

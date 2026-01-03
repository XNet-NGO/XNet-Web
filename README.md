# XNet Web

This is the official website for XNet, a nonprofit organization dedicated to bridging the digital divide through accessible AI solutions.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **AI Integration:** [Hugging Face Inference API](https://huggingface.co/docs/api-inference/index) (using `google/gemma-2-2b-it`)
- **Email:** Nodemailer (SMTP)
- **Deployment:** AWS EC2 (Debian) with PM2

## Features

- **AI Chatbot (Alfred):** An interactive AI assistant that answers questions about XNet's mission, values, and articles. Powered by Hugging Face Inference.
- **Contact Form:** A functional contact form that sends emails via SMTP.
- **Responsive Design:** Fully responsive UI built with Tailwind CSS.
- **Dynamic Content:** Articles and company info are structured for easy updates.

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/XNet-NGO/XNet-Web.git
    cd XNet-Web
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up environment variables:**

    Create a `.env` file in the root directory based on `.env.example`:

    ```env
    # SMTP Configuration (for Contact Form)
    SMTP_HOST=smtp.example.com
    SMTP_PORT=465
    SMTP_USER=your-email@example.com
    SMTP_PASS=your-password
    SMTP_SECURE=true

    # Hugging Face Token (for AI Chat)
    HF_TOKEN=hf_...
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

The application is deployed on an AWS EC2 instance.

To deploy updates:

1.  Push changes to the `main` branch.
2.  SSH into the server.
3.  Pull the latest changes.
4.  Build and restart the application:

    ```bash
    cd XNet-Web
    git pull
    npm install
    npm run build
    pm2 restart xnet-web
    ```


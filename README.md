# XNet Web

Official website for [XNet](https://xnet.ngo), a nonprofit organization dedicated to bridging the digital divide through accessible AI solutions.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, standalone output)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **AI Chatbot:** Alfred — powered by Qwen 3.5 2B via [AIOPE Gateway](https://github.com/XNet-NGO/aiope-gateway) (OpenAI-compatible API)
- **Deployment:** Docker container behind Caddy reverse proxy

## Features

- **AI Chatbot (Alfred):** Interactive assistant that answers questions about XNet's mission, values, and articles
- **Articles:** Dynamic content pages with SSG
- **Responsive Design:** Mobile-first UI built with Tailwind CSS

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:9002](http://localhost:9002).

## Deployment

One command:

```bash
npm run deploy
```

This builds a Docker image, replaces the running container, and health-checks the site.

### Environment

Create `.env.production` in the project root:

```env
GATEWAY_URL=http://localhost:8082
GATEWAY_KEY=<your-gateway-api-key>
GATEWAY_MODEL=llama/qwen3.5-2b-heretic
```

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (port 9002) |
| `npm run build` | Build for production |
| `npm run deploy` | Build container and deploy |
| `npm run reload` | Restart running container |

## Architecture

```
Internet → Caddy (:443 TLS) → xnet-web container (:3000)
                             → aiope-gateway (:8082) → llama.cpp (:8080)
```

## License

© XNet. All Rights Reserved.

# XNet Web

This is the official website for XNet, a nonprofit organization dedicated to bridging the digital divide through accessible AI solutions.

## Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/)
- **AI Integration:** [Hugging Face Inference API](https://huggingface.co/docs/api-inference/index) (using meta-llama/Llama-3.2-1B-Instruct)
- **Email:** Nodemailer (SMTP)
- **Deployment:** AWS EC2 (Ubuntu) with PM2 + Nginx

## Features

- **AI Chatbot (Alfred):** An interactive AI assistant that answers questions about XNet's mission, values, and articles. Powered by Hugging Face Inference.
- **Contact Form:** A functional contact form that sends emails via SMTP.
- **Responsive Design:** Fully responsive UI built with Tailwind CSS.
- **Dynamic Content:** Articles and company info are structured for easy updates.

## Getting Started

1.  **Clone the repository:**

    

2.  **Install dependencies:**

    

3.  **Set up environment variables:**

    Create a  file in the root directory:

    SHELL=/bin/bash
TERM_PROGRAM_VERSION=3.4
TMUX=/tmp/tmux-1000/default,1187065,0
HUGGING_FACE_API_KEY=<hugging-face-key>
NUMEXPR_NUM_THREADS=8
AGENT=1
PWD=/
LOGNAME=xnet-admin
XDG_SESSION_TYPE=tty
BEDROCK_MANTLE_API_KEY=<bedrock-mantle-key>
_=/usr/bin/env
OPENBLAS_NUM_THREADS=8
OPENCODE_PID=1188063
HOME=/home/xnet-admin
OPENCODE=1
LANG=C.UTF-8
LS_COLORS=rs=0:di=01;34:ln=01;36:mh=00:pi=40;33:so=01;35:do=01;35:bd=40;33;01:cd=40;33;01:or=40;31;01:mi=00:su=37;41:sg=30;43:ca=00:tw=30;42:ow=34;42:st=37;44:ex=01;32:*.tar=01;31:*.tgz=01;31:*.arc=01;31:*.arj=01;31:*.taz=01;31:*.lha=01;31:*.lz4=01;31:*.lzh=01;31:*.lzma=01;31:*.tlz=01;31:*.txz=01;31:*.tzo=01;31:*.t7z=01;31:*.zip=01;31:*.z=01;31:*.dz=01;31:*.gz=01;31:*.lrz=01;31:*.lz=01;31:*.lzo=01;31:*.xz=01;31:*.zst=01;31:*.tzst=01;31:*.bz2=01;31:*.bz=01;31:*.tbz=01;31:*.tbz2=01;31:*.tz=01;31:*.deb=01;31:*.rpm=01;31:*.jar=01;31:*.war=01;31:*.ear=01;31:*.sar=01;31:*.rar=01;31:*.alz=01;31:*.ace=01;31:*.zoo=01;31:*.cpio=01;31:*.7z=01;31:*.rz=01;31:*.cab=01;31:*.wim=01;31:*.swm=01;31:*.dwm=01;31:*.esd=01;31:*.avif=01;35:*.jpg=01;35:*.jpeg=01;35:*.mjpg=01;35:*.mjpeg=01;35:*.gif=01;35:*.bmp=01;35:*.pbm=01;35:*.pgm=01;35:*.ppm=01;35:*.tga=01;35:*.xbm=01;35:*.xpm=01;35:*.tif=01;35:*.tiff=01;35:*.png=01;35:*.svg=01;35:*.svgz=01;35:*.mng=01;35:*.pcx=01;35:*.mov=01;35:*.mpg=01;35:*.mpeg=01;35:*.m2v=01;35:*.mkv=01;35:*.webm=01;35:*.webp=01;35:*.ogm=01;35:*.mp4=01;35:*.m4v=01;35:*.mp4v=01;35:*.vob=01;35:*.qt=01;35:*.nuv=01;35:*.wmv=01;35:*.asf=01;35:*.rm=01;35:*.rmvb=01;35:*.flc=01;35:*.avi=01;35:*.fli=01;35:*.flv=01;35:*.gl=01;35:*.dl=01;35:*.xcf=01;35:*.xwd=01;35:*.yuv=01;35:*.cgm=01;35:*.emf=01;35:*.ogv=01;35:*.ogx=01;35:*.aac=00;36:*.au=00;36:*.flac=00;36:*.m4a=00;36:*.mid=00;36:*.midi=00;36:*.mka=00;36:*.mp3=00;36:*.mpc=00;36:*.ogg=00;36:*.ra=00;36:*.wav=00;36:*.oga=00;36:*.opus=00;36:*.spx=00;36:*.xspf=00;36:*~=00;90:*#=00;90:*.bak=00;90:*.crdownload=00;90:*.dpkg-dist=00;90:*.dpkg-new=00;90:*.dpkg-old=00;90:*.dpkg-tmp=00;90:*.old=00;90:*.orig=00;90:*.part=00;90:*.rej=00;90:*.rpmnew=00;90:*.rpmorig=00;90:*.rpmsave=00;90:*.swp=00;90:*.tmp=00;90:*.ucf-dist=00;90:*.ucf-new=00;90:*.ucf-old=00;90:
GOOGLE_AI_STUDIO_API_KEY=<google-ai-studio-key>
SSH_CONNECTION=192.168.0.66 43718 192.168.0.12 22
VECLIB_MAXIMUM_THREADS=8
COHERE_API_KEY=<cohere-key>
ZEN_API_KEY=<zen-key>
LESSCLOSE=/usr/bin/lesspipe %s %s
XDG_SESSION_CLASS=user
CLOUDFLARE_API_KEY=<cloudflare-key>
TERM=tmux-256color
LESSOPEN=| /usr/bin/lesspipe %s
USER=xnet-admin
TMUX_PANE=%0
CLINE_API_KEY=<cline-key>
SHLVL=3
XDG_SESSION_ID=7052
XDG_RUNTIME_DIR=/run/user/1000
SSH_CLIENT=192.168.0.66 43718 22
OMP_NUM_THREADS=8
XDG_DATA_DIRS=/usr/local/share:/usr/share:/var/lib/snapd/desktop
PATH=/home/xnet-admin/.local/bin:/home/xnet-admin/.opencode/bin:/usr/src/linux-headers-6.19.6-1-liquorix-amd64/tools/power/x86/x86_energy_perf_policy:/usr/src/linux-headers-6.19.6-1-liquorix-amd64/tools/power/x86/turbostat:/usr/src/linux-headers-6.19.6-1-liquorix-amd64/tools/power/cpupower:/usr/src/linux-headers-6.19.6-1-liquorix-amd64/tools/perf:/home/xnet-admin/.local/bin:/home/xnet-admin/.opencode/bin:/usr/src/linux-headers-6.19.6-1-liquorix-amd64/tools/power/x86/x86_energy_perf_policy:/usr/src/linux-headers-6.19.6-1-liquorix-amd64/tools/power/x86/turbostat:/usr/src/linux-headers-6.19.6-1-liquorix-amd64/tools/power/cpupower:/usr/src/linux-headers-6.19.6-1-liquorix-amd64/tools/perf:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin
GITHUB_MODELS_API_KEY=<github-pat-key>
DBUS_SESSION_BUS_ADDRESS=unix:path=/run/user/1000/bus
MKL_NUM_THREADS=8
SSH_TTY=/dev/pts/0
OPENROUTER_API_KEY=<openrouter-key>
TERM_PROGRAM=tmux

4.  **Run the development server:**

    

    Open [http://localhost:9002](http://localhost:9002) with your browser to see the result.

## Deployment

The application is deployed on AWS EC2 with PM2 and Nginx reverse proxy.

### Quick Deploy (from server)



### Manual Deploy



### Available Scripts

-  - Build and restart PM2
-  - Restart PM2 only
-  - Build Next.js app
-  - Run dev server

### PM2 Management



### SSL Certificates

Managed by Certbot. Renew with:


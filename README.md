# 🚩 CTF Registration System

A modern registration platform for Capture The Flag (CTF) competitions, built for the [Neuland CTF](https://ctf.neuland-ingolstadt.de) events.

## 🚀 Quick Start

### Prerequisites

- Node.js 22+
- pnpm
- Azure Communication Services account (for email functionality)
- hCaptcha account (for bot protection)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/neuland-ingolstadt/ctf-anmeldung.git
   cd ctf-anmeldung
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Configure the following environment variables:

   ```env
   # Azure Communication Services
   AZURE_COMMUNICATION_CONNECTION_STRING=your_azure_connection_string
   AZURE_EMAIL_FROM=noreply@yourdomain.com
   MAIL_TO=team@yourdomain.com
   
   # hCaptcha
   HCAPTCHA_SITEKEY=your_hcaptcha_site_key
   HCAPTCHA_SECRET=your_hcaptcha_secret
   
   # Application Settings
   ENABLE_REGISTRATION=true
   DISABLE_SITE=false
   JWT_SECRET=your_jwt_secret_key
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

4. **Start the development server**

   ```bash
   pnpm dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 Email Development

The project includes a dedicated email development server for testing email templates:

```bash
pnpm dev:email
```

This starts the React Email preview server at [http://localhost:3001](http://localhost:3001) where you can view and test all email templates.

## 🔧 Available Scripts

| Script | Description |
|--------|-------------|
| `pnpm dev` | Start development server with Turbopack |
| `pnpm dev:email` | Start email template development server |
| `pnpm build` | Build production bundle |
| `pnpm start` | Start production server |
| `pnpm lint` | Run TypeScript and Biome linting |
| `pnpm fmt` | Format code with Biome |
| `pnpm fmt:unsafe` | Format code with unsafe transformations |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use Biome for code formatting and linting
- Write meaningful commit messages
- Update documentation for new features
- Test email templates using the preview server

## 📄 License

This project is licensed under the  AGPL-3.0 license - see the [LICENSE](LICENSE) file for details.

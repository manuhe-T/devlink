# 🚀 DevLink - Developer Portfolio & Networking Platform

A modern platform where developers can create public profiles, showcase projects (auto-fetched from GitHub), write blogs, and connect with other developers.

![DevLink Preview](https://via.placeholder.com/800x400?text=DevLink+Preview)

## ✨ Features

- 🔐 **Authentication**

  - GitHub OAuth
  - Email/Password login
  - Protected routes

- 👤 **User Profiles**

  - Customizable bio and skills
  - Social media links
  - Profile image upload
  - Public profile pages

- 📦 **Project Showcase**

  - Auto-import from GitHub
  - Project details and stats
  - Custom project descriptions
  - Technology tags

- ✍️ **Developer Blog**

  - Markdown support
  - Code syntax highlighting
  - Comments system
  - SEO optimized

- 🎨 **Modern UI/UX**
  - Responsive design
  - Dark/Light mode
  - Modern components
  - Smooth animations

## 🛠️ Tech Stack

- **Frontend**

  - Next.js 14 (App Router)
  - TypeScript
  - TailwindCSS
  - ShadcnUI Components

- **Backend**

  - Next.js API Routes
  - MongoDB with Mongoose
  - NextAuth.js

- **APIs**

  - GitHub API v3
  - MongoDB Atlas

- **Deployment**
  - Vercel (Frontend & Backend)
  - MongoDB Atlas (Database)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- MongoDB Atlas account
- GitHub OAuth credentials

### Installation

1. Clone the repository

```bash
git clone https://github.com/manuhe-T/devlink.git
cd devlink
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables

```bash
cp .env.example .env.local
```

Fill in your environment variables in `.env.local`

4. Run the development server

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Environment Variables

Create a `.env.local` file with the following variables:

```env
MONGODB_URI=your_mongodb_uri
NEXTAUTH_SECRET=your_nextauth_secret
GITHUB_ID=your_github_client_id
GITHUB_SECRET=your_github_client_secret
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Manuhe T** - [manuhe-T](https://github.com/manuhe-T)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [MongoDB](https://www.mongodb.com/)
- [NextAuth.js](https://next-auth.js.org/)
- [ShadcnUI](https://ui.shadcn.com/)

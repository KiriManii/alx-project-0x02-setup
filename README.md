# ALX Project: 0x02 - Setup and Reusable Components

This project demonstrates setting up a Next.js application with TypeScript and building modular, reusable UI components. The structure follows best practices for scalability, maintainability, and collaboration.

## 📁 Repository

**GitHub Repo:** [alx-project-0x02-setup](https://github.com/KiriManii/alx-project-0x02-setup)

## 📦 Tech Stack

* Next.js
* TypeScript
* Tailwind CSS
* JSONPlaceholder (Mock API)

## 📌 Features Implemented

### 1. **Card Component**

* Created `Card` component in `components/common/Card.tsx`
* Accepts `title`, `description`, and `imageUrl` as props

### 2. **PostModal Component**

* File: `components/common/PostModal.tsx`
* Modal with input fields for post title and content
* Captures input and updates posts dynamically on `/home`

### 3. **Button Component**

* File: `components/common/Button.tsx`
* Accepts `size` and `shape` as props (`small`, `medium`, `large`, `rounded-sm`, etc.)
* Reused across pages (e.g., `/about`)

### 4. **Header Component with Navigation**

* File: `components/layout/Header.tsx`
* Navigation links to `/home`, `/about`, and `/posts`

### 5. **PostCard and UserCard Components**

* Fetch data from JSONPlaceholder API
* Display lists of posts and users
* Files:

  * `components/common/PostCard.tsx`
  * `components/common/UserCard.tsx`
  * Pages: `/posts`, `/users`

## 🧪 Data Fetching

* All data fetched using `getStaticProps` with `async/await`
* Fully compatible with Next.js static optimization

## 🧱 Directory Structure

```
components/
├── common/
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── PostCard.tsx
│   ├── PostModal.tsx
│   └── UserCard.tsx
├── layout/
│   └── Header.tsx
interfaces/
│   └── index.ts
pages/
├── about.tsx
├── home.tsx
├── index.tsx
├── posts.tsx
├── users.tsx
```

## ✅ Completed Tasks

* [x] Modal with dynamic update
* [x] Reusable UI components (Button, Card)
* [x] Navigation Header
* [x] Post and User list rendering
* [x] Interfaces abstracted into a single directory

---

Built with ❤️ by **Lewis Kimani** | GitHub: [KiriManii](https://github.com/KiriManii)

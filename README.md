📌 KeenKeeper — Keep Your Friendships Alive

A modern friendship tracking and relationship management web app built with Next.js, Tailwind CSS, and Recharts. KeenKeeper helps users stay connected by tracking interactions, visualizing friendship analytics, and reminding users to maintain meaningful relationships.

🚀 Live Demo

(Add your deployed link here)
https://keen-livid.vercel.app/

Responsive hero banner with call-to-action
Summary cards showing friendship insights
Grid layout displaying all friends from JSON data
Clickable friend cards navigating to details page
👤 Friend Details Page
Full profile view of each friend
Status-based UI indicators (overdue, on-track, due soon)
Tags, bio, email display
Action buttons (Snooze, Archive, Delete)
Relationship goal tracking
Quick Check-In system:
📞 Call
💬 Text
📹 Video
→ Automatically logs interactions + shows toast notifications
📜 Timeline Page
Chronological interaction history
Filter by interaction type (Call / Text / Video / Meetup)
Search and filter friends
Clean timeline UI with icons and formatted dates
📊 Stats / Analytics Page
Pie chart using Recharts
Breakdown of interaction types:
Call
Text
Video
Meetup
⚙️ Extra Features
Responsive design (mobile, tablet, desktop)
Loading state during data fetch
404 Not Found page
Toast notifications on interactions
Clean UI inspired by Figma design
🛠️ Tech Stack
⚛️ Next.js (App Router)
🎨 Tailwind CSS
📊 Recharts
🔔 React Hot Toast (or similar)
🧩 React Icons
📦 JSON-based mock database
📁 Project Structure
/app
  /home
  /timeline
  /stats
  /friends/[id]
/components
/public
  friends.json
📊 Data Model

Each friend is stored in friends.json:

{
  "id": 1,
  "name": "John Doe",
  "picture": "https://example.com/photo.jpg",
  "email": "john@example.com",
  "days_since_contact": 12,
  "status": "overdue",
  "tags": ["college", "close friend"],
  "bio": "Met in university. Love hiking together.",
  "goal": 14,
  "next_due_date": "2025-07-20",
  "interactions": [
    {
      "type": "call",
      "with": "Marcus Johnson",
      "date": "2026-03-19"
    }
  ]
}
🔔 Interaction System

When users click:

📞 Call
💬 Text
📹 Video

The system:

Adds a new timeline entry
Stores interaction with timestamp
Triggers toast notification
📱 Responsive Design
Mobile-first layout
4-column grid on desktop
Adaptive cards and timeline
Fully responsive navigation
🧪 Getting Started
1. Clone repo
git clone https://github.com/tanjiyaJuthi/keen-keeper-next-js
2. Install dependencies
npm install
3. Run project
npm run dev
🚀 Build & Deploy
npm run build
npm start

🏆 Challenge Features
📊 Interaction analytics (Recharts Pie Chart)
🔍 Timeline filtering by interaction type
📄 Professional README documentation
👨‍💻 Author

Your Name
📧 tanjiyajuthi@gmail.com

🌐 https://tanjiya.vercel.app/

📜 License

This project is created for educational purposes.
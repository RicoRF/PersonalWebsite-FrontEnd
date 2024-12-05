
# Frontend Project

This is the frontend of the project that fetches and displays data from the backend API. It uses **Next.js** with **React** to create dynamic web pages for LinkedIn and GitHub profiles.

---

## Features

- **LinkedIn Data Display**: Fetches and displays user data from the `/linkedin` endpoint of the backend.
- **GitHub Data Display**: Fetches and displays user repositories and profile data from the `/github` endpoint of the backend.
- **Reusable Components**: Structured codebase with reusable React components for LinkedIn and GitHub profiles.

---

## Prerequisites

Ensure you have the following installed on your system:

- **Node.js**: >= 16.x
- **npm** or **yarn**
- Backend running at `http://localhost:8000`

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/frontend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd frontend
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

---

## Configuration

1. Create a `.env.local` file in the root directory.
2. Add the following configuration to set up the backend API URLs:

   ```env
   NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
   ```

---

## Running the Project

To start the development server:

```bash
npm run dev
```

This will start the frontend on `http://localhost:3000`.

---

## Folder Structure

The project is structured as follows:

```
src/
├── app/
│   ├── components/
│   │   ├── GitHub/
│   │   │   ├── GitHubProfile.tsx
│   │   │   ├── GitHubRepo.tsx
│   │   ├── LinkedIn/
│   │   │   ├── LinkedInProfile.tsx
│   │   │   ├── Experience.tsx
│   ├── github/
│   │   ├── page.tsx
│   ├── linkedin/
│   │   ├── page.tsx
├── styles/
│   ├── globals.css
├── layout.tsx
├── page.tsx
```

---

## How to Use

1. **LinkedIn Page**: Navigate to `http://localhost:3000/linkedin` to view the LinkedIn profile and experience.
2. **GitHub Page**: Navigate to `http://localhost:3000/github` to view GitHub repositories and profile details.

---

## Troubleshooting

### CORS Error
Ensure the backend is configured to allow CORS requests. Add the following middleware to your FastAPI backend:

```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### Module Not Found
If you encounter a module not found error, verify that the `paths` in `tsconfig.json` are correctly configured:

```json
"baseUrl": ".",
"paths": {
  "@/*": ["src/app/*"]
}
```

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contributing

Feel free to fork the repository and submit a pull request with your changes.

---

## Contact

For questions or support, reach out at [your-email@example.com].

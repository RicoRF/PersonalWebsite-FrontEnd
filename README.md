
# Frontend Project

This is the frontend of a personal project designed to fetch and display data from a backend API. Built with **Next.js** and **React**, it showcases GitHub and LinkedIn profile information through dynamic, reusable components.

---

## Features

- **LinkedIn Data Display**: Fetches and displays user data (e.g., name, headline, experience) from the `/linkedin` backend endpoint.
- **GitHub Data Display**: Fetches and displays user profile details (e.g., bio, followers, following) and repositories from the `/github` backend endpoint.
- **Dynamic Components**: Includes modular React components for LinkedIn and GitHub pages to ensure reusability and scalability.
- **Responsive Design**: Provides a clean and user-friendly interface for both LinkedIn and GitHub data.

---

## Prerequisites

Ensure your environment includes the following:

- **Node.js**: >= 16.x
- **npm** or **yarn**
- Backend API running locally at `http://localhost:8000`

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/frontend.git
   ```

2. Change to the project directory:

   ```bash
   cd frontend
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

---

## Configuration

1. Create a `.env.local` file in the root directory.
2. Add the backend API base URL:

   ```env
   NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
   ```

---

## Running the Project

Start the development server:

```bash
npm run dev
```

This will start the frontend application at `http://localhost:3000`.

---

## Folder Structure

The project structure is organized for scalability and clarity:

```
src/
├── app/
│   ├── components/
│   │   ├── GitHub/
│   │   │   ├── GitHubProfile.tsx
│   │   │   ├── GitHubRepo.tsx
│   ├── LinkedIn/
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

### LinkedIn Page

1. Navigate to `http://localhost:3000/linkedin`.
2. View the LinkedIn profile data, including:
   - Name
   - Headline
   - Experience details

### GitHub Page

1. Navigate to `http://localhost:3000/github`.
2. View the GitHub profile information:
   - Bio
   - Followers and following count
   - Repositories with details like name, description, stars, forks, and primary language

---

## Troubleshooting

### CORS Issues

If you encounter a CORS error, ensure your backend is configured to allow requests from `http://localhost:3000`. For FastAPI, include the following middleware:

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

### Module Not Found Errors

Ensure your `tsconfig.json` is configured with the appropriate paths for absolute imports:

```json
"baseUrl": ".",
"paths": {
  "@/*": ["src/app/*"]
}
```

---

## Future Improvements

- Add loading skeletons for a better user experience while fetching data.
- Include a pagination feature for GitHub repositories.
- Optimize components for server-side rendering using Next.js APIs like `getServerSideProps`.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Contributing

Contributions are welcome! Fork the repository, make changes, and submit a pull request.

---

## Contact

For inquiries, feel free to reach out at [federico@federicoferrante.ca](mailto:federico@federicoferrante.ca).

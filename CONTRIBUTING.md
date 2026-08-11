# 🤝 Contributing Guidelines — MAPLE 2026

Thank you for contributing to **PHOTOBOOTHAPP-MAPLE2026** by CIMSA Unsoed!
This guide outlines the workflow and standards for maintaining code quality, aesthetic consistency, and security.

---

## 📜 Code of Conduct

- Be respectful and collaborative.
- Maintain data privacy for booth visitors and assessment respondents.
- Keep branding aligned with the MAPLE 2026 / CIMSA Unsoed zine scrapbook design language.

---

## 🛠️ Development Workflow

1. **Fork & Clone**:
   ```bash
   git clone https://github.com/alchemist4real/PHOTOBOOTHAPP-MAPLE2026.git
   cd PHOTOBOOTHAPP-MAPLE2026
   ```

2. **Create a Feature Branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Install Dependencies & Start Local Dev Server**:
   ```bash
   npm install
   npm run dev
   ```

4. **Verify Production Build**:
   Before committing, ensure there are zero build or syntax errors:
   ```bash
   npm run build
   ```

---

## 🎨 Asset & Sticker Submission Guidelines

When adding new sticker artwork to `public/stickers/`:

1. **Format**: PNG with 100% transparent alpha background (no dark borders, stray pixels, or background boxes).
2. **Resolution**: Optimized width between 300px - 800px.
3. **Manifest**: Update `public/stickers/packs_manifest.json` and the corresponding pack constants in `src/App.jsx`.

---

## 🔒 Security Standards

- **Zero Plaintext Credentials**: Never hardcode API keys, secrets, or plaintext organizer passwords in source code.
- **Environment Variables**: Use `import.meta.env.VITE_*` with safe fallback values.
- **Public Repo Hygiene**: Ensure `.gitignore` excludes `.env`, `node_modules`, `dist/`, logs, and temporary scratch files.

---

## 📤 Submitting a Pull Request (PR)

1. Ensure `npm run build` compiles with 0 errors.
2. Push your feature branch:
   ```bash
   git push origin feature/your-feature-name
   ```
3. Open a Pull Request on GitHub with a concise summary of changes.

Thank you for helping make MAPLE 2026 a success! 🍁

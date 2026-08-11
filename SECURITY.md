# 🛡️ Security Policy — MAPLE 2026

## Overview

**PHOTOBOOTHAPP-MAPLE2026** is designed with privacy and security as core principles for medical student assessment and booth operations.

---

## 🔒 Security Principles

1. **Anonymous Assessment Data**:
   - Identity entries (Name / Initials / Cohort / Faculty) are strictly optional and confidential.
   - Assessment scores are stored without tracking personal IP addresses or biometric data.

2. **Stealth Organizer Access**:
   - The Organizer Panel is protected by cryptographic SHA-256 hash authentication and brute-force lockout timers.
   - No plaintext passwords or hints are rendered in UI placeholders or JS bundles.

3. **Public Repository Safeguards**:
   - Secret keys and local environment files (`.env`, `.env.local`) are excluded via `.gitignore`.
   - Client-side Supabase Storage operations use anonymous row/bucket policies with `x-upsert` headers.

---

## 🚨 Reporting a Vulnerability

If you discover a security issue or credential exposure:

1. Please notify the CIMSA Unsoed tech team or open a confidential issue.
2. Do not publicly disclose vulnerabilities before a patch is pushed.

Thank you for helping keep our campus mental health platform secure!

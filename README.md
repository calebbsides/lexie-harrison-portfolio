# Alexandra Harrison — School Counseling Portfolio

A professional school counseling portfolio built as a static single-page application (SPA). Deployed to AWS S3 + CloudFront via GitHub Actions.

## Tech Stack

- **Frontend** — Vite + React + TypeScript + Material UI
- **Infrastructure** — AWS S3 + CloudFront (Terraform)
- **CI/CD** — GitHub Actions (OIDC authentication, no long-lived secrets)
- **Contact Form** — Formspree (no backend required)

## Project Structure

```
.
├── client/               # Vite + React TypeScript app
│   ├── src/
│   │   ├── components/   # NavBar, Footer, ContactForm, section components
│   │   ├── data/         # Static content data files (edit these to update content)
│   │   ├── test/         # Vitest + React Testing Library tests
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── theme.ts      # Custom MUI theme (colors, typography)
│   └── package.json
├── infra/                # Terraform — S3 + CloudFront + IAM
│   ├── main.tf
│   ├── variables.tf
│   ├── outputs.tf
│   ├── iam.tf
│   └── terraform.tfvars  # Your variable values (not committed if sensitive)
└── .github/
    └── workflows/
        └── deploy.yml    # CI/CD pipeline
```

## Local Development

**Prerequisites:** Node.js 20+, npm

```bash
npm install        # install all workspace dependencies
npm run dev        # start the dev server at http://localhost:5173
npm run build      # production build → client/dist/
npm run test       # run all tests
```

## Updating Content

All portfolio content lives in `client/src/data/`. Edit the relevant file and push to deploy:

| File | Section |
|---|---|
| `credentials.ts` | Certifications & Credentials |
| `projects.ts` | Projects & Presentations |
| `leadership.ts` | Leadership & Advocacy |
| `artifacts.ts` | Counseling Services Artifacts |
| `practicum.ts` | Practicum & Internship |
| `professionalDev.ts` | Professional Development |
| `contact.ts` | Contact info (email, service area) |

The Introduction, Resume, and Professional Development narrative are edited directly in their section components under `client/src/components/sections/`.

To update the headshot, replace `client/public/headshot.jpg`.

To update the resume PDF, replace `client/public/resume.pdf`.

## Contact Form Setup

1. Sign up at [formspree.io](https://formspree.io) and create a new form
2. Copy your form ID (e.g. `xpwzabcd`)
3. Replace `REPLACE_WITH_YOUR_FORM_ID` in `client/src/components/ContactForm.tsx`

## Deployment

### First-time setup

**1. Provision AWS infrastructure**

```bash
cd infra
terraform init
terraform apply
```

After apply, note the outputs:
```bash
terraform output
```

**2. Add GitHub secrets**

Go to `Settings → Secrets → Actions` in your GitHub repo and add:

| Secret | Value |
|---|---|
| `AWS_ROLE_ARN` | `github_actions_role_arn` from terraform output |
| `S3_BUCKET_NAME` | `s3_bucket_name` from terraform output |
| `CLOUDFRONT_DISTRIBUTION_ID` | `cloudfront_distribution_id` from terraform output |

**3. Push to main**

```bash
git push origin main
```

The GitHub Actions workflow builds the app and deploys it to S3 + CloudFront automatically. Your site will be live at the URL shown in `terraform output website_url`.

### Subsequent deploys

Just push to `main` — the workflow handles everything.

## Custom Domain (optional)

Set these in `infra/terraform.tfvars` and re-run `terraform apply`:

```hcl
custom_domain   = "portfolio.yourdomain.com"
route53_zone_id = "Z1234567890ABC"
```

## Theme Customization

Edit `client/src/theme.ts` to change colors and typography. The current palette uses deep teal (`#00695C`) as the primary color and warm amber (`#E65100`) as the secondary.

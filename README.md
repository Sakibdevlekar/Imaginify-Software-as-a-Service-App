<div align="center">
   <a href="https://imaginify-live.vercel.app" target="_blank">
      <img src="public/logo.png" alt="Logo">
    </a>
</div>

## Introduction 🌟

Imaginify software as a service app an AI image SaaS platform that excels in image processing capabilities, integrates a secure payment infrastructure, offers advanced image search functionalities, and supports multiple AI features, including image restoration, recoloring, object removal, generative filling, and background removal.

## Table of Contents 📋

1. [Introduction](#introduction)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Project Setup](#project-setup)
5. [Contributing](#contributing)
6. [Troubleshooting ](#troubleshooting)
7. [Deployment](#deployment)

## Features 

1. Authentication and Authorization: Secure user access with registration, login, and route protection.
2. Community Image Showcase: Explore user transformations with easy navigation using pagination.
3. Advanced Image Search: Find images by content or objects present inside the image quickly and accurately.
4. Image Restoration: Revive old or damaged images effortlessly.
5. Image Recoloring: Customize images by replacing objects with desired colors easily.
6. Image Generative Fill: Fill in missing areas of images seamlessly.
7. Object Removal: Clean up images by removing unwanted objects with precision.
8. Background Removal: Extract objects from backgrounds with ease.
9. Download Transformed Images: Save and share AI-transformed images conveniently.
10. Transformed Image Details: View details of transformations for each image.
11. Transformation Management: Control over deletion and updates of transformations.
12. Credits System: Earn or purchase credits for image transformations.
13. Profile Page: Access transformed images and credit information personally.
14. Credits Purchase: Securely buy credits via Stripe for uninterrupted use.
15. Responsive UI/UX: A seamless experience across devices with a user-friendly interface and many more, including code architecture and reusability.

## Tech Stack

- Next.js
- TypeScript
- MongoDB
- Clerk
- Cloudinary
- Stripe
- Shadcn
- TailwindCSS

## Project Setup

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/Sakibdevlekar/Imaginify-Software-as-a-Service-App.git
cd Imaginify-Software-as-a-Service-App
```

**Installation**

Install the project dependencies using npm:

```bash
npm run dev
```

**Set Up Environment Variables**

Create a new file named `.env.local` in the root of your project and add the following content:

```env
#NEXT
NEXT_PUBLIC_SERVER_URL=

#MONGODB
MONGODB_URL=

#CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
WEBHOOK_SECRET=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

#CLOUDINARY
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

#STRIPE
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
```

Replace the placeholder values with your actual respective account credentials. You can obtain these credentials by signing up on the [Clerk](https://clerk.com/), [MongoDB](https://www.mongodb.com/), [Cloudinary](https://cloudinary.com/) and [Stripe](https://stripe.com)

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## Contributing 

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## Troubleshooting 

If you encounter any issues with the application, contact [sakibdevlekar96@gmail.com](mailto:sakibdevlekar96@gmail.com) for assistance.

## Deployment 

You can access the deployed version of imaginify at the following link:
[Imaginify Live](https://imaginify-live.vercel.app)

To access the live Imaginify application:

1. Visit [Imaginify Live](https://imaginify-live.vercel.app).
2. Sign up or log in to your account.
3. Explore the features and functionalities of Imaginify

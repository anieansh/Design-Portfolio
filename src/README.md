# Ansh Pahwa - Portfolio Website

A modern, dark-themed portfolio website showcasing UX/UI design work with smooth animations and bold typography.

## 🎨 Customizing Your Profile Image

### How to Replace the Header Image

There are two ways to customize your profile photo in the header section:

#### Option 1: Use Your Own Photo URL
1. Open `/components/Hero.tsx`
2. Find line 9 where it says: `const profileImage = '...'`
3. Replace the URL with your own photo URL:
   ```typescript
   const profileImage = 'YOUR_PHOTO_URL_HERE';
   ```

#### Option 2: Use Initials Instead of Photo
1. Open `/components/Hero.tsx`
2. Find line 9 and set `profileImage` to `null`:
   ```typescript
   const profileImage = null;
   ```
3. This will display "AP" initials with a gradient background

### How to Upload Your Own Photo
If you have a photo file:
1. Upload it to an image hosting service like:
   - [Imgur](https://imgur.com)
   - [Cloudinary](https://cloudinary.com)
   - [imgbb](https://imgbb.com)
2. Copy the direct image URL
3. Paste it in the `profileImage` variable as shown above

## 📸 Customizing Project Images

Each project in the Projects section has an associated image. To customize:

1. Open `/components/Projects.tsx`
2. Find the `projects` array (starts around line 7)
3. Replace the `image` URL for any project:
   ```typescript
   {
     name: 'Your Project',
     description: 'Project description',
     url: 'https://yourproject.com',
     category: 'Category',
     image: 'YOUR_IMAGE_URL_HERE', // Replace this
   }
   ```

## 🚀 Features

- Dark theme with purple/blue gradient accents
- Smooth scroll animations
- Glass-morphism effects
- Responsive design
- Interactive hover states
- Custom scrollbar

## 📧 Contact

- Email: anieansh13@gmail.com
- Phone: +91 9992735143
- Location: Delhi (NCR), India

---

© 2025 Ansh Pahwa. All rights reserved.

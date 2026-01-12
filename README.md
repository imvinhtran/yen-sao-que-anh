<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1Fs0JSPW2MF5FsORSnso4Ky4RHHsJsAnH

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   `npm install` hoặc `yarn install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## 🎨 Theme & Styling

Project sử dụng centralized theme system:

- **Tệp cấu hình**: `styles/theme.ts` (colors, typography, spacing)
- **CSS Variables**: `styles/theme.css` (toàn bộ ứng dụng)
- **Font chính**: "Letters From Sweden" (imported from Google Fonts)

Để thay đổi màu sắc/font, chỉ cần chỉnh sửa `styles/theme.ts` - tất cả components sẽ tự động cập nhật!

📖 **Chi tiết**: Xem `styles/THEME_USAGE.md`

## 🖼️ Quản lý Assets & HEIC Converter

### Cấu trúc thư mục

```
public/assets/
├── logo.png
├── images/
│   ├── hero-banner.jpg
│   └── ...
└── README-ASSETS.md
```

### 🎯 Nếu bạn muốn add file ảnh HEIC

Script tự động convert `.heic` → `.jpg`:

```bash
# Chế độ watch (theo dõi liên tục)
npm run convert-heic

# Chế độ quét một lần
npm run convert-heic:once
```

**Cách sử dụng**:

1. Copy file `.heic` vào `public/assets/`
2. Script sẽ tự động convert thành `.jpg`
3. File `.heic` gốc sẽ bị xóa

**Yêu cầu**: Cài đặt công cụ convert (xem `public/assets/README-ASSETS.md`)

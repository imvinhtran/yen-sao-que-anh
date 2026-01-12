# 🖼️ Quản lý Assets - HEIC Converter

## 📁 Cấu trúc thư mục Assets

```
public/
└── assets/
    ├── logo.png (hoặc .jpg, .svg, .webp)
    ├── images/
    │   ├── hero-banner.jpg
    │   ├── product-1.jpg
    │   └── ...
    └── icons/
        └── ...
```

## 🎯 Về file định dạng HEIC

**HEIC** (High Efficiency Image Container) là định dạng ảnh mới của Apple, có kích thước nhỏ hơn JPG nhưng:

- ❌ Không được hỗ trợ trên web browsers cũ
- ❌ Không tương thích với hầu hết các nền tảng
- ✅ Cần convert thành JPG/PNG/WebP để dùng trên web

## 🚀 Cách sử dụng HEIC Converter

### Cách 1: Chế độ Watch (Khuyến nghị)

Script sẽ chạy liên tục và tự động convert khi bạn thêm file `.heic`:

```bash
npm run convert-heic
```

Khi chạy:

- Sẽ theo dõi thư mục `public/assets`
- Khi phát hiện file `.heic`, tự động convert thành `.jpg`
- Xóa file `.heic` gốc sau khi convert thành công
- Nhấn `Ctrl+C` để tắt

### Cách 2: Chỉ quét một lần

```bash
npm run convert-heic:once
```

Sẽ quét tất cả file `.heic` trong `public/assets` và convert, sau đó thoát.

## 📋 Yêu cầu hệ thống

Để convert HEIC, bạn cần cài một trong các công cụ:

### macOS (Khuyến nghị - dễ nhất)

```bash
# Cài đặt với Homebrew
brew install libheif

# Hoặc nếu chưa có Homebrew:
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

### Ubuntu/Debian

```bash
sudo apt-get install libheif-examples
```

### Windows

Tải từ: https://github.com/strukturag/libheif/releases

### Hoặc: Dùng npm package (không cần cài thêm)

```bash
npm install --save-dev heic-convert
```

## ✨ Ví dụ sử dụng

### Quy trình add ảnh HEIC:

1. **Chuẩn bị**: Chạy converter trong một terminal

   ```bash
   npm run convert-heic
   # Output: 🎬 Chạy HEIC Converter trong chế độ watch...
   #         📁 Theo dõi thư mục: .../public/assets
   #         💡 Thêm file .heic vào thư mục này để tự động convert
   ```

2. **Thêm ảnh**: Copy file `.heic` của bạn vào `public/assets/`

   ```
   hero-banner.heic → (tự động convert) → hero-banner.jpg
   ```

3. **Xác nhận**: Xem output trong terminal

   ```
   📸 Đang convert: hero-banner.heic
   ✅ Convert thành công: hero-banner.jpg
   📁 File được lưu tại: public/assets/hero-banner.jpg
   ```

4. **Sử dụng trong code**: Import và dùng file `.jpg`
   ```tsx
   <img src='/assets/hero-banner.jpg' alt='Hero Banner' />
   ```

## 🔗 Sử dụng ảnh trong React Components

```tsx
// Cách 1: Direct path (đơn giản)
<img src='/assets/logo.png' alt='Logo' />;

// Cách 2: Import (tối ưu hơn)
import heroImage from '/assets/hero-banner.jpg';

export default function Hero() {
  return <img src={heroImage} alt='Hero' />;
}
```

## 🗂️ Tổ chức file tốt nhất

```
public/assets/
├── logo.png                 (logo chính)
├── images/
│   ├── hero-banner.jpg
│   ├── product-yến-thô.jpg
│   ├── product-yến-làm-sạch.jpg
│   └── product-yến-chưng-khô.jpg
├── icons/
│   ├── check.svg
│   ├── star.svg
│   └── ...
└── backgrounds/
    ├── pattern.jpg
    └── ...
```

## ⚙️ Cấu hình script (Nâng cao)

File script: `scripts/heic-converter.js`

Bạn có thể chỉnh sửa:

- Output format (JPG → PNG/WebP)
- Chất lượng ảnh
- Tên file tự động
- v.v...

## 🐛 Troubleshooting

### ❌ "heic-convert: command not found"

**Giải pháp**:

```bash
# macOS
brew install libheif

# Hoặc dùng npm package
npm install --save-dev heic-convert
```

### ❌ File không được convert

**Giải pháp**:

1. Kiểm tra file thực sự là `.heic` (không phải `.heif`)
2. Chạy: `npm run convert-heic:once` để quét lại
3. Kiểm tra permissions của thư mục `public/assets`

### ✅ Tất cả hoạt động bình thường

File `.heic` sẽ được convert tự động thành `.jpg` và file gốc sẽ bị xóa.

## 💡 Mẹo

1. **Đặt tên file rõ ràng**: `hero-banner.heic` → `hero-banner.jpg`
2. **Tổ chức theo thư mục con**: Dễ quản lý hơn
3. **Backup HEIC gốc**: Nếu cần chỉnh sửa sau
4. **Optimize JPG**: Dùng tool như TinyPNG để giảm kích thước

---

**Tạo lúc**: 2026-01-11  
**Tác giả**: GitHub Copilot  
**Dự án**: Yến Sào Quế Anh

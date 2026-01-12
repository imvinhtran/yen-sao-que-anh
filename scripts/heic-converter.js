#!/usr/bin/env node

/**
 * HEIC to JPG Converter Script (ES Module Version)
 * Tự động convert file .heic thành .jpg khi thêm vào thư mục assets
 *
 * Cách sử dụng:
 * 1. npm install (để cài thêm package nếu cần)
 * 2. node scripts/heic-converter.js
 *
 * Script sẽ chạy liên tục và theo dõi thư mục public/assets
 */

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ASSETS_DIR = path.join(__dirname, '../public/assets');

// Tạo thư mục assets nếu chưa tồn tại
if (!fs.existsSync(ASSETS_DIR)) {
  fs.mkdirSync(ASSETS_DIR, { recursive: true });
  console.log(`✅ Tạo thư mục: ${ASSETS_DIR}`);
}

/**
 * Convert HEIC file to JPG
 * @param {string} heicFilePath - Đường dẫn tới file .heic
 */
function convertHeicToJpg(heicFilePath) {
  const fileName = path.basename(heicFilePath, '.heic');
  const jpgFilePath = path.join(ASSETS_DIR, `${fileName}.jpg`);

  try {
    console.log(`\n📸 Đang convert: ${path.basename(heicFilePath)}`);

    // Kiểm tra xem heic-convert package có được cài chưa
    try {
      execSync('which heic-convert || which heif-convert', { stdio: 'ignore' });
    } catch {
      console.log('⚠️  Cần cài đặt công cụ convert HEIC. Cài đặt tự động...\n');
      console.log('Hướng dẫn cài đặt:');
      console.log('');
      console.log('  macOS (với Homebrew):');
      console.log('  $ brew install libheif');
      console.log('');
      console.log('  Ubuntu/Debian:');
      console.log('  $ sudo apt-get install libheif-examples');
      console.log('');
      console.log('  Hoặc dùng npm package (không cần cài bên ngoài):');
      console.log('  $ npm install --save-dev heic-convert');
      console.log('');
      return;
    }

    // Thử convert với heic-convert
    try {
      execSync(`heic-convert -o "${jpgFilePath}" "${heicFilePath}"`, {
        stdio: 'inherit',
      });
    } catch {
      // Nếu heic-convert không hoạt động, thử heif-convert
      execSync(`heif-convert "${heicFilePath}" "${jpgFilePath}"`, {
        stdio: 'inherit',
      });
    }

    // Xóa file .heic gốc sau khi convert thành công
    fs.unlinkSync(heicFilePath);
    console.log(`✅ Convert thành công: ${path.basename(jpgFilePath)}`);
    console.log(
      `📁 File được lưu tại: public/assets/${path.basename(jpgFilePath)}`
    );
  } catch (error) {
    console.error(`❌ Lỗi khi convert ${path.basename(heicFilePath)}:`);
    console.error(error.message);
  }
}

/**
 * Scan thư mục assets tìm file .heic
 */
function scanAssets() {
  if (!fs.existsSync(ASSETS_DIR)) {
    return;
  }

  const files = fs.readdirSync(ASSETS_DIR);
  const heicFiles = files.filter((file) =>
    file.toLowerCase().endsWith('.heic')
  );

  if (heicFiles.length > 0) {
    heicFiles.forEach((file) => {
      const filePath = path.join(ASSETS_DIR, file);
      convertHeicToJpg(filePath);
    });
  }
}

// Chế độ chạy một lần (no-watch)
if (process.argv.includes('--once')) {
  console.log('🔍 Quét thư mục assets...');
  scanAssets();
  console.log('✨ Hoàn thành!');
  process.exit(0);
}

// Chế độ chạy liên tục (watch mode) - mặc định
console.log('🎬 Chạy HEIC Converter trong chế độ watch...');
console.log(`📁 Theo dõi thư mục: ${ASSETS_DIR}`);
console.log('💡 Thêm file .heic vào thư mục này để tự động convert\n');

// Theo dõi thư mục
fs.watch(ASSETS_DIR, { recursive: true }, (eventType, filename) => {
  if (filename && filename.toLowerCase().endsWith('.heic')) {
    const filePath = path.join(ASSETS_DIR, filename);

    // Đợi file được tải hoàn toàn
    setTimeout(() => {
      if (fs.existsSync(filePath)) {
        convertHeicToJpg(filePath);
      }
    }, 500);
  }
});

// Quét lần đầu khi khởi động
scanAssets();

// Xử lý Ctrl+C
process.on('SIGINT', () => {
  console.log('\n\n👋 Tắt HEIC Converter');
  process.exit(0);
});

#!/bin/bash

# 🎯 HEIC Converter Setup Script
# Script này sẽ hướng dẫn cài đặt công cụ cần thiết để convert HEIC

echo "🚀 HEIC Converter Setup"
echo "================================"
echo ""

# Kiểm tra hệ điều hành
if [[ "$OSTYPE" == "darwin"* ]]; then
  # macOS
  echo "✅ Hệ điều hành: macOS"
  echo ""
  echo "Bước 1: Cài đặt libheif (công cụ convert HEIC)"
  echo "-------------------------------------------"
  
  # Kiểm tra Homebrew
  if ! command -v brew &> /dev/null; then
    echo "⚠️  Homebrew chưa được cài đặt"
    echo "Cài đặt Homebrew:"
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
  fi
  
  # Cài libheif
  if brew list libheif &> /dev/null; then
    echo "✅ libheif đã được cài đặt"
  else
    echo "🔧 Cài đặt libheif..."
    brew install libheif
    echo "✅ libheif đã được cài đặt thành công"
  fi
  
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
  # Linux (Ubuntu/Debian)
  echo "✅ Hệ điều hành: Linux"
  echo ""
  echo "Bước 1: Cài đặt libheif"
  echo "------------------------"
  sudo apt-get update
  sudo apt-get install -y libheif-examples
  echo "✅ libheif đã được cài đặt thành công"
  
else
  # Windows hoặc khác
  echo "⚠️  Hệ điều hành: $OSTYPE"
  echo ""
  echo "Để cài đặt trên Windows:"
  echo "Tải từ: https://github.com/strukturag/libheif/releases"
  echo ""
fi

echo ""
echo "Bước 2: Test converter"
echo "----------------------"

# Test heic-convert
if command -v heic-convert &> /dev/null; then
  echo "✅ heic-convert available"
  heic-convert --version
elif command -v heif-convert &> /dev/null; then
  echo "✅ heif-convert available"
  heif-convert -h
else
  echo "ℹ️  Công cụ dòng lệnh chưa có, nhưng npm package sẽ hoạt động"
fi

echo ""
echo "Bước 3: Chạy converter"
echo "----------------------"
echo ""
echo "Chế độ watch (theo dõi liên tục):"
echo "  npm run convert-heic"
echo ""
echo "Chế độ quét một lần:"
echo "  npm run convert-heic:once"
echo ""
echo "✨ Setup hoàn thành!"

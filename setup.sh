#!/bin/bash

# Developer Portfolio Quick Setup Script
# This script automates the initial setup process

set -e

echo "🚀 Developer Portfolio Setup"
echo "============================="
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install
echo "✅ Dependencies installed"
echo ""

# Create environment file
if [ ! -f .env ]; then
    echo "🔧 Creating .env file..."
    cp .env.example .env
    echo "✅ .env file created. Update it with your information."
else
    echo "ℹ️  .env file already exists"
fi

echo ""

# Create development environment file
if [ ! -f .env.development ]; then
    echo "🔧 Creating .env.development file..."
    cp .env.example .env.development
    echo "✅ .env.development file created"
else
    echo "ℹ️  .env.development file already exists"
fi

echo ""
echo "============================="
echo "✅ Setup Complete!"
echo "============================="
echo ""
echo "📝 Next steps:"
echo "1. Edit src/data/portfolio.js with your information"
echo "2. Update tailwind.config.js with your brand colors"
echo "3. Add your resume to public/resume.pdf"
echo "4. Run 'npm run dev' to start the development server"
echo ""
echo "🚀 To start developing:"
echo "   npm run dev"
echo ""
echo "📚 For more information, see:"
echo "   - QUICKSTART.md - Quick setup guide"
echo "   - SETUP.md - Detailed setup guide"
echo "   - README.md - Project documentation"
echo ""

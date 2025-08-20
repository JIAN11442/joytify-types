# <img src="https://mern-joytify-bucket-yj.s3.ap-northeast-1.amazonaws.com/defaults/joytify-logo.svg" alt="Joytify" width="26" height="26"> @joytify/shared-types

> **Internal shared types, constants, and utility classes for Joytify project** - A comprehensive TypeScript package providing type safety and consistency across frontend and backend development

## 📋 Project Documentation

- **🏠 [Main Application](https://github.com/JIAN11442/MERN-Joytify/tree/main)** - Application overview, tech stack, features
- **🏗️ [Infrastructure Pipeline](https://github.com/JIAN11442/MERN-Joytify/tree/main/terraform)** - AWS Lambda processing pipeline, capacity analysis
- **📚 [Shared Types](./README.md)** - Shared TypeScript interfaces _(You are here)_

---

## 📋 Table of Contents

- [🎯 Overview](#-overview)
- [🚀 Quick Start](#-quick-start)
- [📦 Package Structure](#-package-structure)
- [🛠️ Development](#️-development)

---

## 🎯 Overview

**@joytify/shared-types** is the core TypeScript package that powers Joytify's full-stack development ecosystem. This package provides a unified set of types, constants, and utility classes that ensure type safety and consistency across frontend and backend applications.

### Key Features

- **🔒 Type Safety** - Comprehensive TypeScript interfaces for all data structures
- **🔄 Consistency** - Shared constants and enums across frontend/backend
- **⚡ Performance** - Optimized for both ESM and CommonJS environments
- **🎯 Modular** - Subpath exports for selective imports
- **🛡️ Validation** - Zod-compatible type definitions

### Supported Formats

- **ESM** - Modern ES modules for tree-shaking and better performance
- **CommonJS** - Legacy compatibility for older environments
- **TypeScript** - Full type definitions and IntelliSense support

### Subpath Exports

- **`@joytify/shared-types/types`** - TypeScript type definitions
- **`@joytify/shared-types/constants`** - Shared constants and enums
- **`@joytify/shared-types/classes`** - Utility classes

---

## 🚀 Quick Start

### Installation

```bash
npm install @joytify/shared-types
```

📦 **Package**: [@joytify/shared-types on npm](https://www.npmjs.com/package/@joytify/shared-types)

### Usage

```typescript
// Import specific types
import { User, Playlist, Song } from "@joytify/shared-types/types";

// Import constants
import { API_ENDPOINTS, PRIVACY_OPTIONS } from "@joytify/shared-types/constants";

// Import utility classes
import { AppError } from "@joytify/shared-types/classes";
```

---

## 📦 Package Structure

```
src/
├── types/          # TypeScript type definitions (28 files)
│   ├── auth.type.ts
│   ├── user.type.ts
│   ├── song.type.ts
│   ├── playlist.type.ts
│   ├── album.type.ts
│   ├── musician.type.ts
│   ├── notification.type.ts
│   ├── stats.type.ts
│   ├── playback.type.ts
│   ├── session.type.ts
│   ├── device.type.ts
│   ├── network.type.ts
│   ├── cookie.type.ts
│   ├── player.type.ts
│   ├── gender.type.ts
│   ├── locale.type.ts
│   ├── error.type.ts
│   ├── privacy.type.ts
│   ├── aws.type.ts
│   ├── http.type.ts
│   ├── label.type.ts
│   ├── paletee.type.ts
│   ├── rating.type.ts
│   ├── search.type.ts
│   ├── homepage.type.ts
│   ├── verification.type.ts
│   └── util.type.ts
├── constants/      # Shared constants (21 files)
│   ├── api.constant.ts
│   ├── auth.constant.ts
│   ├── user.constant.ts
│   ├── song.constant.ts
│   ├── playlist.constant.ts
│   ├── album.constant.ts
│   ├── musician.constant.ts
│   ├── notification.constant.ts
│   ├── stats.constant.ts
│   ├── playback.constant.ts
│   ├── session.constant.ts
│   ├── device.constant.ts
│   ├── network.constant.ts
│   ├── aws.constant.ts
│   ├── http.constant.ts
│   ├── label.constant.ts
│   ├── privacy.constant.ts
│   ├── rating.constant.ts
│   ├── search.constant.ts
│   ├── homepage.constant.ts
│   ├── verification.constant.ts
│   └── user.constant.ts
└── classes/        # Utility classes (1 file)
    └── error.class.ts
```

## 🛠️ Development

### Prerequisites

- **Node.js** >= 18.0.0
- **TypeScript** >= 5.0.0
- **npm** >= 9.0.0

### Build Process

```bash
# Install dependencies
npm install

# Build for both ESM and CommonJS
npm run build

# Check build output
ls dist/
# ├── cjs/     # CommonJS build
# └── esm/     # ESM build
```

### Publishing

```bash
# Login to npm (first time only)
npm login

# Build the package
npm run build

# Publish to npm
npm publish
```

### Version Management

```bash
# Update version
npm version patch  # 1.2.0 → 1.2.1
npm version minor  # 1.2.0 → 1.3.0
npm version major  # 1.2.0 → 2.0.0
```

---

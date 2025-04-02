# @joytify/shared-types

Internal shared types, constants, and utility classes for Joytify project. This package is specifically designed for Joytify's frontend and backend development.

> **Note**: This is an internal package for Joytify project only. Not intended for public use.

## Installation

```bash
npm install @joytify/shared-types
```

## Features

### Types

- Authentication and user management types
- Playlist and song structures
- Album and musician definitions
- Playback and verification types
- AWS, privacy, and HTTP interfaces

### Constants

- Authentication and user settings
- Label and musician configurations
- Playback and verification rules
- AWS, privacy, and HTTP constants
- Error handling definitions

### Classes

- Error handling utilities

## Usage

### Import Types

```typescript
import { User, Playlist, Song } from "@joytify/shared-types";
```

### Import Constants

```typescript
import { API_ENDPOINTS, PRIVACY_OPTIONS } from "@joytify/shared-types/constants";
```

### Import Classes

```typescript
import { AppError } from "@joytify/shared-types/classes";
```

## Development

### Build

```bash
npm run build
```

This will generate both ESM and CommonJS builds in the `dist` directory.

### Project Structure

```
src/
  ├── types/      # TypeScript type definitions
  ├── constants/  # Shared constants
  └── classes/    # Utility classes
```

## License

MIT

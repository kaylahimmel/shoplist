# ShopList 📱

A modern, intuitive shopping list app built with React Native and Expo. ShopList helps you organize your grocery shopping with a clean, user-friendly interface and smooth animations.

## 📋 App Description

ShopList is a simple yet powerful shopping list application that allows users to:

- Create and manage shopping lists with ease
- Add items quickly with a simple text input
- Mark items as completed with satisfying haptic feedback
- Delete items with confirmation dialogs
- Persist data locally using AsyncStorage
- Enjoy smooth animations and transitions
- Experience a clean, modern UI with a nature-inspired color scheme

The app features a minimalist design focused on functionality and user experience, making grocery shopping more organized and efficient.

## 🛠 Tech Stack

### Core Technologies

- **React Native** (0.81.4) - Cross-platform mobile development
- **Expo** (54.0.0) - Development platform and toolchain
- **TypeScript** (5.9.2) - Type-safe JavaScript development
- **Expo Router** (6.0.7) - File-based routing for React Native

### Key Dependencies

- **@react-native-async-storage/async-storage** - Local data persistence
- **expo-haptics** - Haptic feedback for better UX
- **expo-notifications** - Push notification support
- **@expo/vector-icons** - Icon library
- **react-native-safe-area-context** - Safe area handling

### Development Tools

- **ESLint** - Code linting and formatting
- **Prettier** - Code formatting
- **TypeScript ESLint** - TypeScript-specific linting rules

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- yarn (v1.22 or higher)
- Expo CLI
- iOS Simulator (for iOS development) or Android Studio (for Android development)

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd shoplist
```

2. Install dependencies:

```bash
yarn install
```

3. Start the development server:

```bash
yarn start
# or
npm start
```

4. Run on your preferred platform:

```bash
# iOS
yarn ios
# or
npm run ios

# Android
yarn android
# or
npm run android
```

## 📱 Features

### Current Features

- ✅ Add new shopping list items
- ✅ Mark items as completed/incomplete
- ✅ Delete items with confirmation
- ✅ Local data persistence
- ✅ Haptic feedback for interactions
- ✅ Smooth animations and transitions
- ✅ Responsive design
- ✅ Clean, modern UI

## 🔮 Future Enhancements

### Multi-User & Collaboration

- **Family Sharing**: Allow multiple users to collaborate on shared shopping lists
- **Real-time Updates**: Sync changes across devices instantly
- **User Management**: Add/remove family members from shared lists
- **Role-based Permissions**: Different access levels for family members

### Enhanced State Management

- **Zustand Integration**: Migrate from local state to Zustand for better state management
- **Global State**: Centralized state management across the app
- **State Persistence**: Enhanced data persistence strategies

### User Experience Improvements

- **Favorite Items**: Quick-add frequently purchased items
- **Smart Suggestions**: AI-powered item suggestions based on shopping history
- **Voice Input**: Add items using voice commands
- **Barcode Scanner**: Scan product barcodes to add items

### Profile & Personalization

- **Complete Profile Page**: User settings, preferences, and account management
- **Custom Themes**: Multiple color schemes and themes
- **Personalization**: Customizable app appearance and behavior
- **User Statistics**: Shopping patterns and insights

### Category Management

- **Dynamic Categories**: Add, edit, and remove custom categories
- **Category-based Organization**: Group items by categories
- **Smart Categorization**: Auto-categorize items based on name
- **Category Icons**: Visual category representation

### Advanced List Management

- **Multiple Lists**: Create separate lists for different stores
- **List Management Page**: Centralized view to manage all shopping lists
- **Store-specific Lists**: Pre-configured lists for different grocery stores
- **List Templates**: Save and reuse common shopping patterns
- **List Sharing**: Share individual lists with specific people

### Additional Features

- **Offline Support**: Full functionality without internet connection
- **Data Export**: Export shopping lists to various formats
- **Recipe Integration**: Add ingredients from recipes to shopping lists

## 📁 Project Structure

```bash
shoplist/
├── app/                    # App screens and navigation
│   ├── _layout.tsx        # Root layout configuration
│   ├── index.tsx          # Home/login screen
│   ├── groceryList.tsx    # Main shopping list screen
│   ├── categories.tsx     # Categories management
│   └── profile.tsx        # User profile
├── components/            # Reusable UI components
│   ├── ShoppingListItem.tsx
│   └── ShoppingListItem.styles.tsx
├── types/                 # TypeScript type definitions
│   └── shoppingList.types.ts
├── utils/                 # Utility functions
│   ├── storage.ts         # Local storage utilities
│   ├── orderList.ts       # List ordering logic
│   └── pushNotifications.ts
├── assets/                # Images and icons
├── theme.ts              # App theme and colors
└── package.json          # Dependencies and scripts
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Expo](https://expo.dev/)
- Icons by [Expo Vector Icons](https://docs.expo.dev/guides/icons/)
- Inspired by modern mobile app design principles

---

**ShopList** - Making grocery shopping simple and organized! 🛒✨

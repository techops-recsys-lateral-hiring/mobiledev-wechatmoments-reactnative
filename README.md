
## Installing dependencies

 - Node 
 - Watchman
 - a JDK
 - Android Studio
 - the React Native command line interface, 
 - Xcode and CocoaPods


## Installation

### Node & Watchman

```bash
  brew install node
  brew install watchman
```

### Java Development Kit

```bash
  brew tap homebrew/cask-versions
  brew install --cask zulu11
```

### Android development environment
```bash
  Download and install Android Studio
```

### Configure the ANDROID_SDK_ROOT environment variable
```bash
  export ANDROID_SDK_ROOT=$HOME/Library/Android/sdk
  export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
  export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
```

### React Native Command Line Interface
```bash
React Native has a built-in command line interface. Rather than install 
and manage a specific version of the CLI globally, we recommend you access t
he current version at runtime using npx, which ships with Node.js. 
With npx react-native <command>, the current stable version of the CLI will
 be downloaded and executed at the time the command is run.
```

### Xcode
```bash
The easiest way to install Xcode is via the Mac App Store. 
Installing Xcode will also install the iOS Simulator 
and all the necessary tools to build your iOS app.
```


### CocoaPods
```bash
sudo gem install cocoapods
```

### Clone Repo
```bash
git clone https://github.com/techops-recsys-lateral-hiring/mobiledev-wechatmoments-reactnative.git
```

### App Introduction

The code is an Android app which looks like Wechat Moments page.

We have some requirements during building this app, and you should also try to follow these requirements:


#### Project overview

The below screenshots are from Wechat App, they are for reference/inspiration these do not represent the actual output from the given codebase.

<img src="https://user-images.githubusercontent.com/61306682/131655545-cfa011b4-637f-45db-bb26-3bb9c986b94b.png" alt="wechat_moments_2" height=350 /> <img src="https://user-images.githubusercontent.com/61306682/131655537-43e4ab0b-29f0-456d-bf2a-0fcf3de0ba2c.jpg" alt="wechat_moments_3" height=350 /> <img src="https://user-images.githubusercontent.com/61306682/131655555-608f9b7e-5cb7-4059-abbc-f70dfd00fe06.jpg" alt="wechat_moments_1" height=350 />

- The project is React Native app which looks like Wechat Moments page.
- The page consists of profile image, avatar and tweets list
- For each tweet, there will be a sender, optional content, optional images and comments
- A tweet contains from 0 to 9 images
- Pulling down list to refresh, only first 5 items are shown after refreshing
- All tweets are fetched and stored in Redux at the first time and only show first 5 of them at the beginning and after refresh.
- Show 5 more while user pulling up the view at the bottom of the table view.
- Supports layout on all kinds of android and ios device screen and orientation.

#### Tech requirements:

- The data JSON will be hosted at https://techops-recsys-lateral-hiring.github.io/moments-data/
- An example of the response in `tweets.mock.ts`
- Unit tests are appreciated.
- Functional programming is appreciated
- Keep your code clean as much as possible Production and Technical requirements are weighing equally in the final result.








    

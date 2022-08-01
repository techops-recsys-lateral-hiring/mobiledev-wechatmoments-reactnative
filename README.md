
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









    

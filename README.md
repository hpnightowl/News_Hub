![Get Android APK](https://github.com/hpnightowl/Bookie/workflows/Get%20Android%20APK/badge.svg)

<img src="https://www.coletiv.com/static/35b6a79fea4a7289acb6796cd4ad05b4/8d3de/android-github-actions-setup-image.jpg" alt="Flutter action" width="800"/><br>
<h3> Ionic Android APK Generator Action </h3>
<hr>

- This repository is dedicated to a GitHub Action for generating a new apk and pushing it to the repository, whenever changes are made in master branch.

### Usage
Example Workflow file

### An example workflow to set up your Ionic Android apk generator action quickly.

```yaml
name: Get Android APK

on: [push, pull_request]

jobs:
  build:
    name: Build APK
    runs-on: ubuntu-latest
    steps:
      - name: checkout source
        uses: actions/checkout@v2

      - name: setup java sdk
        uses: actions/setup-java@v1
        with:
          java-version: '9.0.4'
          
      - name: setup Node.js
        uses: actions/setup-node@v1
        with:
          node-version: 13.x

      - name: Install Cordova
        run: npm install -g cordova

      - name: Install Ionic cli
        run: npm install -g @ionic/cli

      - name: Install app dependencies
        run: npm install

      - name: build the app
        run: npm run build
    
      - name: remove existing folder if there 
        run: rm -rf {path of your android folder dir.} # eg. /home/runner/work/Bookie/Bookie/android
        
      - name: Add to android
        run: npx cap add android
  
      - name: sync with source
        run: npx cap sync

      - name: Generate the Android App Apk
        working-directory: {working android directory} # eg. /home/runner/work/Bookie/Bookie/android 
        run: bash ./gradlew assembleDebug --stacktrace

      - name: Upload dev APK
        uses: actions/upload-artifact@v1
        with:
          name: app-dev
          path: android/app/build/outputs/apk/debug/app-debug.apk

```

#### 2nd sample you need to add secrets env to upload to release

### Usage
Example Workflow file

An example workflow to set up your Ionic Android apk generator action quickly.

```yaml
name: Get Android APK

on: [push, pull_request]

jobs:
  build:
    name: Build APK
    runs-on: ubuntu-latest
    steps:
      - name: checkout source
        uses: actions/checkout@v2

      - name: setup java sdk
        uses: actions/setup-java@v1
        with:
          java-version: '9.0.4'
          
      - name: setup Node.js
        uses: actions/setup-node@v1
        with:
          node-version: 13.x

      - name: Install Cordova
        run: npm install -g cordova

      - name: Install Ionic cli
        run: npm install -g @ionic/cli

      - name: Install app dependencies
        run: npm install

      - name: build the app
        run: npm run build
    
      - name: remove existing folder if there 
        run: rm -rf {path of your android folder dir.} # eg. /home/runner/work/Bookie/Bookie/android
        
      - name: Add to android
        run: npx cap add android
  
      - name: sync with source
        run: npx cap sync

      - name: Generate the Android App Apk
        working-directory: {working android directory} # eg. /home/runner/work/Bookie/Bookie/android 
        run: bash ./gradlew assembleDebug --stacktrace
        
      - name: Commit APK
        run: git add android/app/build/outputs/apk/debug/app-debug.apk
        
      - name: Configure Github
        run: |
          git config --local user.email "you@email.com"
          git config --local user.name "yourusername"
          git commit -m "Developer release" -a

      - name: Push changes
        uses: ad-m/github-push-action@master
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}

```
## Learn More

You can learn more about Github actions and Ionic [here](https://docs.github.com/en/actions) and [here](https://ionicframework.com/) respectively.


##### Made with ❤️ by <a href="https://github.com/hpnightowl">hpnightowl</a>

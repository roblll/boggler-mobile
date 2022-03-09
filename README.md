# Boggler

Mobile app available on iOS and Android

App Store - Apple - https://apps.apple.com/us/app/boggler/id1609487300

Google Play - https://play.google.com/store/apps/details?id=com.rbzla.boggler&hl=en_US&gl=US

## Description

Instantly find all words in Boggle. Simply take a picture and the app will search the board. It will display the total words found, the inferred board letters, and the list of all words found, categorized by length. Only 3-letter or longer words, are listed. This is according to Boggle rules. The app processes the picture and converts it to the letters on the board. It has over 90% accuracy in determining the correct letter. In case the app incorrectly identifies a letter, the user can manually change any letter on the board. The app will then find the words possible with the corrected board. The app is available on iOS and Android.

## Implementation of Mobile App

The mobile app uses a Trie (Prefix Tree) data structure to efficiently find all possible words on the board. The dictionary contains 175,281 words. The camera had to be adjusted to consistently frame the board for proper processing. The mobile app was built using the open source frameworks, React Native and Expo. This allows the app to be built simultaneously for iOS and Android.

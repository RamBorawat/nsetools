/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import Post from './model/Post'

import { Platform } from 'react-native'
import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'

import schema from './model/schema'
import migrations from './model/migrations'
import NseAllData from './model/NseAllData';
import NseTodayData from './model/NseTodayData';
import NseYesterdayData from './model/NseYesterdayData';
// import Post from './model/Post' // ⬅️ You'll import your Models here

// First, create the adapter to the underlying database:
const adapter = new SQLiteAdapter({
    schema: schema,
    // (You might want to comment it out for development purposes -- see Migrations documentation)
    migrations,
    // (optional database name or file system path)
    // dbName: 'myapp',
    // (recommended option, should work flawlessly out of the box on iOS. On Android,
    // additional installation steps have to be taken - disable if you run into issues...)
    // jsi: true, /* Platform.OS === 'ios' */
    // (optional, but you should implement this method)
    onSetUpError: error => {
        // Database failed to load -- offer the user to reload the app or log out
        console.log(error, 'this is wb error')
    }
})

// Then, make a Watermelon database from it!
export const database = new Database({
    adapter,
    modelClasses: [
        // Post, // ⬅️ You'll add Models to Watermelon here
        Post,
    ],
})

AppRegistry.registerComponent(appName, () => App);

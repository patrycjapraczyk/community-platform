"use strict";(self.webpackChunkoa_docs=self.webpackChunkoa_docs||[]).push([[935],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6612:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i={},s="Firebase Emulators",l={unversionedId:"Backend Development/firebase-emulators",id:"Backend Development/firebase-emulators",isDocsHomePage:!1,title:"Firebase Emulators",description:"In order to test backend functions locally, firebase provides a suite of emulators to mimic most functionality seen online (e.g firestore, storage, functions, triggers etc.)",source:"@site/docs/Backend Development/firebase-emulators.md",sourceDirName:"Backend Development",slug:"/Backend Development/firebase-emulators",permalink:"/community-platform/Backend Development/firebase-emulators",editUrl:"https://github.com/ONEARMY/community-platform/edit/master/documentation/docs/Backend Development/firebase-emulators.md",tags:[],version:"current",frontMatter:{},sidebar:"mainSidebar",previous:{title:"Overview",permalink:"/community-platform/Backend Development/BackendOverview"},next:{title:"Integrations",permalink:"/community-platform/Backend Development/integrations"}},u=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Getting Started",id:"getting-started",children:[]},{value:"Emulator Dashboard",id:"emulator-dashboard",children:[]},{value:"Loading seed data",id:"loading-seed-data",children:[]},{value:"Updating seed data",id:"updating-seed-data",children:[]},{value:"Resetting seed data",id:"resetting-seed-data",children:[]},{value:"HTTP Functions",id:"http-functions",children:[]},{value:"Port in use",id:"port-in-use",children:[]},{value:"Firestore Emulator fatal error",id:"firestore-emulator-fatal-error",children:[]}],p={toc:u};function d(e){var t=e.components,i=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"firebase-emulators"},"Firebase Emulators"),(0,o.kt)("p",null,"In order to test backend functions locally, firebase provides a suite of emulators to mimic most functionality seen online (e.g firestore, storage, functions, triggers etc.)"),(0,o.kt)("p",null,"In order to use the emulators run the following start script"),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"To run emulators locally you will need (as described in: ",(0,o.kt)("a",{parentName:"p",href:"https://firebase.google.com/docs/emulator-suite/install_and_configure"},"https://firebase.google.com/docs/emulator-suite/install_and_configure"),")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://firebase.google.com/docs/cli"},"Firebase CLI")," version 8.14.0 or higher"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://openjdk.java.net/install/"},"Java")," version 1.8 or higher")),(0,o.kt)("h2",{id:"getting-started"},"Getting Started"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn start:emulated\n")),(0,o.kt)("p",null,"This will start the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Functions emulator"),(0,o.kt)("br",{parentName:"p"}),"\n","May take a few minutes to download required binaries when running for the first time")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Functions src watcher"),(0,o.kt)("br",{parentName:"p"}),"\n","To recompile functions on update")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Platform server"),(0,o.kt)("br",{parentName:"p"}),"\n","On port 4000 to indicate that it should communicate with emulators instead of live site)"))),(0,o.kt)("h2",{id:"emulator-dashboard"},"Emulator Dashboard"),(0,o.kt)("p",null,"The emulator should start at http://localhost:4001. Follow the link to see an overview of the available services"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Dashboard",src:a(2333).Z})),(0,o.kt)("p",null,"Clicking on individual tabs will take you to a page similar to the firebase console, from where you can interact with services."),(0,o.kt)("p",null,"Note - any data populated into the emulator will be deleted after the emulator has closed (restoring to original state). See the section below about persistant and seed data"),(0,o.kt)("h1",{id:"seed-data"},"Seed data"),(0,o.kt)("p",null,"By default the emulators load any data found in the ",(0,o.kt)("a",{parentName:"p",href:"../../../../functions/data/emulated"},"functions/data/emulated")," folder, which can be previously exported from another firebase app or emulator instance."),(0,o.kt)("p",null,"By default this data is not committed to the repo and so initial data will be empty, however specific zip files have been generated from site backup files and can be loaded for testing"),(0,o.kt)("h2",{id:"loading-seed-data"},"Loading seed data"),(0,o.kt)("p",null,"By default when the script first runs it will populate seed data from ",(0,o.kt)("a",{parentName:"p",href:"../../../../functions/data/seed"},"functions/data/seed"),". This can be repopulated either by deleting the ",(0,o.kt)("a",{parentName:"p",href:"../../../../functions/data/emulated"},"functions/data/emulated")," folder, or by manually calling the seed data script:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn workspace functions run emulator:seed\n")),(0,o.kt)("p",null,"This will load the default seed data from the zip file ",(0,o.kt)("a",{target:"_blank",href:a(4596).Z},"functions/data/seed"),"."),(0,o.kt)("p",null,"The default data contains a snapshot of most howtos, mappins etc. from the export data of the file (so may not be fully up-to-date). It also includes 2 user profiles for login:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"username: demo_user@example.com\npassword: demo_user\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"username: demo_admin@example.com\npassword: demo_admin\n")),(0,o.kt)("p",null,"If you need newer or other data sources contact the repo admins who can hopefully help out."),(0,o.kt)("p",null,"The fully seeded database should look something like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Seeded DB",src:a(4197).Z})),(0,o.kt)("h2",{id:"updating-seed-data"},"Updating seed data"),(0,o.kt)("p",null,"When the emulators close they discard any changes made, so seed data documents that have been updated will revert to their original state next time the emulator is loaded."),(0,o.kt)("p",null,"Whilst this is useful to preserve a clean testing state, sometimes it might be desirable to persist changes (such as adding additional auth users, or specific example docs)"),(0,o.kt)("p",null,"This can be achieved by passing the ",(0,o.kt)("inlineCode",{parentName:"p"},"--export-on-exit=./path/to/export/folder")," flag to the script that starts the functions emulators. This can be run by modifiying the functions start at ",(0,o.kt)("a",{target:"_blank",href:a(8836).Z},"functions/scripts/start.ts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// change this value if also wanting to export data\nif (false) {\n  cmd = `${cmd} --export-on-exit=${EMULATOR_IMPORT_FOLDER}`\n}\n")),(0,o.kt)("p",null,"NOTE - due to filepath handling this is usually best done on a mac/linux device (windows export formattedly inconsistently for linux)"),(0,o.kt)("h2",{id:"resetting-seed-data"},"Resetting seed data"),(0,o.kt)("p",null,"As previously mentioned, all data will be reverted back to original/seed state after emulators have closed, so there is no need to reset. If manually exported data has been copied to overwrite the seed data, the default seed can be restored using the load script above."),(0,o.kt)("h1",{id:"calling-functions"},"Calling Functions"),(0,o.kt)("h2",{id:"http-functions"},"HTTP Functions"),(0,o.kt)("p",null,"E.g. A development and testing API has been created at ",(0,o.kt)("a",{target:"_blank",href:a(9118).Z},"functions/src/dev/index.ts"),". When running it can be called by making a GET request to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"http://localhost:4002/{projectId}/us-central1/dev\n")),(0,o.kt)("p",null,"Where the projectId may be specified from configuration (default for emulators is ",(0,o.kt)("inlineCode",{parentName:"p"},"emulator-demo"),")"),(0,o.kt)("p",null,"Using a REST client like ",(0,o.kt)("a",{parentName:"p",href:"https://insomnia.rest/"},"Insomnia")," or ",(0,o.kt)("a",{parentName:"p",href:"https://www.getpostman.com/"},"Postman")," can simplify the process of making api requests"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"E.g. Insomnia Rest Client"),"\n",(0,o.kt)("img",{alt:"Insomnia Rest Client",src:a(1357).Z})),(0,o.kt)("h1",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"By default emulators allow full read/write access to all resources, however firebase functions still expect an authenticated user in order to access various external APIs before completing operations."),(0,o.kt)("p",null,"The current workaround for this is authenticating using a custom service-account that has limited (read-only) access to resources on the testing project. This is done automatically during the start script ",(0,o.kt)("a",{target:"_blank",href:a(8836).Z},"functions/scripts/start.ts"),"."),(0,o.kt)("p",null,"Alternatively developers can request access to join the firebase project for full access to the testing project, however it's hoped that this is not required."),(0,o.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("h2",{id:"port-in-use"},"Port in use"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Error Message"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"Error: Could not start Database Emulator, port taken.")),(0,o.kt)("p",null,"Should see exact issue in warning, e.g.\n",(0,o.kt)("inlineCode",{parentName:"p"},"! firestore: Port 4003 is not open on localhost, could not start Firestore Emulator."),"\nOr\n",(0,o.kt)("inlineCode",{parentName:"p"},"Something is already running on port 4000.")),(0,o.kt)("p",null,"Try to identify what is already running, and if required kill the process. Methods may differ depending on operating system, here are a couple examples:"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Windows: List processes on port 4003")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"netstat -ano | findstr 4003\n\n/* example output */\nTCP    127.0.0.1:4003         0.0.0.0:0              LISTENING       8272\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Windows: Kill process")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c"},"taskkill /F /PID 8272\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Linux: List processes on port"),"\nSee a few examples at: ",(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/11583562/how-to-kill-a-process-running-on-particular-port-in-linux/32592965"},"https://stackoverflow.com/questions/11583562/how-to-kill-a-process-running-on-particular-port-in-linux/32592965"),"\ne.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo apt-get install lsof\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npx cross-port-killer 4003\n")),(0,o.kt)("h2",{id:"firestore-emulator-fatal-error"},"Firestore Emulator fatal error"),(0,o.kt)("p",null,"If one of the emulators throws a fatal error you might see a vague error message such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u26a0  firestore: Fatal error occurred:\n   Firestore Emulator has exited with code: 1,\n   stopping all running emulators\n")),(0,o.kt)("p",null,"Usually a more informative log can be found in a created log file, e.g. ",(0,o.kt)("a",{parentName:"p",href:"../../../../functions/firestore-debug.log"},"firestore-debug.log")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Exception in thread "main" com.google.cloud.datastore.core.exception.DatastoreException: /mnt/c/apps/oneArmy/community-platform/functions/data/emulated/firestore_export/all_namespaces\\all_kinds\\all_namespaces_all_kinds.export_metadata (No such file or directory)\n    at com.google.cloud.datastore.emulator.impl.ExportImportUtil.parseBackupFile(ExportImportUtil.java:316)\n    at com.google.cloud.datastore.emulator.impl.ExportImportUtil.fetchEntities(ExportImportUtil.java:62)\n    at com.google.cloud.datastore.emulator.firestore.CloudFirestore.main(CloudFirestore.java:90)\nCaused by: java.io.FileNotFoundException: /mnt/c/apps/oneArmy/community-platform/functions/data/emulated/firestore_export/all_namespaces\\all_kinds\\all_namespaces_all_kinds.export_metadata (No such file or directory)\n    at java.base/java.io.FileInputStream.open0(Native Method)\n    at java.base/java.io.FileInputStream.open(FileInputStream.java:219)\n    at java.base/java.io.FileInputStream.<init>(FileInputStream.java:157)\n    at com.google.cloud.datastore.emulator.impl.ExportImportUtil.parseBackupFile(ExportImportUtil.java:312)\n')),(0,o.kt)("p",null,"In this example it is trying to locate the seed data which does not exist, so to fix run the seed command"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn workspace functions run emulator:seed\n")),(0,o.kt)("p",null,"There might be similar issues logged in ",(0,o.kt)("a",{parentName:"p",href:"../../../../functions/firebase-debug.log"},"firesbase-debug.log"),", however this file might be deleted on exit so will require opening before crash"))}d.isMDXComponent=!0},4596:function(e,t,a){t.Z=a.p+"assets/files/seed-default-d31ef33655a46dcb73f651084881ac60.zip"},8836:function(e,t,a){t.Z=a.p+"assets/files/start-94571c3127a48157e3c52161d81634da.ts"},9118:function(e,t,a){t.Z=a.p+"assets/files/index-5ded7ab218408df41dbb8217d12c5807.ts"},1357:function(e,t,a){t.Z=a.p+"assets/images/firebase-emulator-rest-client-827c81b29eb3c9d4fa3c89d24bdddbf4.png"},4197:function(e,t,a){t.Z=a.p+"assets/images/firebase-emulator-seeded-f9d5d4126d2c2bb2a826f385531048ad.png"},2333:function(e,t,a){t.Z=a.p+"assets/images/firebase-emulators-dashboard-44f579db6b1b1e3a1f0ea524d6c2ef1e.png"}}]);
# AJAX সহজপাঠঃ

ওয়েবের দুনিয়াকে কাপিয়ে দেয়া একটা টেকনোলজি হচ্ছে অ্যাজাক্স। আজকের দিনের এতো বড় বড় সিঙ্গেল পেজ অ্যাপ্লিকেশন এর কথা হয়তো চিন্তা ই করা যেতো না অ্যাজাক্স না থাকলে। তো বুঝতেই পারছেন। ছোট মরিচে ঝাল বেশি। :D

অনলাইনে সার্চ করলে বড় বড় প্লেলিস্ট দেখে আপনার খেতে অনিহা চলে আসবে তাই নিজেই তৈরি করে ফেললাম। আগেই বলে রাখলাম এটা কোনো ল্যাঙ্গুয়েজ না। জাভাস্ক্রিপ্ট এর একটা অবজেক্ট। যেই অবজেক্ট টা অনেকটা্ পৃথিবি গ্রহের মতো। চক্করের উপর থাকে কিন্ত মানুষ টের পায় না। অর্থাৎ, আমাদের চোখের সামনে ডাটা আদান প্রধান করবে পেজ রিলোড ছাড়াই। যেটা DOM এর সাথে ইন্টারেক্ট করে। মূলতঃ AJAX DOM এবং XMLHttpRequest object এর কম্বিনেশন। যেটার মাধ্যমে ব্রাউজার সার্ভারে রিকোয়েস্ট পাঠায়। সার্ভার থেকে রেস্পন্স কালেক্ট করে আবার ব্রাউজারে পাঠায়। অনেকটা উড়ন্ত ঘুর্ণি টাইপ। :P
#### AJAX কি?
A = Asynchronous ( কেও কারও জন্য না দাড়াইয়া যে সুযোগ পায় আগে চলে যায়। Asynchronous সিস্টেমে বন্ধুত্বের খাতির নাই। অর্থাৎ যে আগে পারে সে আগে এক্সিকিউট হবে। লাইন বাই লাইন কোড এক্সিকিউট হয় না। )
J = JavaScript ( জাভাস্ক্রিপ্ট আরকি। :P )
A = And ( এবং, ও :P )
X = XML ( xml পড়ার দরকার নাই। পড়েন json (ajax নিয়ে কাজ করতে এখন আর কেও xml ব্যবহার করে না।) :D )

#### এজাক্স যেভাবে কাজ করেঃ
##### **প্রথমে একটা নতুন অবজেক্ট ক্রিয়েট করেঃ**


```javascript
      var xhr = new XMLHttpRequest();
```
> এখানে `variable` নাম xhr না দিয়ে যেটা ইচ্ছা দিতে পারি।

#####  **একটা কলব্যাক ফাংশন ক্রিয়েট করেঃ**
```javascript
      xhr.onreadystatechange = function() {
      };
```

> `onreadystatechange`  একটা ইভেন্ট হ্যান্ডেলার। আর এটা তখনই কল হয়। যখন `readyState` এর অ্যাট্রিভিউট চেঞ্জ হয়। এটা প্রথমে `null` টাইপ থাকে। কিন্ত যখন ফাংশন assign হয়ে যায়। তখনই একটা কলব্যাক ফাংশন তৈরি করে। অর্থাৎ একটা ফাংশনের আর্গুমেন্টে আরেকটা ফাংশন। আর এই কলব্যাক এ যা পাস করা হয় সেটাই `onreadystatechange` ট্রিগার করে।

>state মানে হচ্ছে রেসপন্সের অবস্থা। তো সহজেই বোঝা যায় `readyState` প্রোপার্টি ভ্যালু অনুযায়ী কিছু স্ট্যাটাস ধরে রাখে। যা ক্লায়েন্টেকে দেওয়া ( ক্লায়েন্ট মানে ব্রাউজার ) রেস্পন্সের অবস্থান নির্নয় করে। এখানে রেস্পন্স আইডি দিয়ে দেওয়া হলোঃ

0: UNSENT - লোডিং শুরু হওয়ার আগেই রিটার্ন করবে।
1: OPENED - লোডিং এর সময় রিটার্ন করবে।
2: HEADERS_RECEIVED - লোড কমপ্লিট হওয়ার পর রিটার্ন করবে। header ফাইলগুলো লোড হওয়ার সাথে সাথেই।
3: LOADING - ব্রাউজার পুরো রেন্ডার না হলেও রিটার্ন করবে।`responseText` এ perse হয়ে যায়।
4: DONE - লোডিং শেষ হলে রিটার্ন করবে।
```javascript
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
        }
      };
```
> এখানে আমরা রেস্পন্স আইডি `4` ইউজ করেছি। তার মানে হচ্ছে যদি সকল request শেষ হয়ে যায় এবং আমাদের রেস্পন্স রেডি হয়ে যায়। তাহলে এটা কর। কি করবো তা `if` ব্লকে লিখে দেবো।
```javascript
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          document.getElementById('ajax').innerHTML
        }
      };
```
> এখন আমরা বলে দিলাম যদি `readyState` `4` হয় তাহলে আমার ajax আইডি এর ফাইলের ভিতরে পুরো মার্কাপ স্টোর করে দাও। কি স্টোর করবে সেটা এবার বলবো।

```javascript
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          document.getElementById('ajax').innerHTML = xhr.responseText;
        }
      };
```
> আমরা বলে দিলাম। আমার অ্যাজাক্স এর রেস্পন্সটেক্সট। যেটা একটা empty string যার ভিতরে রেস্পন্স কালেক্ট করে রাখে।

তো আমাদের রেস্পন্স কালেক্ট করা হয় নি। এখন কালেক্ট করবো। আর কালেক্ট করার জন্য **একটা রিকোয়েস্ট ওপেন করবো। open রিকোয়েস্ট এর মাধ্যমে।**

```javascript
      xhr.open('GET', 'ourfile.html');
```
> GET হচ্ছে http verb যার মাধ্যমে ফাইলের এক্সেস নেবো। কোন ফাইলের এক্সেস নেবো সেটা 2nd প্যারামিটার এ বলে দিলাম।

এবার ডাটা পেলাম। এখন **এটাকে আবার সেই কলব্যাক ফাংশনের কাছে পাঠিয়ে দেবো। একটা সেন্ড রিকোয়েস্ট এর মাধ্যমে।**
```javascript
      function sendourfile() {
        xhr.send();
      }
```
এবার আমাদের কাজ শেষ। সেন্ড হওয়ার পর এভাবেই সুপ্ত অবস্থায় চলে যায় এবং কল হয়ে যায়।
```javascript
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          document.getElementById('ajax').innerHTML = xhr.responseText; // responsetext হচ্ছে ourfile.html এর পিতা। যেটা ঘুমিয়ে আছে responsetext এর অন্তরে। :P
        }
      };
```

খেলা শেষ।

এবার হালকা পাতলা রিক্যাপ করে দেই।

```javascript
      //Create XHR object
      var xhr = new XMLHttpRequest();
      //create a calllback funtion
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          document.getElementById('ajax').innerHTML = xhr.responseText;
        }
      };
      //open a requiest
      xhr.open('GET', 'ourfile.html');
      //send the request
      xhr.send();
```

আর পুরো প্রজেক্ট টা তো আছেই উপরে। ডাউনলোড করে এক্সপেরিমেন্ট করেন।

> প্রজেক্টে একটা বাড়তি কাজ করেছি সেটা হচ্ছে `send` রিকোয়েস্টটা একটা বাটনে ঢুকিয়ে দিছি। যাতে send এর ভুমিকা বুঝতে পারেন।

---

এবার আমাদের ব্যাসিক কাজ শেষ হলো কিন্ত এটা একেবারে স্ট্রেইট ফরওয়ার্ড সিস্টেম। অনেকসময় এমন হতে পারে আমাদের ডাটা পাচ্ছে না। বা সার্ভার এরর। তখন ক্লায়েন্টের কাছে সমস্যার কথা না বলে দিলে বেচারা আর জীবনেও আপনার দিকে ফিরে থাকাবে না। এমতাবস্থায় আরেকটা সিস্টেমের সাহায্য নিতে হয় রিয়েল টাইম অ্যাপ্লিকেশিন ডেভেলপমেন্ট এর সময়। যা আমরা প্রায়শই দেখে থাকি। 404 error. 500 server problem ইত্যাদি। গুগলে http স্ট্যাটাস নিয়ে স্টাডি করতে পারেন। স্ট্যাটাস কোড পাবেন। আমরা যাস্ট OK রেস্পন্স কোডটাই আপাতত জেনে কাজ করতে পারি। `OK` রেস্পন্স কোড হচ্ছে `200` তো কন্ডিশন টা এরকম হবেঃ যদি আমার ফাইল লোড হয়ে যায়। যদি আমার ফাইলটা ঠিকঠাক থাকে তাহলে তুমি আমার ফাইলকে এনে দাও। আর যদি না থাকে কি প্রবলেম আছে আমাকে অ্যালার্ট দিয়ে জানাও।
```javascript
    xhr.onreadystatechange = function(){
      if (xhr.readyState === 4) {
        if(xhr.status === 200){
          document.getElementById('ajax').innerHTML = xhr.responseText;
        } else {
          alert(xhr.statusText)
        }
      }
    };
```
> এখানে `status` হচ্ছে HTTP Status. আর `statusText` হচ্ছে এরর লগ। বা এরর ম্যাসেজ।

এবার যদি আপনি ফাইলের নাম চেঞ্জ করেন। বা ফাইল পাথ ভুল দিয়ে দেন আপনাকে এরর দেখাবে।

এবার আসি কাষ্টম এরর ম্যাসেজ নিয়েঃ

তো আমরা চাচ্ছি সাধাসিধে রেস্পন্স না দিয়ে 404 এর জন্য নিজের মতো একটা ম্যাসেজ দেখাতে। তখন আমাদের রেস্পন্স কোড অনুযায়ী কন্ডিশন সেট করবো। এরকম ভাবে।

```javascript
    xhr.onreadystatechange = function(){
      if (xhr.readyState === 4) {
        if(xhr.status === 200){
          document.getElementById('ajax').innerHTML = xhr.responseText;
        } else if(xhr.status === 404){
          //
        } else if(xhr.status === 500){
          //
        }
      }
    };
```
---

এটা গেলো আমাদের প্রথম পর্ব। আমরা জেনে গেলাম text response সম্পর্কে। plain text এবং html. এবার জানবো কিভাবে json থেকে ডাটা ম্যানিপুলেট করা হয়। তো এর জন্য প্রথমে একটা .json ফাইল ক্রিয়েট করবো। `data.json` এবার এখানে কিছু json অবজেক্ট ক্রিয়েট করবো। খুবই সিম্পল।

```javascript
[
  {
    "name" : "Abul Khoyer",
    "mail" : "abulkhoyer69@gmail.com"
  },
  {
    "name" : "jhon Doe",
    "mail" : "jhondoe@gmail.com"
  }

]
```

এই জেসন ডাটা একটা টেক্টট ফাইলের মতো। আমরা এটাকে জাভাস্ক্রিপ্ট অবজেক্ট এ কনভার্ট করবো। যেটাকে বলে `persing`। আগে আমরা একটা ফাইলটা সেটাপ করে নেই।

```javascript
     //Create XHR object
      var xhr = new XMLHttpRequest();
      //create a calllback funtion
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          console.log(xhr.responseText)
        }
      };
      //open a requiest
      xhr.open('GET', 'data.json');
      //send the request
      xhr.send();
```
> এবার আমরা রেস্পন্স টা কন্সোলে প্রিন্ট করেছি। এই ক্ষেত্রে আমাদের রেস্পন্স হচ্ছে `data.json`

এবার আমরা এই json অবজেক্ট কে জাভাস্ক্রিপ্ট অবজেক্ট এ কনভার্ট করবো।

```javascript
     //Create XHR object
      var xhr = new XMLHttpRequest();
      //create a calllback funtion
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          var jsobj = JSON.parse(xhr.responseText);
        }
      };
      //open a requiest
      xhr.open('GET', 'data.json');
      //send the request
      xhr.send();
```
json `parse` করা সম্পন্য হলো। এবার আমরা ডাটা নিয়ে কাজ করতে পারি। এখন এই ইনফরমেশন কিভাবে আমাদের ওয়েবপেজে আউটপুট দেবো সেটা দেখি।

```javascript
//Create XHR object
var xhr = new XMLHttpRequest();
//create a calllback funtion
xhr.onreadystatechange = function () {
   if (xhr.readyState === 4) {
       var jsonobj = JSON.parse(xhr.responseText);
       var namelist = '<ul class="namelist">';
       namelist += '<li class="name">';
       for (var i = 0; i < jsonobj.length; i++) {
           namelist += '<li class="singleli">';
           namelist += jsonobj[i].name;
           namelist += '</li>';
           namelist += '</br>';
       }
       namelist += '</ul>';
       document.getElementById('employeeList').innerHTML = namelist;
   }
};
//open a requiest
xhr.open('GET', 'data/data.json');
//send the request
xhr.send();
```


আমাদের কাজ শেষ। এবং এ পর্যন্ত জানলেই আপনি যেকোনো প্রজেক্ট হ্যান্ডেল করতে পারবেন।



## check if the student passed or failed,. 
 create three var, name, total marks, obtained marks, passing critaria 33% 
 const name = "Asim"
 const totalMarks

## assignemt, calcualte discount , 15 % discount for members. 
 is member, purchase amount,
   if isMember, then apply 15% discout 
  else tell the user to becoem a member. 


## similarly use if-else ladder to discribe temptrature. 

 less then 0 . tell to saty inside, 
 less 10, very cold, 
/ less then 20 cold
 less then 30,  prelsent 
 less then 40, warm stay hydrated. 
 else ; dangerous heat. 


## : User Registration - BAD vs GOOD


 // BAD: Deeply nested conditionals (Pyramid of Doom)

 ```js

 function registerUserBad(username, email, password, age) {
     if (username) {
         if (username.length >= 3) {
             if (email) {
                 if (email.includes("@")) {
                     if (password) {
                         if (password.length >= 8) {
                             if (age) {
                                 if (age >= 18) {
                                      Finally! The actual logic buried deep
                                     return {
                                         success: true,
                                https:js-classroom-eight.vercel.app/         message: "User registered successfully!",
                                         user: { username, email, age }
                                     };
                                 } else {
                                     return { success: false, message: "Must be 18 or older" };
                                 }
                             } else {
                                 return { success: false, message: "Age is required" };
                             }
                         } else {
                             return { success: false, message: "Password too short" };
                         }
                     } else {
                         return { success: false, message: "Password is required" };
                     }
                 } else {
                     return { success: false, message: "Invalid email format" };
                 }
             } else {
                 return { success: false, message: "Email is required" };
             }
         } else {
             return { success: false, message: "Username too short" };
         }
     } else {
         return { success: false, message: "Username is required" };
     }
 }
```

## Process Payment - Refactoring Exercise

```js

// BAD: Nested version
 function processPaymentBad(user, amount, paymentMethod) {
     if (user) {
         if (user.isActive) {
             if (amount > 0) {
                 if (amount <= user.balance) {
                     if (paymentMethod) {
                         if (paymentMethod === "card" || paymentMethod === "wallet") {
                              Process payment
                             user.balance -= amount;
                             return { success: true, newBalance: user.balance };
                         } else {
                             return { success: false, error: "Invalid payment method" };
                         }
                     } else {
                         return { success: false, error: "Payment method required" };
                     }
                 } else {
                     return { success: false, error: "Insufficient balance" };
                 }
             } else {
                 return { success: false, error: "Invalid amount" };
             }
         } else {
             return { success: false, error: "Account is inactive" };
         }
     } else {
         return { success: false, error: "User not found" };
     }
 }
 ```

 password strength checker :  it uses regex. advance


## Nested booking validation
```js
 function bookAppointmentBad(patient, doctor, date, time) {
     if (patient) {
         if (patient.name && patient.phone) {
             if (doctor) {
                 if (doctor.available) {
                     if (date) {
                         if (new Date(date) > new Date()) {
                             if (time) {
                                 if (time >= "09:00" && time <= "17:00") {
                                     return { 
                                         success: true, 
                                         booking: { patient: patient.name, doctor: doctor.name, date, time }
                                     };
                                 } else { return { success: false, error: "Time must be 9AM-5PM" }; }
                             } else { return { success: false, error: "Time required" }; }
                         } else { return { success: false, error: "Date must be in future" }; }
                     } else { return { success: false, error: "Date required" }; }
                 } else { return { success: false, error: "Doctor not available" }; }
             } else { return { success: false, error: "Doctor required" }; }
         } else { return { success: false, error: "Patient info incomplete" }; }
     } else { return { success: false, error: "Patient required" }; }
 }
```
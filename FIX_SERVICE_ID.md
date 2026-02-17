# תיקון Service ID

## הבעיה:
השגיאה אומרת שה-Service ID לא נמצא. זה אומר שה-Service ID `service_lbzo2r4` לא קיים או לא מוגדר נכון.

## איך למצוא את ה-Service ID הנכון:

1. היכנס ל-https://dashboard.emailjs.com/admin
2. לך ל-"Email Services" בתפריט
3. לחץ על השירות שיצרת (Gmail/Outlook וכו')
4. תמצא את ה-Service ID - זה נראה כמו: `service_xxxxxxx`
5. העתק את ה-Service ID

## איך לעדכן את הקוד:

1. פתח את `script.js`
2. מצא את השורה:
   ```javascript
   emailjs.send('service_lbzo2r4', 'template_olzjc8d', emailParams)
   ```
3. החלף את `service_lbzo2r4` ב-Service ID הנכון שקיבלת

## אם אין לך Service:

אם אין לך Service מוגדר, צריך ליצור אחד:

1. היכנס ל-https://dashboard.emailjs.com/admin
2. לך ל-"Email Services"
3. לחץ על "Add New Service"
4. בחר את שירות המייל שלך (Gmail/Outlook וכו')
5. התחבר לחשבון המייל שלך
6. העתק את ה-Service ID החדש
7. עדכן את הקוד עם ה-Service ID החדש


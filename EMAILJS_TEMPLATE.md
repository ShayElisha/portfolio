# הוראות יצירת Email Template ב-EmailJS

## שלב 1: יצירת Template

1. היכנס ל-https://www.emailjs.com
2. לך ל-"Email Templates" בתפריט
3. לחץ על "Create New Template"

## שלב 2: הגדרת Template

### Subject (נושא):
```
{{subject}} - הודעה מ-{{from_name}}
```

### Content (תוכן):
```
שם: {{from_name}}
אימייל: {{from_email}}
נושא: {{subject}}

הודעה:
{{message}}

---
הודעה זו נשלחה מטופס יצירת קשר באתר הפורטפוליו.
```

### To Email (אל מי לשלוח):
```
shayelisha2312@gmail.com
```

### From Name (ממי):
```
{{from_name}}
```

### Reply To (השב ל-):
```
{{from_email}}
```

## שלב 3: שמירה

1. לחץ על "Save" (שמור)
2. העתק את ה-Template ID (נראה כמו: `template_xxxxxxx`)

## הערות חשובות:

- ה-`{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}` הם משתנים שמגיעים מהאתר
- התוכן האמיתי יגיע מהטופס באתר שלך
- הטמפלט רק מגדיר את המבנה והעיצוב של המייל

## שלב 4: קבלת Public Key

1. לך ל-"Account" → "General"
2. העתק את ה-Public Key (נראה כמו: `xxxxxxxxxxxxx`)

## שלב 5: עדכון הקוד

שלח לי את:
- Template ID
- Public Key

ואני אעדכן את הקוד עבורך!


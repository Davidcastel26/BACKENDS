
---
-> strings in redis

set [KEY_NAME] STRING_NAME 

set  name  David 

---
->check the string key = name

get [KEY]

get name

----
-> set a variable

set [KEY_NAME] [VARIABLE_NAME]

set    email   emdail@domain.com

---
-> get a range of characater 

getrange [key] [range]

getrange email 0 4

----
-> how to set multiple strings

mset [KEY] [VARIABLE] [KEY] [VARIABLE]

mset lang English technology Redis

---
-> get multiple strings

mget [KEY] [KEY]

mget email name

---
-> get the length total in the string

strlen [KEY]

strlen name
---
-> rename the variable

set [SAME KEY] [NEW NAME]

set name Ale

---
-> checking if exist

get [KEY]

get abab 

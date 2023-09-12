-> get all data

keys * 

---
-> delete all keys

flushall

---
-> Create a list

lpush [KEY] [VALUES ]

lpush country India

---
-> get all data in list

lrange [KEY] [ RANGE NUMBER]

lrange country 0 -1      = -1 is same as all elemtns

---
-> to add at the end of the list

rpush [KEY] [VALUE NAME]

rpush country Australia

---
-> revuew the legnth size

llen [KEY NAME]

llen country

---
->removew data for the begining

lpop [KEY NAME]

lpop country

---
-> REMOVEW THE DATA FROM THE END OF LIST

rpop [KEY NAME]

rpop country

---
-> change a vlues in the list

lset [KEY VALUE] [INDEX] [NEW NAME]

lset country 0 Germany

---
-> to add a sting into specif place in the list

linsert [KEY NAME] before [NAME POSITION] [NEW WWE ADDED]

linsert country before Germany Guatemala

---
-> set other space in list

linsert [KEY VALUE] after [VALUE EXIST] [NEW VALUES NAME]

linsert country after USA  MEXICO

---
-> GET value by index into list

lindex [KEY VALUE] [INDEX NUMBER]

lindex country 2

---
-> check if exist and added if so

lpushx [KEY NAME] [VALUE NAME]

lpushx country INDIA

---
-> add in the buttom

rpushx [KEY NAME] [VALUE NAME]

rpushx country Colombia

---
-> sort data in list

order by asending
sort [KEY NAME] ALPHA 

order by descending
sort [KEY NAME] desc ALPHA

sort country desc ALPHA

---
-> block the execution 

blpop [KEY NAME]

blpop country

---
-> check the amount of values into the set

scard [KEY NAME]

scard technology

if you would like to check if there available 
we can use:

sismember [KEY NAME] [VALUE NAME]

this will return a number value could be 1 or 0
if its 1 means that exists into the set
if its 0 means value does not exist in the set

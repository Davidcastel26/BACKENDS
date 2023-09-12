
-> create a set

sadd [KEY NAME] [VALUE NAME]

sadd technology JAVASCRIPT

---
-> in sets we can add many string in row

sadd technology JAVA NODEJS AWS

this will add each of the values into different space
but if we add again a name its already there this will not be
added in the set

sadd technology JAVA 
= (integer) 0


---
-> to check the difference into two sets

sdiff [KEY NAME] [KEY NAME]

sdiff technology frontend

---
-> store in other set

sidffstore [NEW KEY NAME] [KEY NAME] [KEY NAME]

sidffstore newset technology fronted

---
-> check the values in set

smembers [KEY NAME]

smembers newset

---
-> check what are in common in the sets

sinter [KEY NAME] [KEY NAME]

sinter technology fronted

to save all the differents values into a new set use

sinterstore [KEY NAME] [KEY NAME] [KEY NAME]
sinterstore [NEW KEY NAME] [KEY NAME] [KEY NAME] [KEY NAME]

---
-> get the union for mutiple sets

sunion [KEY NAME] [KEY NAME]

sunion technology frontned

to sabe all togeter
sunionstore [NEW KEY NAME] [KEY NAME] [KEY NAME]

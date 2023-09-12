
-> setting numbers

set [KEY] [NUMBER VALUE]

set count 1

---
-> increment the number by one

incr [KEY]

incr count

---
-> increment by a specifct number

incrby [KEY] [NUMBER SPECIFICT]

incrby count 10

---

-> decrement the number by one

decr [KEY]

decr count

---
-> decrement by a specifct number

decrby [KEY] [NUMBER SPECIFICT]

decrby count 10

---

-> store float values

set [KEY] [float number]
 
SET PI 3.14

---

-> increment float numbers

incrbyfloat [KEY] [AMOUNT]

incrbyfloat pi 0.0001

---

-> expire values

expire [KEY] [NUMBER - THIS R IN SECS]

expire name 10

---

-> check how many secs are left

ttl [KEY]

ttl name

---

-> set a expiration when set the variable

setex b 10 lastname 
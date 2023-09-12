> this will store from store values

zadd [KEY NAME] [number] [value name]

zadd users 1 Dave

number is the store order into set

zadd users 2 alex 3 nimah 4 steve

---
> to get all sets zadd values

zrange [KEY NAME] [value number - number]

zrange users 0 -1

or with score number 

zrange [KEY NAME] [value number - number] withscores

zrange users 0 -1 withscores

---
> values availables 

zcard [KEY NAME]

zcard user

> to get count base of values availabes

zcount [KEY NAME] -inf +inf

zcount users -inf +inf

---
> to remove a values

zrem [KEY NAME] [name value]

zrem user alex

---
> to get values in desc

zrevrange [KEY NAME] [number to number] withscores

zrevrange users 0 -1 withscores

---
> find score value

zscore [KEY NAME] [name value]

zscore user Dave

---
> reverse set info

zrevrangebyscore [KEY NAME] [ number to number] withscores

zrevrangebyscore users 5 0 withscores

---
> set a score value

zincrby [KEY NAME] [number] [value name]

zincrby users 2 Dave

---
> remove value by score

zremrangebyscore [KEY NAME] [number to number]

zremrangebyscore users 5 6

---
> remove by rank

zremrangebyrank [KEY NAME] [number to number]

zremrangebyrank user 0 2
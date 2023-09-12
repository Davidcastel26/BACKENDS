> hyperlogs create
pfadd [KEY VALUE] [VALUES]
pfadd hil b c de f

---
> COUNT values

pfcount [KEY VALUE]

pfcount hll

---
> count hyperlogs 

pfcount [KEY VALUE] [KEY VALUE]

---
> create a merge hyperlogs

pfmerge [NEW KEY VALUE] [KEY VALUE] [KEY VALUE]